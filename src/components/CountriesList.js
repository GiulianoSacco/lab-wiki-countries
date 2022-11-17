import { Link } from "react-router-dom";

function CountriesList(props) {
    const world = props.places
    return (
        <div>
            {world.map((data) => {
                return(
                    <div key={data.alpha3Code}>
                        <Link to={`/${data.alpha3Code}`}>{data.name.common}</Link>
                    </div>
                )
            })}
        </div>
    );
}
export default CountriesList