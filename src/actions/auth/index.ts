'use server'

import { auth, signIn } from '@/auth'
import { db } from '@/lib/db';
import { User } from '@/lib/definitions';
import bcrypt from "bcrypt";
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

// export async function handleLogin(sessionData) {
//   const encryptedSessionData = encrypt(sessionData) // Encrypt your session data
//   cookies().set('session', encryptedSessionData, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     maxAge: 60 * 60 * 24 * 7, // One week
//     path: '/',
//   })
//   // Redirect or handle the response after setting the cookie
// }

const saltRounds = process.env.BYCRYPT_SALT_ROUNDS;

export const hashPassword = async (password: string) => {
  const salt = bcrypt.genSaltSync(parseInt(saltRounds));
  return bcrypt.hashSync(password, salt);
};

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    const signInResult = await signIn('credentials', formData);
    console.log('signInResult: ', signInResult);

    return signInResult;

  } catch (error) {
    throw error
  }
  // revalidatePath('/log') // Update cached posts
  redirect(`/dashboard`)
}

export async function authCreate(_currentState: unknown, formData: FormData) {

  const email = formData.get("email")
  const password = formData.get("password")
  const hashedPassword = await hashPassword(password)

  try {
    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return user
  } catch (error) {
    throw error
  }
}

export async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    return user;

  } catch (error) {
    throw new Error('Failed to fetch user.');
  }
}

// if you want to save the session in the db use createSession and getSession, otherwise you can just access them from the browser 
// remember to set the session strategy from jwt to database if you want to use the database. checkout auth.config.ts

export async function createSession(user: User) {
  try {
    const { user, expires } = await auth();

    // Generate a unique session ID
    const session = await db.session.create({
      data: {
        sessionToken: "sessionId", userId: user?.id, expires
      }
    })
    return session
  } catch (error) {
    throw error
  }
}

export async function getSession() {
  const sessionId = cookies().get('sessionId')?.value
  return sessionId ? await db.session.findUnique({
    where: {
      sessionToken: sessionId
    }
  }) : null
}

export async function checkIsAuthenticated() {
  const session = await auth();

  if (session) {
    return { isAuthenticated: true };
  } else return { isAuthenticated: false };
}

export async function logout() {
  cookies().delete("authjs.callback-url");
  cookies().delete("authjs.session-token");
}