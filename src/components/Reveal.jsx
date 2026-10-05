"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 25,
  duration = 0.7,
  amount = 0.15,
  className = "",
  as = "div",
  ...rest
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={{ willChange: "opacity, transform" }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}