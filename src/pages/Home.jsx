import ImageSlider from "../components/Slider/ImageSlider";
import About from "../components/About/About";
import TopProducts from "../components/Top_products/TopProducts";

const Home = () => {
    return (
        <>
            <div className="p-6 pt-0">
                <ImageSlider />
                <About />
                <TopProducts />
            </div>
        </>
    );
};

export default Home;
