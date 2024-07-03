import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const RenderStars = () => {
    return (
        <>
            <div className="flex my-5 gap-2">
                <CalculateStars rating={4.3} />
            </div>
        </>
    );
};

export default RenderStars;

export const CalculateStars = ({ rating, maxRating = 5 }) => {
    let stars = [];
    for (let i = 1; i <= maxRating; i++) {
        if (rating >= i) {
            stars.push(<IoStar key={i} className="text-yellow-400" />);
        } else if (rating >= i - 0.5) {
            stars.push(<IoStarHalf key={i} className="text-yellow-400" />);
        } else {
            stars.push(<IoStarOutline key={i} className="text-yellow-400" />);
        }
    }
    return stars;
};
