"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Stagger({
  children,
  stagger = 0.07,
  delayChildren = 0.05,
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
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  y = 25,
  duration = 0.7,
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
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
      style={{ willChange: "opacity, transform" }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}