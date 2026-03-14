"use client"

import { useState, useEffect } from "react"

export default function FilmRankingManual({films}){

const [ranking,setRanking] = useState([])
const [selected,setSelected] = useState("")

/* load ranking dari database */

useEffect(()=>{

const rankedFilms = films
.filter(f => f.ranking !== null)
.sort((a,b)=> a.ranking - b.ranking)

setRanking(rankedFilms)

},[films])


/* save ranking ke database */

const saveRanking = async (newRank)=>{

setRanking(newRank)

const payload = newRank.map((film,index)=>({
id:film.id,
rank:index+1
}))

await fetch("/api/ranking",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({ranking:payload})
})

}


/* tambah film ke ranking */

const addRanking = ()=>{

if(!selected) return

const film = films.find(f => f.id == selected)

if(!film) return

if(ranking.find(r => r.id == film.id)) return

const newRank = [...ranking,film]

saveRanking(newRank)

setSelected("")
}


/* move up */

const moveUp = (index)=>{

if(index === 0) return

const newRank = [...ranking]

const item = newRank.splice(index,1)[0]

newRank.splice(index-1,0,item)

saveRanking(newRank)

}


/* move down */

const moveDown = (index)=>{

if(index === ranking.length - 1) return

const newRank = [...ranking]

const item = newRank.splice(index,1)[0]

newRank.splice(index+1,0,item)

saveRanking(newRank)

}


/* remove film */

const removeFilm = (index)=>{

const newRank = ranking.filter((_,i)=> i !== index)

saveRanking(newRank)

}


return(

<div className="bg-gray-800 p-6 rounded-xl mt-10">

<h2 className="text-2xl font-bold mb-6">
🏆 Ranking Film Nobar
</h2>

{/* pilih film */}

<div className="flex gap-3 mb-6">

<select
value={selected}
onChange={(e)=>setSelected(e.target.value)}
className="bg-gray-700 p-3 rounded w-full"
>

<option value="">Pilih Film</option>

{films.map(film=>(
<option key={film.id} value={film.id}>
{film.title}
</option>
))}

</select>

<button
onClick={addRanking}
className="bg-yellow-500 px-4 rounded font-semibold"
>
Tambah
</button>

</div>


{/* podium top 3 */}

<div className="grid grid-cols-3 gap-4 mb-8">

{ranking.slice(0,3).map((film,i)=>(

<div
key={film.id}
className="bg-gray-700 p-4 rounded text-center"
>

<p className="text-xl font-bold mb-2">
#{i+1}
</p>

<img
src={film.poster}
className="h-32 mx-auto rounded mb-2"
/>

<p>{film.title}</p>

</div>

))}

</div>


{/* ranking list */}

<div className="space-y-4">

{ranking.map((film,i)=>(

<div
key={film.id}
className="flex items-center gap-4 bg-gray-700 p-3 rounded"
>

<p className="font-bold text-lg">
{i+1}
</p>

<img
src={film.poster}
className="w-14 rounded"
/>

<p className="flex-1">
{film.title}
</p>

<div className="flex gap-2">

<button
onClick={()=>moveUp(i)}
className="bg-blue-500 px-2 rounded"
>
⬆
</button>

<button
onClick={()=>moveDown(i)}
className="bg-blue-500 px-2 rounded"
>
⬇
</button>

<button
onClick={()=>removeFilm(i)}
className="bg-red-500 px-2 rounded"
>
❌
</button>

</div>

</div>

))}

</div>

</div>

)

}