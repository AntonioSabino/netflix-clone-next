import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { compare } from 'bcrypt'

enum Strategy {
  JWT = 'jwt'
}

import prismadb from '@/lib/prismadb'

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
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
      async authorize(credentials, _req) {
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
  adapter: PrismaAdapter(prismadb),
  session: { strategy: Strategy.JWT },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET
  },
  secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)
