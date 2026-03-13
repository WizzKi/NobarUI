"use client"

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js"

import {Bar} from "react-chartjs-2"

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
)

export default function SadnessChart({films}){

const riskiSad = films.reduce((a,b)=>a+b.riskiSad,0)

const rapaSad = films.reduce((a,b)=>a+b.rapaSad,0)

const data = {

labels:["Riski","Rapa"],

datasets:[{

label:"Total Sadness 😭",

data:[riskiSad,rapaSad],

backgroundColor:["#60a5fa","#f472b6"]

}]

}

return(

<div className="mt-12 bg-gray-800 p-6 rounded-xl">

<h2 className="text-2xl mb-4">
📊 Siapa Paling Baper
</h2>

<Bar data={data}/>

</div>

)

}