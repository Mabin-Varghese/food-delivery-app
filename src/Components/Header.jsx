import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.conig";

import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/reducer";

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user }, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false);

    const login = async () => {
        if (!user) {
            const {
                user: { refreshToken, providerData },
            } = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem("user", JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!isMenu);
        }
    };

    const logout = () => {
        setIsMenu(false);
        localStorage.clear();

        dispatch({
            type: actionType.SET_USER,
            user: null,
        });
    };

    return (
        <header className="fixed z-50 w-screen p-3 px-4 md:px-16 bg-primary">
            {/* Desktop & Tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to={"/"} className="flex items-center gap-2">
                    <img src={Logo} className="w-8 object-cover" alt="logo" />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </Link>
                <div className="flex items-center  gap-8">
                    <ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className="flex items-center gap-8"
                    >
                        <li
                            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                            onClick={() => setIsMenu(false)}
                        >
                            Home
                        </li>
                        <li
                            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                            onClick={() => setIsMenu(false)}
                        >
                            Menu
                        </li>
                        <li
                            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                            onClick={() => setIsMenu(false)}
                        >
                            About Us
                        </li>
                        <li
                            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                            onClick={() => setIsMenu(false)}
                        >
                            Service
                        </li>
                    </ul>
                    <div className="relative flex justify-center items-center">
                        <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex justify-center items-center">
                            <p className="text-xs text-white font-semibold">2</p>
                        </div>
                    </div>
                    <div className="relative">
                        <motion.img
                            whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : Avatar}
                            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                            alt="User-profile"
                            onClick={login}
                        />
                        {isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                            >
                                {user && user.email === "mabinvarghese.dev@gmail.com" && (
                                    <Link to={"./createItem"}>
                                        <p
                                            className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                                            onClick={() => setIsMenu(false)}
                                        >
                                            New Item <MdAdd />
                                        </p>
                                    </Link>
                                )}

                                <p
                                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                                    onClick={logout}
                                >
                                    Logout <MdLogout />
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="flex items-center justify-between md:hidden w-full h-full ">
                <div className="relative">
                    <motion.img
                        whileTap={{ scale: 0.6 }}
                        src={user ? user.photoURL : Avatar}
                        className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                        alt="User-profile"
                        onClick={login}
                    />
                    {isMenu && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 left-0"
                        >
                            {user && user.email === "mabinvarghese.dev@gmail.com" && (
                                <Link to={"./createItem"}>
                                    <p
                                        className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                                        onClick={() => setIsMenu(false)}
                                    >
                                        New Item <MdAdd />
                                    </p>
                                </Link>
                            )}

                            <ul className="flex flex-col">
                                <li
                                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                                    onClick={() => setIsMenu(false)}
                                >
                                    Home
                                </li>
                                <li
                                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                                    onClick={() => setIsMenu(false)}
                                >
                                    Menu
                                </li>
                                <li
                                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                                    onClick={() => setIsMenu(false)}
                                >
                                    About Us
                                </li>
                                <li
                                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                                    onClick={() => setIsMenu(false)}
                                >
                                    Service
                                </li>
                            </ul>

                            <p
                                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center gap-3 bg-gray-200 cursor-pointer hover:bg-gray-300 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                                onClick={logout}
                            >
                                Logout <MdLogout />
                            </p>
                        </motion.div>
                    )}
                </div>

                <Link to={"/"} className="flex items-center gap-2">
                    <img src={Logo} className="w-8 object-cover" alt="logo" />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </Link>

                <div className="relative flex justify-center items-center">
                    <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex justify-center items-center">
                        <p className="text-xs text-white font-semibold">2</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
