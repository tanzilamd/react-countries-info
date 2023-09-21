const Loading = () => {
    return (
        <div className="flex justify-center">
            <div className="text-center space-y-4 p-32">
                <span className="loading loading-bars loading-lg"></span>
                <h2 className="text-3xl font-bold text-center">Loading...</h2>
            </div>
        </div>
    );
};

export default Loading;
