import { useLoaderData } from "react-router-dom";
import Country from "../Country/Country";

const Countries = () => {
    const countries = useLoaderData();
    console.log(countries);
    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold underline text-center py-6">
                {countries.length} Countries
            </h2>

            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 gap-8 mx-4 md:mx-0">
                {countries.map((country, index) => (
                    <Country key={index} country={country}></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
