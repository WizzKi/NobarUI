export default function NobarTimeline({films}){

return(

<div className="mt-16">

<h2 className="text-3xl font-bold mb-10">
📅 Timeline Nobar
</h2>

<div className="relative border-l-2 border-gray-700 ml-4">

{films.map((film,i)=>(

<div
key={film.id}
className="mb-10 ml-6 flex items-center gap-6"
>

{/* titik timeline */}

<div className="absolute -left-[9px] w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>

{/* poster */}

<img
src={film.poster || "/noimage.jpg"}
className="w-20 h-28 object-cover rounded-lg shadow-lg"
/>

{/* info */}

<div>

<p className="text-sm text-gray-400">
Film #{i+1}
</p>

<h3 className="text-xl font-semibold">
{film.title}
</h3>

<p className="text-gray-500 text-sm">
{film.genre || "Unknown Genre"}
</p>

<p className="text-gray-400 text-xs mt-1">
{film.date || "Tanggal tidak diketahui"}
</p>

</div>

</div>

))}

</div>

</div>

)
}