import React from "react";
import ProductCard from "./ProductCard";

const TopProducts = () => {
    return (
        <>
            <div className="bg-white">
                <div className="flex items-center justify-center">
                    <h2 className="text-xl md:text-4xl anim-underline">
                        Top Products
                    </h2>
                </div>
                <ProductCard />
            </div>
        </>
    );
};

export default TopProducts;
