import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function CountryDetails(props) {
    const worldwide = props.places
    console.log(worldwide)
    const { countryId } = useParams()

    const chosenOne = worldwide.find((cece) => {
        return cece.alpha3Code === countryId
    })

    const lowLow = chosenOne.alpha2Code.toLowerCase()
    const imageSrc = `https://flagpedia.net/data/flags/icon/72x54/${lowLow}.png`
    console.log(imageSrc)
    return (
        <div>
            <img src={imageSrc} alt="flag"></img>
            <h1>{chosenOne.name.common}</h1>
            <p><b>Capital:</b></p>
            {chosenOne.capital.map((data) => {
                return (
                    <div key={Math.random()}>
                        <p>{data}</p>
                    </div>
                )
            })}
            <p><b>Area:</b></p>
            <p>{chosenOne.area}</p>
            <p><b>Borders:</b></p>

            {chosenOne.borders.map((data) => {
                return (
                    <div key={Math.random()}>
                        <Link to={`/${data}`}>{data}</Link>
                    </div>
                )
            })}

        </div>
    )
}

export default CountryDetails