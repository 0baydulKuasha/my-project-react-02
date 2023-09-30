import { useEffect, useState } from "react";
import Country from "./Country/Country";
import './Country/Countries.css'

const Countries = () => {
    const [countries , setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])





    return(
        <div >
            <h3> Countris : {countries.length} </h3>
            <div className="countries_container">
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    country={country}></Country>)
            }
            </div>
        </div>
    )
}

export default Countries;


// const Eart = () =>{
//     const[earth , setEarth]=useState([])
//     useEffect(() => {
//         fetch('https://restcountries.com/v3.1/all')
//         .then(i => i.json())
//         .then(data => console.log(data))
//     },[])

//     return(
//         <div> hou now ho i am</div>
//     )


// }


// export default Eart;


