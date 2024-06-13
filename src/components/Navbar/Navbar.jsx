import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/index";

const Navbar = () => {
    return (
        <>
            <div className="relative bg-white border-b-2 border-gray-100">
                <div className="w-full mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link to="#/">
                                <img
                                    className="bg-black h-8 w-auto sm:h-10"
                                    src={images.logo}
                                    alt="logo"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
