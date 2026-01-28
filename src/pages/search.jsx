import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {getCityWeather , getLocationWeather} from "../api/weatherapi"
import {SearchIcon} from "lucide-react"

 const Search = ({setWeatherData})=>{
  const [city , setCity] = useState("")
  const go = useNavigate()
   
  const searchCity = async ()=>{
   if(!city.trim()) return
   const cityres = await getCityWeather(city) 
   const {lat , lon} = cityres.data.coord
   const res = await getLocationWeather(lat , lon)

   const fulldata = {
    ...res.data,
    city : cityres.data.name,
   }

   localStorage.setItem("weatherData" , JSON.stringify(fulldata))
   setWeatherData(fulldata)
   go("/")

  }
    return(
        <div className="min-h-screen p-5">
            <div className="flex items-center justify-center gap-2">
                <SearchIcon className="relative left-8" size={20}/>
                <input className="outline-none rounded-2xl w-full h-10 pl-7 bg-red-400" type="text" placeholder="Search City.." required value={city} onChange={(e)=>setCity(e.target.value)} />
                 <button  
                 className="rounded-2xl h-9 w-20 bg-green-700 "  
                 onClick={searchCity}
                 >Search </button>
            </div>

        </div>
    )
 }
 export default Search