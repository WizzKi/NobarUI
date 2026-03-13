import { prisma } from "@/lib/prisma"

export async function GET(){

const films = await prisma.film.findMany({
orderBy:{
id:"desc"
}
})

return Response.json(films)

}

export async function POST(req){

const body = await req.json()

const film = await prisma.film.create({
data:{
title: body.title,
genre: body.genre,
date: body.date,
comment: body.comment,
poster: body.poster,

riskiRating: body.riskiRating,
rapaRating: body.rapaRating,

riskiSad: body.riskiSad,
rapaSad: body.rapaSad
}
})

return Response.json(film)

}