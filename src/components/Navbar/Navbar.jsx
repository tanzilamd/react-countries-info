import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
    const [openIcon, setOpenIcon] = useState(false);

    return (
        <nav className=" py-4 bg-[#E5E6E6] text-[#1F2937] md:flex justify-center">
            <div
                className="inline-block md:hidden cursor-pointer pl-2"
                onClick={() => {
                    setOpenIcon(!openIcon);
                }}
            >
                {openIcon ? (
                    <GrClose className="text-2xl font-bold"></GrClose>
                ) : (
                    <FiMenu className="text-2xl font-bold"></FiMenu>
                )}
            </div>
            <ul
                className={`flex flex-col md:flex-row md:flex font-bold text-md gap-4 absolute md:static bg-slate-300 md:bg-transparent p-6 md:p-0 left-2 w-3/5 md:w-fit duration-500 ${
                    openIcon ? "top-14" : "-top-60"
                }`}
            >
                <Link to="/" className="hover:underline">
                    Home
                </Link>
                <Link to="/countries" className="hover:underline">
                    Countries
                </Link>
                <Link to="/about" className="hover:underline">
                    About
                </Link>
                <Link to="/contact" className="hover:underline">
                    Contact
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
