import './Country.css'

const Country = ({country}) => {
    const {name,capital,population,area,   flags} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className="Country">
            <h2>Name: {name.common}</h2>
            <h3>Capital: {capital}</h3>
            <h4>Population: {population}</h4>
            <h5>Area: {area}</h5>
            <img className='Flag-img' src={flags.png} alt="" />
            <p>Lorem ipsum dolor sit amet.</p>
             <button onClick={handleVisited} >Visited</button>
             {visited? 'i have visited this countery' : 'I want to not visited '}
        </div>
    );
};

export default Country;