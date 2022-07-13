import React, { useState, useRef, useEffect } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
    const rowContainer = useRef();

    const [items, setItems] = useState([]);

    const [{ cartItems }, dispatch] = useStateValue();

    const addtocart = () => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items,
        });
        localStorage.setItem("cartItems", JSON.stringify(items));
    };

    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);

    useEffect(() => {
        addtocart();
    }, [items]);
    return (
        <div
            ref={rowContainer}
            className={`w-full my-12 gap-3 flex items-center ${
                flag ? "overflow-x-scroll scrollbar-none scroll-smooth" : "overflow-x-hidden flex-wrap justify-center"
            }`}
        >
            {data && data.length > 0 ? (
                data.map((item) => (
                    <div
                        key={item?.id}
                        className="w-300 min-w-[300px] md:min-w-350 my-12 md:w-340 p-2 bg-white h-auto backdrop-blur-lg hover:drop-shadow-lg rounded-lg "
                    >
                        <div className="w-full flex items-center justify-between">
                            <motion.div whileHover={{ scale: 1.2 }} className="w-40 h-40 -mt-8 drop-shadow-2xl">
                                <img src={item?.imageURL} alt="Food Items" className="w-full h-full object-contain" />
                            </motion.div>

                            <motion.div
                                whileTap={{ scale: 0.75 }}
                                className="w-8 h-8 rounded-full bg-red-600 flex justify-center items-center cursor-pointer hover:shadow-md"
                                onClick={() => setItems([...cartItems, item])}
                            >
                                <MdShoppingBasket className="text-white" />
                            </motion.div>
                        </div>

                        <div className="w-full flex flex-col items-end justify-between">
                            <p className="text-textColor font-semibold text-base md:text-lg">{item?.title}</p>
                            <p className="mt-1 text-sm text-gray-500">{item?.calories} Calories</p>
                            <div className="flex items-center gap-8">
                                <p className="text-lg text-headingColor font-semibold">
                                    <span className="text-sm text-red-500">$</span>
                                    {item?.price}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="w-full flex flex-col items-center justify-center">
                    <img src={NotFound} alt="Not Found" className="h-340" />
                    <p className="text-xl font-semibold text-headingColor mt-4">Items Not Available</p>
                </div>
            )}
        </div>
    );
};

export default RowContainer;
