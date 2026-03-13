import { prisma } from "@/lib/prisma"

export async function GET() {

  const films = await prisma.film.findMany({
    orderBy:{
      createdAt:"desc"
    }
  })

  return Response.json(films)
}

export async function POST(req:Request){

  const body = await req.json()

  const film = await prisma.film.create({
    data:{
      ...body,
      id: BigInt(body.id)
    }
  })

  return Response.json(film)
}