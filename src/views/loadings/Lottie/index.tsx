import lottie, { type AnimationConfigWithData, type AnimationItem } from 'lottie-web';
import { type CSSProperties, useEffect, useRef } from 'react';

const Lottie = ({ animationData, style }: { animationData: unknown; style?: CSSProperties }) => {
  const animationInstanceRef = useRef<AnimationItem>();
  const animationContainer = useRef<HTMLDivElement>(null);

  const loadAnimation = () => {
    // Return if the container ref is null
    if (!animationContainer.current) {
      return;
    }

    // Destroy any previous instance
    animationInstanceRef.current?.destroy();

    // Build the animation configuration
    const config: AnimationConfigWithData = {
      animationData,
      container: animationContainer.current,
    };

    // Save the animation instance
    animationInstanceRef.current = lottie.loadAnimation(config);

    // Return a function that will clean up
    return () => {
      animationInstanceRef.current?.destroy();
      animationInstanceRef.current = undefined;
    };
  };

  useEffect(() => {
    const onUnmount = loadAnimation();

    // Clean up on unmount
    return () => onUnmount?.();
    // eslint-disable-next-line
  }, [animationData]);

  return <div ref={animationContainer} style={style} />;
};

export default Lottie;
