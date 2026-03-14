import { prisma } from "@/lib/prisma"

export async function POST(req){

const body = await req.json()

const updates = body.ranking

for(const item of updates){

await prisma.film.update({
where:{ id:item.id },
data:{ ranking:item.rank }
})

}

return Response.json({success:true})

}