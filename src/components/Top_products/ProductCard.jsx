import { Link } from "react-router-dom";
import { images } from "../../assets";
import RenderStars from "./RenderStars";

const ProductCard = () => {
    return (
        <>
            <div className="block mt-10 md:mt-20 w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                <img
                    className="p-8 rounded-t-lg max-h-80 m-auto"
                    src={
                        images?.wooden_images?.wooden_black_chair
                            ?.wooden_black_1
                    }
                    alt="wooden_black_1"
                />
                <div className="pb-2.5 px-5">
                    <Link to="#/">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                            Apple Watch Series 7 GPS, Aluminium Case, Starlight
                            Sport
                        </h5>
                    </Link>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <RenderStars />
                    </div>
                </div>
                <div className="flex items-center justify-between pb-2.5 px-5">
                    <span className="text-3xl font-bold text-gray-900">
                        ₹599
                    </span>
                    <Link
                        to="#/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
