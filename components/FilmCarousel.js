"use client"

import Link from "next/link"

export default function FilmCarousel({ films }) {

if(!films || films.length === 0){
return (
<div className="mt-10 text-gray-400">
Belum ada film yang ditambahkan
</div>
)
}

return(

<div className="mt-10">

<h2 className="text-2xl font-bold mb-4">
🎬 Film Nobar
</h2>

<div className="flex gap-4 overflow-x-auto pb-4">

{films.map((film)=>(
  
<Link
key={film.id}
href={`/film/${film.id}`}
className="min-w-[180px] bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition block"
>

<img
src={film.poster}
alt={film.title}
className="h-64 w-full object-cover"
/>

<div className="p-3">

<p className="font-semibold text-sm">
{film.title}
</p>

</div>

</Link>

))}

</div>

</div>

)

}