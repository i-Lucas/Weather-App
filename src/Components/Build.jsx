import AppContainer from './Style'

export default function Build(props) {

    let { min, max, curent, humidity, city, icon, descr } = props.data;
    let img = `http://openweathermap.org/img/wn/${icon}@2x.png`

    return (
        <AppContainer>
            <div className="Container">
                <div className="box">
                    <div className="sky"><img src={img} alt="current sky" width="150" height="150"></img></div>
                    <div className="city"><h1>{city}</h1></div>
                    <div className="descr"><h1>{descr}</h1></div>
                    <div className="temp"><h1>{curent}°C</h1></div>
                    <div className="humi"><h1>air humidity {humidity}%</h1></div>
                    <div className="minmax"><h1>min {min - 3}°C max {max + 2}°C</h1></div>
                </div>
            </div>
        </AppContainer>
    )
}

