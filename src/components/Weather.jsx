const Table = ({ children }) => {
    return (
        <div className="flex flex-col mt-3 bg-[rgb(8,145,178,0.7)] w-[40%] m-auto rounded-sm p-10 shadow-2xl">
            {children}
        </div>
    )
}

const LocationEspecification = ({ text, especification }) => {
    return (
        <div className="flex items-center justify-between text-white">
            <p className="mt-2 font-semibold text-2xl text-left">{text}: </p> <span className="text-2xl font-bold text-cyan-200 mt-2" >{especification}</span>
        </div>
    )
}

const CurrentEspecification = (props) => {
    return (
        <div className="border-2 border-cyan-300 rounded-sm w-[80px] h-[80px] flex justify-center items-center flex-col bg-cyan hover:scale-[1.1] transition ease-in">
            <p><span className="font-bold">{props.type}</span></p>
            <p><span className="text-cyan-200 font-semibold">{props.status}</span></p>
        </div>
    )
}

const Weather = ({ countrie }) => {
    const weatherStatus = {
        "Temp c": countrie?.current.temp_c,
        "Humidity": countrie?.current.humidity,
        "Wind": countrie?.current.wind_kph,

    }
    const weatherLocation = {
        "Country": countrie?.location.country,
        "City": countrie?.location.name,
        "Local Time": countrie?.location.localtime
    }
    const locationKeys = Object.keys(weatherLocation)
    const weatherKeys = Object.keys(weatherStatus)

    if (!countrie) return null

    return (
        <>  
            {locationKeys.map(location => 
                <LocationEspecification text={location} especification={weatherLocation[location]}/>
            )}
            <div className="flex gap-5 justify-center mt-10">
                {weatherKeys.map(weather => 
                    <CurrentEspecification 
                        type={weather} 
                        status={weatherStatus[weather]} 
                    />
                )}
            </div>
        </>
    )
}

export { Weather,Table }