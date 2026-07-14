import React from 'react';
import Lottie from 'lottie-web';
import animationData from '../public/animations/plaza-de-la-libertad-animation.json';

const PlazaLibertadAnimation = ({ className }) => {
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        const anim = Lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid meet',
            },
        });

        anim.addEventListener('DOMLoaded', () => {
            requestAnimationFrame(() => {
                const svgEl = containerRef.current.querySelector('svg');
                if (!svgEl) return;

                svgEl.removeAttribute('width');
                svgEl.removeAttribute('height');
                svgEl.style.width = '100%';
                svgEl.style.height = '100%';

                try {
                    const bbox = svgEl.getBBox();
                    const padding = bbox.width * 0.05;
                    svgEl.setAttribute(
                        'viewBox',
                        `${bbox.x - padding} ${bbox.y - padding} ${bbox.width + padding * 2} ${bbox.height + padding * 2}`
                    );
                } catch (e) {
                    console.warn('Could not measure animation bounds:', e);
                }
            });
        });

        return () => anim.destroy();
    }, []);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{ width: '100%', aspectRatio: '1 / 1' }}
        />
    );
};

export default PlazaLibertadAnimation;