"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface CountdownProps {
  targetDate: Date;
}

export const CountdownTimer = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <Card
          key={unit}
          className="p-4 text-center bg-background/50 backdrop-blur-sm border-primary/20"
        >
          <div className="text-4xl font-bold text-primary">{value}</div>
          <div className="text-sm text-muted-foreground capitalize">{unit}</div>
        </Card>
      ))}
    </div>
  );
};
