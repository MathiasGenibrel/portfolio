import {
  MouseEvent,
  MouseEventHandler,
  RefObject,
  useCallback,
  useState,
} from "react";

const DEFAULT_POSITION = 50;
const isLeftMouseButtonDown = (buttons: MouseEvent["buttons"]) => buttons === 1;

type UseImageComparatorHandler = (ref: RefObject<HTMLDivElement | null>) => {
  position: number;
  handler: {
    move: MouseEventHandler<HTMLDivElement>;
    click: MouseEventHandler<HTMLDivElement>;
  };
};

export const useImageComparatorHandler: UseImageComparatorHandler = (ref) => {
  const [position, setPosition] = useState(DEFAULT_POSITION);

  const getCurrentPositionInPercent = useCallback((event: MouseEvent) => {
    const container = ref.current;
    if (!container) return DEFAULT_POSITION;

    const { left } = container.getBoundingClientRect();

    return ((event.clientX - left) / container.offsetWidth) * 100;
  }, []);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (!isLeftMouseButtonDown(event.buttons)) return;

      const calculatedPosition = getCurrentPositionInPercent(event);
      setPosition(calculatedPosition);
    },
    [],
  );

  const handleClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      const calculatedPosition = getCurrentPositionInPercent(event);
      setPosition(calculatedPosition);
    },
    [],
  );

  return {
    position,
    handler: {
      move: handleMouseMove,
      click: handleClick,
    },
  };
};
