export default function NobarTimeline({films}){

return(

<div className="mt-12">

<h2 className="text-2xl font-bold mb-6">
📅 Timeline Nobar
</h2>

<div className="border-l border-gray-700 pl-6">

{films.map((film,i)=>(

<div key={film.id} className="mb-6">

<div className="text-sm text-gray-400">
Film #{i+1}
</div>

<div className="text-lg font-semibold">
{film.title}
</div>

</div>

))}

</div>

</div>

)

}