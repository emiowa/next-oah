import React from 'react';
import Lottie from 'lottie-web';
import animationData from './src/animations/plaza-de-la-libertad-animation.json';

const PlazaLibertadAnimation = ({className}) => {
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
    return <div ref={containerRef} className={className} />;
};
export default PlazaLibertadAnimation;