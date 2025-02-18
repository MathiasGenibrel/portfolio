import {
  FC,
  MouseEvent,
  MouseEventHandler,
  useCallback,
  useRef,
  useState,
} from "react";
import { ArrowLeft } from "~/common/components/icons/arrow-left";
import { ArrowRight } from "~/common/components/icons/arrow-right";

interface ImageComparatorProps {}

const DEFAULT_POSITION = 50;
const hasPressedLeftButton = (buttons: MouseEvent["buttons"]) => buttons === 1;

export const ImageComparator: FC<ImageComparatorProps> = ({}) => {
  const [leftPosition, setLeftPosition] = useState(DEFAULT_POSITION);
  const containerRef = useRef<HTMLDivElement>(null);

  const getCurrentPositionInPercent = useCallback((event: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return DEFAULT_POSITION;

    const { left } = container.getBoundingClientRect();

    return ((event.clientX - left) / container.offsetWidth) * 100;
  }, []);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (!hasPressedLeftButton(event.buttons)) return;

      const position = getCurrentPositionInPercent(event);
      setLeftPosition(position);
    },
    [],
  );

  const handleClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      const position = getCurrentPositionInPercent(event);
      setLeftPosition(position);
    },
    [],
  );

  return (
    <div
      ref={containerRef}
      className={"relative w-fit select-none"}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <img
        alt=""
        src={"/georide-before.webp"}
        className={"pointer-events-none"}
      />
      <img
        alt=""
        src={"/georide-after.webp"}
        style={{
          clipPath: `inset(0 ${100 - leftPosition}% 0 0)`,
        }}
        className={"pointer-events-none absolute top-0 left-0"}
      />
      <div
        style={{
          left: `${leftPosition}%`,
        }}
        className={
          "absolute top-0 z-10 flex h-full w-0.5 items-center justify-center bg-stone-900"
        }
      >
        <div
          className={
            "flex aspect-square w-fit cursor-col-resize items-center rounded-full bg-stone-900 p-2"
          }
        >
          <ArrowLeft className={"relative left-0.5"} />
          <ArrowRight className={"relative right-0.5"} />
        </div>
      </div>
    </div>
  );
};
