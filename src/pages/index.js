import Assetlink from "@/component/Assetlink";
import Loading from "@/component/Loading";
import { useEffect, useState } from "react";

export default function Home() {

  const [weatherData, setWeatherData] = useState([]);

  const [timeWeatherData, setTimeWeatherData] = useState('')

  const [loading, isLoading] = useState(false)

  const apiKey = process.env.WEATHER_API_KEY;

  const [search, setSearch] = useState('Indonesia');


  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const [submit, setSubmit] = useState('')
  
  const handleEnter = (event) => {
    if (event?.key == 'Enter'){
      event.prefentDefault
     
      setSubmit(search)
      
    }

  }



  
  useEffect (() => {
    const fetchWeather = async () => {
      
      isLoading(true)
      
      try {
        const [responseDataWeather, responseTimeWeather] = await Promise.all([
          fetch(`http://api.weatherapi.com/v1/current.json?key=2a246c76318f49fb8db74406242710&q=${search}&aqi=yes`),
          fetch(`http://api.weatherapi.com/v1/history.json?key=2a246c76318f49fb8db74406242710&q=${search}&dt=${new Date().toISOString().slice(0, 10)}`)
        ]) 
        
        const dataWeather = await responseDataWeather.json();
        const timeWeather = await responseTimeWeather.json();

        setWeatherData(dataWeather);

        setTimeWeatherData(timeWeather)

      } catch(error) {
        console.error("Error fetching weather data: ",error);
      }finally{
        isLoading(false)
      }
      
    };
    
    if(search){
      
      fetchWeather();
    }
    
    
  }, [submit]);


  

  //console.log('ini dari time weather  ++++ ',fetchTimeWeather())
  

//  if (loading) return(<>


// <Loading/>

 
//  </>);

 
 //        ih ada symbol derajat                °
    
 
 console.log(timeWeatherData.forecast)

   return (<>

  <Assetlink/>  
 
    <div className="bg-gradient-to-b from-blue-900 to-black ">


    <div class="flex items-center border-b border-white m-auto text-white bg-transparent w-full max-w-md pt-4">
    <i class="fa-solid fa-magnifying-glass text-white px-2"></i>
    <input type="text" value={search} onChange={handleSearch} onKeyDown={handleEnter} placeholder="Search for Cities" class="bg-transparent outline-none flex-1 py-2 text-white placeholder-white"/>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 text-center justify-center items-center lg:text-left">
      <div className=" grid-cols-1 py-10 px-52">
        <p className=" text-4xl font-bold">
          {weatherData.location?.country}
        </p>
        <p className="">
          {weatherData.location?.name}, {weatherData.location?.region}
        </p>
        <img className="flex m-auto lg:m-0 lg:grid" src={weatherData.current?.condition.icon}></img>
        <p className="px-2">{weatherData.current?.condition.text}</p>
      </div>
      
      <div className="flex flex-col items-center py-10">
  
      <h1 className="text-9xl font-light">{weatherData.current?.temp_c}<span className="text-9xl font-extralight">°C</span></h1>
      <br></br>
        <p>
          {weatherData.location?.localtime.slice(10, 100)}
        </p>
        <p>
          {weatherData.location?.localtime.slice(0, 10)}
        </p>
      
      </div>

      <div>

      </div>

      <div className="px-52 flex m-auto text-2xl font-bold pb-5">
      
      </div>
      
    </div>

    <div className="p-10 mx-16 rounded-xl glass">

    <div className="grid grid-cols-1 font-semibold">

      <p>TODAY FORECAST</p>
    </div>
    <div className="grid grid-cols-2 p-10 gap-10 text-center lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 lg:gap-2 md:gap-4">


      <div className="border-r">
      <p>{timeWeatherData.forecast?.forecastday[0].hour[0].time.slice(11, 100)}</p>
      <img src={timeWeatherData.forecast?.forecastday[0].hour[0].condition.icon} className="w-2/4 h-auto flex m-auto"></img>
      <p>{timeWeatherData.forecast?.forecastday[0].hour[0].temp_c}°</p>
      <p>{timeWeatherData.forecast?.forecastday[0].hour[0].condition.text}</p>
      </div>
      <div className="border-r">
      <p>{timeWeatherData.forecast?.forecastday[0].hour[4].time.slice(11, 100)}</p>
      <img src={timeWeatherData.forecast?.forecastday[0].hour[4].condition.icon} className="w-2/4 h-auto flex m-auto"></img>
      <p>{timeWeatherData.forecast?.forecastday[0].hour[4].temp_c}°</p>
      <p>{timeWeatherData.forecast?.forecastday[0].hour[4].condition.text}</p>
      </div>
      <div className="border-r">
      <p>{timeWeatherData.forecast?.forecastday[0].hour[8].time.slice(11, 100)}</p>
      <img src={timeWeatherData.forecast?.forecastday[0].hour[8].condition.icon} className="w-2/4 h-auto flex m-auto"></img>
      <p>{timeWeatherData.forecast?.forecastday[0].hour[8].temp_c}°</p>
      <p>{timeWeatherData.forecast?.forecastday[0].hour[8].condition.text}</p>
      </div>
      <div className="border-r">
      <p>{timeWeatherData.forecast?.forecastday[0].hour[12].time.slice(11, 100)}</p>
      <img src={timeWeatherData.forecast?.forecastday[0].hour[12].condition.icon} className="w-2/4 h-auto flex m-auto"></img>
      <p>{timeWeatherData.forecast?.forecastday[0].hour[12].temp_c}°</p>
      <p>{timeWeatherData.forecast?.forecastday[0].hour[12].condition.text}</p>
      </div>
      <div className="border-r">
      <p>{timeWeatherData.forecast?.forecastday[0].hour[16].time.slice(11, 100)}</p>
      <img src={timeWeatherData.forecast?.forecastday[0].hour[16].condition.icon} className="w-2/4 h-auto flex m-auto"></img>
      <p>{timeWeatherData.forecast?.forecastday[0].hour[16].temp_c}°</p>
      <p>{timeWeatherData.forecast?.forecastday[0].hour[16].condition.text}</p>
      </div>
      <div className="border-r">
      <p>{timeWeatherData.forecast?.forecastday[0].hour[20].time.slice(11, 100)}</p>
      <img src={timeWeatherData.forecast?.forecastday[0].hour[20].condition.icon} className="w-2/4 h-auto flex m-auto"></img>
      <p>{timeWeatherData.forecast?.forecastday[0].hour[20].temp_c}°</p>
      <p>{timeWeatherData.forecast?.forecastday[0].hour[20].condition.text}</p>
      </div>
      <div className="">
      <p>{timeWeatherData.forecast?.forecastday[0].hour[23]?.time.slice(11, 100)}</p>
      <img src={timeWeatherData.forecast?.forecastday[0].hour[23]?.condition.icon} className="w-2/4 h-auto flex m-auto"></img>
      <p>{timeWeatherData.forecast?.forecastday[0].hour[23]?.temp_c}°</p>
      <p>{timeWeatherData.forecast?.forecastday[0].hour[23]?.condition.text}</p>
      </div>
     
      

    </div>

    </div>
    <br></br>

    <div className="rounded-xl p-10 mx-16 glass font-semibold text-xl">
      <div>
        <p>
          AIR CODITIONS
        </p>
      </div>


      <div className="grid grid-cols-1 p-10 gap-10 lg:grid-cols-2 lg:gap-10 md:grid-cols-2 md:gap-10 ">

        <div>
          <p>
          <i class="fa-solid fa-temperature-half"></i> Reel Feel
            </p>
            <p className="text-5xl lg:text-7xl md:text-7xl">

          {weatherData.current?.feelslike_c}°
            </p>
        </div>

        <div>
        <p>
          
        <i class="fa-solid fa-wind"></i> 
        Wind
        </p>
          <p className="text-5xl lg:text-7xl md:text-7xl">
            {weatherData.current?.wind_mph} KM/H</p>
        </div>

        <div>
          <p>
          <i class="fa-solid fa-cloud"></i>Cloud</p>
         
         <p className="text-5xl lg:text-7xl md:text-7xl">

          {weatherData.current?.cloud}%
         </p>
        </div>

        <div>
         <p>
         <i class="fa-solid fa-cloud-sun"></i>
          UV index
         </p>
          <p className="text-5xl lg:text-7xl md:text-7xl">

          {weatherData.current?.uv}
          </p>
        </div>
      </div>
    

    
      
    </div>


    <div className="p-10">

    </div>


    </div>



  

</>)


}
