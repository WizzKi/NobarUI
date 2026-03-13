export default function NobarStats({films}){

const total = films.length

const avgSadness =
films.reduce((a,b)=> a + Number(b.riskiSad) + Number(b.rapaSad),0) /
(films.length*2 || 1)

return(

<div className="grid md:grid-cols-3 gap-4 mt-10">

<div className="bg-gray-800 p-4 rounded">

🎬 Total Film
<h3 className="text-2xl font-bold">
{total}
</h3>

</div>

<div className="bg-gray-800 p-4 rounded">

😭 Avg Sadness
<h3 className="text-2xl font-bold">
{avgSadness.toFixed(1)}
</h3>

</div>

<div className="bg-gray-800 p-4 rounded">

⭐ Avg Rating
<h3 className="text-2xl font-bold">

{(
films.reduce((a,b)=> a + Number(b.riskiRating) + Number(b.riskiRating),0) /
(films.length*2 || 1)
).toFixed(1)}

</h3>

</div>

</div>

)

}