
const Hourly = ({hourly})=>{

  return(
   <div>
        <div>
            <h1>Hourly Forcast</h1>

            <div>
             {hourly.slice(0,12).map((hour , index)=>(
              <div
               key={i}
               className=""
              >
              <p>
                {new Date(hour.dt * 1000).getDate()}
              </p>

                <img src={``} alt="" />
              </div>
             ))}

            </div>
        </div>
  

   </div>

  )


}