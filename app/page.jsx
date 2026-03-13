"use client"

import { useState, useEffect } from "react"

import FilmForm from "../components/FilmForm"
import FilmCarousel from "../components/FilmCarousel"
import FilmDragRanking from "../components/FilmDragRanking"
import NobarStats from "../components/NobarStats"
import NobarTimeline from "../components/NobarTimeline"
import SadnessChart from "../components/SadnessChart"

export default function Home(){

    const [films,setFilms] = useState([])

    useEffect(()=>{
        fetch("/api/films")
        .then(res=>res.json())
        .then(data=>setFilms(data))
    },[])

return (

    <main className="min-h-screen bg-gray-900 text-white p-8">

    <h1 className="text-4xl font-bold mb-8 text-center">
    Nobar Tracker
    </h1>

    <FilmForm films={films} setFilms={setFilms}/>

    <FilmCarousel films={films}/>

    <NobarStats films={films}/>

    <FilmDragRanking films={films}/>

    <NobarTimeline films={films}/>

    <SadnessChart films={films}/>

</main>

)

}