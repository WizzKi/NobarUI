"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

export default function FilmDetail(){

const params = useParams()
const id = params.id

const [film,setFilm] = useState(null)
const [loading,setLoading] = useState(true)

useEffect(()=>{

const films = JSON.parse(localStorage.getItem("films")) || []

const found = films.find(
f => String(f.id) === String(id)
)

setFilm(found)
setLoading(false)

},[id])

if(loading){
return(
<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
Loading film...
</div>
)
}

if(!film){
return(
<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
Film tidak ditemukan
</div>
)
}

const avgRating = ((film.riskiRating + film.rapaRating)/2).toFixed(1)
const avgSad = ((film.riskiSad + film.rapaSad)/2).toFixed(1)

return(

<div className="min-h-screen bg-gray-900 text-white relative">

{/* Background */}
<div
className="absolute inset-0 bg-cover bg-center opacity-20 blur-xl"
style={{backgroundImage:`url(${film.poster})`}}
></div>

<div className="relative max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-10">

{/* Poster */}
<div className="flex justify-center">
<img
src={film.poster}
alt={film.title}
className="w-[340px] rounded-xl shadow-2xl"
/>
</div>

{/* Info */}
<div>

<h1 className="text-4xl font-bold mb-2">
{film.title}
</h1>

<p className="text-gray-400 mb-2">
 {film.genre}
</p>

<p className="text-gray-400 mb-6">
 {film.date}
</p>

<div className="flex gap-4 mb-8">

<div className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold">
⭐ Rating {avgRating}
</div>

<div className="bg-purple-600 px-4 py-2 rounded-lg font-bold">
😭 Sadness {avgSad}
</div>

</div>

<div className="bg-gray-800 p-5 rounded-lg mb-5">
<h3 className="font-semibold mb-2">⭐ Rating</h3>
<p>Riski : {film.riskiRating}/10</p>
<p>Rapa : {film.rapaRating}/10</p>
</div>

<div className="bg-gray-800 p-5 rounded-lg mb-5">

<h3 className="font-semibold mb-4">
😭 Sadness
</h3>

<div className="mb-3">

<p>Riski</p>

<div className="w-full bg-gray-700 h-3 rounded">
<div
className="bg-purple-500 h-3 rounded"
style={{width:`${film.riskiSad*10}%`}}
></div>
</div>

</div>

<div>

<p>Rapa</p>

<div className="w-full bg-gray-700 h-3 rounded">
<div
className="bg-pink-500 h-3 rounded"
style={{width:`${film.rapaSad*10}%`}}
></div>
</div>

</div>

</div>

<div className="bg-gray-800 p-5 rounded-lg">
<h3 className="font-semibold mb-2">💬 Comment</h3>
<p>{film.comment || "Belum ada komentar"}</p>
</div>

</div>

</div>

</div>

)

}