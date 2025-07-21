import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const CountUp = ({
  to,
  from = 0,
  direction = "up",
  duration = 2,
  className = "",
  separator = "",
  suffix = "",
  prefix = ""
}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? to : from);
  const springValue = useSpring(motionValue, {
    damping: 20 + 40 * (1 / duration),
    stiffness: 100 * (1 / duration),
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? from : to);
    }
  }, [isInView, motionValue, direction, from, to]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const value = Math.floor(latest);
        ref.current.textContent = `${prefix}${value.toLocaleString()}${suffix}`;
      }
    });
    return () => unsubscribe();
  }, [springValue, separator, prefix, suffix]);

  return <span className={className} ref={ref} />;
};

export default CountUp;