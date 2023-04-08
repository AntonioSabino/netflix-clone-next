import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'

import prismadb from '@/lib/prismadb'
import { compare } from 'bcrypt'

const jwtSecret = process.env.NEXTAUTH_JWT_SECRET
const appSecret = process.env.NEXTAUTH_SECRET

const authOptions = {
  providers: [
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text'
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {}
        if (!email || !password)
          throw new Error('Email and password are required')

        const user = await prismadb.user.findUnique({
          where: {
            email
          }
        })

        if (!user || !user.hashedPassword) {
          throw new Error('Email or password is incorrect')
        }

        const isCorrectPassword = await compare(password, user.hashedPassword)

        if (!isCorrectPassword) {
          throw new Error('Email or password is incorrect')
        }

        return user
      }
    })
  ],
  pages: {
    signIn: '/auth'
  },
  debug: process.env.NODE_ENV === 'development',
  jwt: {
    secret: jwtSecret
  },
  secret: appSecret
}

export default NextAuth(authOptions)