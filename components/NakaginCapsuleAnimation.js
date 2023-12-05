import React from 'react';
import Lottie from 'lottie-web';
import animationData from './src/animations/nakagin-capsule-tower-animation.json';

const NakaginCapsuleAnimation = ({className}) => {
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
export default NakaginCapsuleAnimation;