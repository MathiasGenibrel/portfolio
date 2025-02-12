import React, { useCallback, useEffect } from "react";
import { random } from "~/common/helpers/random";

export const useRandomInterval = (
  callback: () => void,
  minDelay: number,
  maxDelay: number,
) => {
  const timeoutId = React.useRef<number>(null);
  const savedCallback = React.useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const cancel = useCallback(() => {
    timeoutId.current && window.clearTimeout(timeoutId.current);
  }, []);

  useEffect(() => {
    const handleTick = () => {
      const nextTickAt = random(minDelay, maxDelay);

      timeoutId.current = window.setTimeout(() => {
        savedCallback.current();
        handleTick();
      }, nextTickAt);
    };

    handleTick();

    return cancel;
  }, [cancel, minDelay, maxDelay]);

  return cancel;
};
