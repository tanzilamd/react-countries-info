import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./components/Loading/Loading";

function App() {
    const navigation = useNavigation();
    console.log(navigation);

    return (
        <>
            <Navbar></Navbar>
            {navigation.state === "loading" ? (
                <Loading></Loading>
            ) : (
                <Outlet></Outlet>
            )}

            <Footer></Footer>
        </>
    );
}

export default App;
