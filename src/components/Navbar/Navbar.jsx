import { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/index";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Button from "../Button/Button";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const Links = [
        {
            id: 1,
            name: "Home",
            link: "/",
        },
        {
            id: 2,
            name: "About",
            link: "/about",
        },
        {
            id: 3,
            name: "Products",
            link: "/products",
        },
        {
            id: 4,
            name: "Contact Us",
            link: "/contact",
        },
    ];

    return (
        <>
            <div className="shadow-md w-full sticky top-0 left-0">
                <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                    <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                        <span className="text-3xl text-indigo-600 mr-1 pt-2">
                            <img
                                className="w-16 bg-black"
                                src={images.logo}
                                alt="logo"
                            />
                        </span>
                    </div>
                    <div
                        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <IoMdClose /> : <CiMenuFries />}
                    </div>
                    <ul
                        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in-out ${
                            open
                                ? "to-20 opacity-100"
                                : "top-[-490px] md:opacity-100 opacity-0"
                        }`}
                    >
                        {Links.map((link) => (
                            <li
                                key={link.id}
                                className="ml-8 lg:text-xl md:text-sm md:my-0 my-7"
                            >
                                <Link
                                    className="text-gray-800 hover:text-gray-400 duration-500"
                                    to={link.link}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <div className="flex md:gap-0 md:ml-0 ml-8 gap-5">
                            <Button>Sign In</Button>
                            <Button>Sign Up</Button>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
