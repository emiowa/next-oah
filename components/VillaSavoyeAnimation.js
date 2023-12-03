import React from 'react';
import Lottie from 'lottie-web';
import animationData from './src/animations/villa-savoya-animation.json';

const VillaSavoyeAnimation = ({width, height, className}) => {
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        const anim = Lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
        });
        return () => anim.destroy();
    }, []);
    return <div ref={containerRef} style={{ width, height }} className={className} />;
};
export default VillaSavoyeAnimation;