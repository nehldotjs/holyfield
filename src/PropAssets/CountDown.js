import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  separator = "",
  onStart,
  onEnd
}) {
  const ref = useRef(null);

  const motionValue = useMotionValue(direction === "down" ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);
  const springValue = useSpring(motionValue, { damping, stiffness });

  const isInView = useInView(ref, { once: true });

  const getDecimalPlaces = num => {
    const str = num.toString();
    if (str.includes(".")) {
      const decimals = str.split(".")[1];
      if (parseInt(decimals) !== 0) return decimals.length;
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  // Set initial text
  useEffect(
    () => {
      if (ref.current) {
        ref.current.textContent = String(direction === "down" ? to : from);
      }
    },
    [from, to, direction]
  );

  // Start animation when visible
  useEffect(
    () => {
      if (isInView) {
        if (typeof onStart === "function") onStart();

        const timeoutId = setTimeout(() => {
          motionValue.set(direction === "down" ? from : to);
        }, delay * 1000);

        const endTimeoutId = setTimeout(() => {
          if (typeof onEnd === "function") onEnd();
        }, (delay + duration) * 1000);

        return () => {
          clearTimeout(timeoutId);
          clearTimeout(endTimeoutId);
        };
      }
    },
    [
      isInView,
      motionValue,
      from,
      to,
      delay,
      duration,
      direction,
      onStart,
      onEnd
    ]
  );

  // Update the UI on spring value change
  useEffect(
    () => {
      const unsubscribe = springValue.on("change", latest => {
        if (ref.current) {
          const options = {
            useGrouping: !!separator,
            minimumFractionDigits: maxDecimals,
            maximumFractionDigits: maxDecimals
          };

          const formatted = Intl.NumberFormat("en-US", options).format(latest);
          ref.current.textContent = separator
            ? formatted.replace(/,/g, separator)
            : formatted;
        }
      });

      return () => unsubscribe();
    },
    [springValue, separator, maxDecimals]
  );

  return <span className={className} ref={ref} />;
}
