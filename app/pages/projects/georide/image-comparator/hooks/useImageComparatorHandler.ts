import {
  MouseEvent,
  MouseEventHandler,
  RefObject,
  TouchEventHandler,
  useCallback,
  useState,
} from "react";

const DEFAULT_POSITION = 50;
const isLeftMouseButtonDown = (buttons: MouseEvent["buttons"]) => buttons === 1;

type UseImageComparatorHandler = (ref: RefObject<HTMLDivElement | null>) => {
  position: number;
  handler: {
    move: MouseEventHandler<HTMLDivElement>;
    touchMove: TouchEventHandler<HTMLDivElement>;
    touchEnd: TouchEventHandler<HTMLDivElement>;
    click: MouseEventHandler<HTMLDivElement>;
  };
};

export const useImageComparatorHandler: UseImageComparatorHandler = (ref) => {
  const [position, setPosition] = useState(DEFAULT_POSITION);

  const getCurrentPositionInPercent = useCallback((positionX: number) => {
    const container = ref.current;
    if (!container) return DEFAULT_POSITION;

    const { left } = container.getBoundingClientRect();

    return ((positionX - left) / container.offsetWidth) * 100;
  }, []);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (!isLeftMouseButtonDown(event.buttons)) return;

      const calculatedPosition = getCurrentPositionInPercent(event.clientX);
      setPosition(calculatedPosition);
    },
    [],
  );

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      const touch = event.touches[0];
      const calculatedPosition = getCurrentPositionInPercent(touch.clientX);
      setPosition(calculatedPosition);
    },
    [getCurrentPositionInPercent],
  );

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (event.changedTouches.length > 0) {
        const touch = event.changedTouches[0];
        const calculatedPosition = getCurrentPositionInPercent(touch.clientX);
        setPosition(calculatedPosition);
      }
    },
    [getCurrentPositionInPercent],
  );

  const handleClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      const calculatedPosition = getCurrentPositionInPercent(event.clientX);
      setPosition(calculatedPosition);
    },
    [],
  );

  return {
    position,
    handler: {
      move: handleMouseMove,
      touchMove: handleTouchMove,
      touchEnd: handleTouchEnd,
      click: handleClick,
    },
  };
};
