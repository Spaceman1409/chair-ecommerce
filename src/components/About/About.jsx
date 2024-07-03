import { images } from "../../assets/index";

const About = () => {
    return (
        <>
            <div className="flex flex-col items-center max-h-50 bg-white pb-14">
                <h2 className="text-xl md:text-4xl anim-underline">About</h2>
                <div className="w-full flex flex-col md:flex-row items-start justify-between md:px-52 md:pt-10">
                    <div className="md:w-1/2 w-full md:h-full">
                        <p className="text-4xl leading-normal mt-5 md:mt-0 md:text-5xl md:leading-tight text-blue-rgba font-bold">
                            Sit in Style, <br />
                            <span>Crafted with Care.</span>
                        </p>
                        <p className="md:mt-10 text-justify text-lg md:tracking-wider md:leading-8">
                            Discover the perfect blend of tradition and
                            modernity with our handcrafted wooden chairs,
                            offering timeless elegance and unmatched comfort for
                            your comfort.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <img
                            className="w-auto"
                            src={images?.about}
                            alt="about_img"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
