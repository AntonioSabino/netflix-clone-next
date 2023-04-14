import { NextApiRequest, NextApiResponse } from 'next'

import prismadb from '@/lib/prismadb'
import serverAuth from '@/lib/serverAuth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).end()
    return
  }

  try {
    await serverAuth(req)

    const movieCount = await prismadb.movie.count()
    const randomIndex = Math.floor(Math.random() * movieCount)

    const randomMoveis = await prismadb.movie.findMany({
      skip: randomIndex,
      take: 1
    })

    return res.status(200).json(randomMoveis[0])
  } catch (error) {
    res.status(401).end()
    return
  }
}
