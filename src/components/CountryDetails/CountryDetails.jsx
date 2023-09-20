import { useLoaderData } from "react-router-dom";

const CountryDetails = () => {
    const country = useLoaderData();
    const {
        name,
        flags,
        capital,
        population,
        timezones,
        continents,
        independent,
    } = country[0];
    return (
        <div className="container mx-auto">
            <div className="p-16 text-lg">
                <img className="mb-2" src={flags.png} alt="" />
                <h2>
                    <span className="font-bold">Name: </span>
                    {name.common}
                </h2>
                <p>
                    <span className="font-bold">Capital: </span>
                    {capital}
                </p>
                <p>
                    <span className="font-bold">Population: </span>
                    {population}
                </p>
                <p>
                    <span className="font-bold">Timezone: </span>
                    {timezones}
                </p>
                <p>
                    <span className="font-bold">Continent: </span>
                    {continents}
                </p>
                <p>
                    <span className="font-bold">Independent: </span>
                    {independent ? "Yes" : "No"}
                </p>
            </div>
        </div>
    );
};

export default CountryDetails;
