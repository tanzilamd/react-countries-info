const Country = ({ country }) => {
    const { name, flags, continents } = country;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={flags.png} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name.common}</h2>
                <p>{continents}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-info text-white mt-6">
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Country;
