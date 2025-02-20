import { FC, useEffect, useState } from "react";
import { easingFunctions } from "~/pages/projects/georide/introduction/easing.helper";

interface NumberFlowProps {
  toNumber: number;
  duration?: number;
  delay?: number;
}

const INITIAL_COUNT = 0;
const DEFAULT_ANIMATION_DURATION = 2_000;
const NO_DELAY = 0;

const getProgressRatio = (elapsedTime: number, duration: number) => {
  const progressRatio = elapsedTime / duration;

  return easingFunctions.easeOutSine(progressRatio);
};

export const NumberFlowComponent: FC<NumberFlowProps> = ({
  toNumber,
  duration = DEFAULT_ANIMATION_DURATION,
  delay = NO_DELAY,
}) => {
  const [displayedNumber, setDisplayedNumber] = useState(INITIAL_COUNT);

  useEffect(() => {
    let animationFrameId: number;

    const beginAnimation = () => {
      const animationStartTime = Date.now();
      const initialValue = INITIAL_COUNT;

      const updateAnimation = () => {
        const currentTimestamp = Date.now();
        const elapsedTime = currentTimestamp - animationStartTime;

        const isAnimationComplete = elapsedTime >= duration;
        if (isAnimationComplete) return setDisplayedNumber(toNumber);

        const interpolatedValue = Math.round(
          initialValue +
            (toNumber - initialValue) * getProgressRatio(elapsedTime, duration),
        );

        setDisplayedNumber(interpolatedValue);
        animationFrameId = requestAnimationFrame(updateAnimation);
      };

      animationFrameId = requestAnimationFrame(updateAnimation);
    };

    const delayTimeoutId = setTimeout(beginAnimation, delay);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (delayTimeoutId) clearTimeout(delayTimeoutId);
    };
  }, [toNumber, duration, delay]);

  return <span className="text-xl font-bold">{displayedNumber}</span>;
};
