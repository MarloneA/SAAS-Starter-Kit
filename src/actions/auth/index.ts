"use server";

import { auth, signIn, signOut } from "@/auth";
import { db } from "@/lib/db";
import { User, Session } from "@/lib/types/definitions";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const saltRounds = process.env.BYCRYPT_SALT_ROUNDS as string;

export const hashPassword = async (password: string): Promise<string> => {
  const salt = bcrypt.genSaltSync(parseInt(saltRounds));
  return bcrypt.hashSync(password, salt);
};

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    const signInResult = await signIn("credentials", formData);

    return signInResult;
  } catch (error) {
    throw error;
  }
}

export async function authenticateGithub(): Promise<void> {
  try {
    await signIn("github", { redirectTo: "/dashboard" });
  } catch (error) {
    throw error;
  }
}
export async function authenticateGoogle(): Promise<void> {
  try {
    await signIn("google", { redirectTo: "/dashboard" });
  } catch (error) {
    throw error;
  }
}

export async function authCreate(
  _currentState: unknown,
  formData: FormData
): Promise<User | undefined> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const hashedPassword = await hashPassword(password);

  try {
    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    if (user) {
      redirect("/login");
    }

    return user;
  } catch (error) {
    throw error;
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
    throw new Error("Failed to fetch user.");
  }
}

// if you want to save the session in the db use createSession and getSession, otherwise you can just access them from the browser
// remember to set the session strategy from jwt to database if you want to use the database. checkout auth.config.ts

export async function createSession() {
  try {
    const { user, expires } = await auth();

    // Generate a unique session ID
    const session = await db.session.create({
      data: {
        sessionToken: "sessionId",
        userId: user?.id,
        expires,
      },
    });
    return session;
  } catch (error) {
    throw error;
  }
}

export async function getSession(): Promise<Session | null> {
  const sessionId = cookies().get("sessionId")?.value;
  return sessionId
    ? await db.session.findUnique({
        where: {
          sessionToken: sessionId,
        },
      })
    : null;
}

export async function checkIsAuthenticated(): Promise<{
  isAuthenticated: boolean;
}> {
  const session = await auth();

  if (session) {
    return { isAuthenticated: true };
  } else return { isAuthenticated: false };
}

export async function logout(): Promise<void> {
  await signOut();
}
