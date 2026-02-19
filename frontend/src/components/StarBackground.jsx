import { useEffect, useState } from 'react';

const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars = [];
            const starCount = 200; // Increased star count

            for (let i = 0; i < starCount; i++) {
                newStars.push({
                    id: i,
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    size: Math.random() * 2 + 'px', // Smaller, more distant looking stars
                    delay: Math.random() * 5 + 's',
                    duration: Math.random() * 3 + 2 + 's',
                    layer: Math.floor(Math.random() * 3) + 1 // 3 layers of depth
                });
            }
            setStars(newStars);
        };

        generateStars();
    }, []);

    return (
        <div className="star-background">
            <div className="galaxy-overlay"></div>
            {stars.map((star) => (
                <div
                    key={star.id}
                    className={`star layer-${star.layer}`}
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        animationDelay: star.delay,
                        animationDuration: star.duration,
                    }}
                />
            ))}
        </div>
    );
};

export default StarBackground;
