"use client"

import { useState } from "react"
import { FaStar } from "react-icons/fa"

export default function FilmForm({ films, setFilms }){

const [title,setTitle] = useState("")
const [genre,setGenre] = useState("")
const [date,setDate] = useState("")
const [comment,setComment] = useState("")
const [poster,setPoster] = useState(null)

const [riskiRating,setRiskiRating] = useState(0)
const [rapaRating,setRapaRating] = useState(0)

const [riskiSad,setRiskiSad] = useState(5)
const [rapaSad,setRapaSad] = useState(5)


const handlePoster = (e)=>{
const file = e.target.files[0]

if(file){
setPoster(URL.createObjectURL(file))
}
}


const addFilm = async () => {

if(!title) return

const newFilm = {
title,
genre,
date,
comment,
poster,
riskiRating:Number(riskiRating),
rapaRating:Number(rapaRating),
riskiSad:Number(riskiSad),
rapaSad:Number(rapaSad)
}

const res = await fetch("/api/films",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(newFilm)
})

const createdFilm = await res.json()

setFilms([createdFilm, ...films])

}


const StarRating = ({rating,setRating})=>{

return(

<div className="flex gap-1 text-yellow-400 text-xl">

{[1,2,3,4,5,6,7,8,9,10].map((star)=>(

<FaStar
key={star}
className={`cursor-pointer ${star<=rating?"":"opacity-30"}`}
onClick={()=>setRating(star)}
/>

))}

</div>

)

}


return(

<div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-10">

<h2 className="text-2xl font-bold mb-6">
🎬 Tambah Film Nobar
</h2>

<div className="grid md:grid-cols-2 gap-6">

{/* Poster */}

<div>

<label className="text-gray-300 mb-2 block">
Poster Film
</label>

<input
type="file"
onChange={handlePoster}
className="bg-gray-700 p-2 rounded w-full"
/>

{poster &&(

<img
src={poster}
className="mt-4 rounded-xl shadow-lg w-48"
/>

)}

</div>


{/* Info Film */}

<div className="flex flex-col gap-4">

<input
type="text"
placeholder="Judul Film"
value={title}
onChange={(e)=>setTitle(e.target.value)}
className="bg-gray-700 p-3 rounded"
/>

<input
type="text"
placeholder="Genre (Romance / Drama / Anime)"
value={genre}
onChange={(e)=>setGenre(e.target.value)}
className="bg-gray-700 p-3 rounded"
/>

<input
type="date"
value={date}
onChange={(e)=>setDate(e.target.value)}
className="bg-gray-700 p-3 rounded"
/>

<textarea
placeholder="Komentar setelah nonton..."
value={comment}
onChange={(e)=>setComment(e.target.value)}
className="bg-gray-700 p-3 rounded"
/>

</div>

</div>


{/* Rating Section */}

<div className="grid md:grid-cols-2 gap-6 mt-6">

<div>

<p className="mb-2">
⭐ Rating Riski
</p>

<StarRating rating={riskiRating} setRating={setRiskiRating}/>

</div>

<div>

<p className="mb-2">
⭐ Rating Rapa
</p>

<StarRating rating={rapaRating} setRating={setRapaRating}/>

</div>

<div>

<p className="mb-2">
😭 Sadness Riski : {riskiSad}
</p>

<input
type="range"
min="1"
max="10"
value={riskiSad}
onChange={(e)=>setRiskiSad(Number(e.target.value))}
className="w-full"
/>

</div>

<div>

<p className="mb-2">
😭 Sadness Rapa : {rapaSad}
</p>

<input
type="range"
min="1"
max="10"
value={rapaSad}
onChange={(e)=>setRapaSad(Number(e.target.value))}
className="w-full"
/>

</div>

</div>


<button
onClick={addFilm}
className="mt-6 w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold"
>

Tambah Film

</button>

</div>

)

}