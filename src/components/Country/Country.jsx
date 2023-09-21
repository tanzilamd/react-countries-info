import { Link } from "react-router-dom";
import "./Country.css";

const Country = ({ country }) => {
    const { name, flags, continents, cca3 } = country;
    return (
        <div className="card bg-base-100 card-shadow">
            <figure className="pt-4">
                <img src={flags.png} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name.common}</h2>
                <p>{continents}</p>
                <div className="card-actions justify-center">
                    <Link to={`/countries/${cca3}`}>
                        <button className="btn btn-info text-white mt-6">
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Country;
