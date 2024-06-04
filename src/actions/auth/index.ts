import { currentUser } from '@clerk/nextjs';
'use server'

const users = [];

const registerUser = (user) => {
  users.push(user)
  return {
    registered: true
  }
}

const findUser = () => {

  const user = users.find(user => user.clerkId === user.id)

  return {
    user,
    authenticated: true
  }
}

export const onCompleteUserRegistration = async (
  fullname: string,
  clerkId: string,
  type: string
) => {
  try {
    const { registered } = registerUser(
      {
        fullname,
        clerkId,
        type,
        subscription: {
          create: {},
        },
        select: {
          fullname: true,
          id: true,
          type: true,
        },
      }
    )

    if (registered) {
      return { status: 200, user: registered }
    }
  } catch (error) {
    return { status: 400 }
  }
}

export const onLoginUser = async () => {

  const currentUser = { id: "1" }

  try {
    const { authenticated, user } = findUser({
      id: currentUser.id
    })

    if (authenticated) {
      return { status: 200, user }
    }
  } catch (error) {
    return { status: 400 }
  }
}

