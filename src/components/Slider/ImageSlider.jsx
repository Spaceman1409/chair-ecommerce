import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { images } from "../../assets";

const ImageSlider = () => {
    const images_data = [
        {
            original: images?.wooden_images?.slider_images?.slider_1,
        },
        {
            original: images?.wooden_images?.slider_images?.slider_2,
        },
        {
            original: images?.wooden_images?.slider_images?.slider_3,
        },
        {
            original: images?.wooden_images?.slider_images?.slider_4,
        },
        {
            original: images?.wooden_images?.slider_images?.slider_5,
        },
        {
            original: images?.wooden_images?.slider_images?.slider_6,
        },
    ];
    return (
        <ImageGallery
            items={images_data}
            autoPlay={true}
            lazyLoad={true}
            showIndex={true}
            additionalClass="z-[-1]"
        />
    );
};

export default ImageSlider;
