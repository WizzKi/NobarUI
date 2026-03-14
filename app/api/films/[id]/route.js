import { prisma } from "@/lib/prisma"

export async function GET(req, context){

const params = await context.params
const id = Number(params.id)

const film = await prisma.film.findUnique({
where:{
id:id
}
})

if(!film){
return Response.json(
{error:"Film tidak ditemukan"},
{status:404}
)
}

return Response.json(film)

}