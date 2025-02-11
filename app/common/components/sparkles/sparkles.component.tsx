import React, { FC, ReactNode } from "react";
import { useRandomInterval } from "~/common/hooks/useRandomInterval";
import { SparkleComponent } from "./sparkle.component";
import {
  generateSparkle,
  Sparkle,
} from "~/common/components/sparkles/generate-sparkle.helper";

interface SparklesProps {
  children: ReactNode;
  minSparkleDelay?: number;
  maxSparkleDelay?: number;
  withRandomColor?: boolean;
}

const SPARKLE_LIFE_TIME = 1e3; // 1 second

const randomColor = () => {
  const randomHue = Math.floor(Math.random() * 360);

  return `hsl(${randomHue}, 96%, 56%)`;
};

export const Sparkles: FC<SparklesProps> = ({
  children,
  minSparkleDelay = 300,
  maxSparkleDelay = 650,
  withRandomColor = false,
}) => {
  const [sparkles, setSparkles] = React.useState<Sparkle[]>([]);

  useRandomInterval(
    () => {
      const now = Date.now();
      const generatedSparkle = generateSparkle(
        withRandomColor ? randomColor() : undefined,
      );

      // Clean up any "expired" sparkles
      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt;
        return delta < SPARKLE_LIFE_TIME;
      });

      // Include our new sparkle
      nextSparkles.push(generatedSparkle);

      // Make it so!
      setSparkles(nextSparkles);
    },
    minSparkleDelay,
    maxSparkleDelay,
  );

  return (
    <div className={"relative inline-block"}>
      {sparkles.map((sparkle) => (
        <SparkleComponent
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <div className={"relative z-[1] inline font-bold"}>{children}</div>
    </div>
  );
};
