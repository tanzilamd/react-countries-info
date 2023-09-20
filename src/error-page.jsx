import { useRouteError } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <Navbar></Navbar>
            <div className="flex flex-col justify-center items-center py-10 space-y-6">
                <h1 className="text-4xl font-bold">Oops!</h1>
                <p className="text-xl font-bold">
                    Sorry, an unexpected error has occurred.
                </p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}
