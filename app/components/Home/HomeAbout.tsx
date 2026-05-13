import React, { useRef } from "react";
import { Link } from "react-router";
import useArrow from "~/hooks/imageHooks/useArrow";
import Button from "~/UI/Button";
import { motion, type Variants, useInView } from "framer-motion";

export default function HomeAbout() {
  const arrow = useArrow();

  // One sentinel for the whole block
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    // give buffer to avoid flicker; replays every time it leaves/enters
    amount: 0.35,
    margin: "0px 0px -10% 0px",
    once: false,
  });

  // Parent coordinates the sequence
  const parent: Variants = {
    hidden: { opacity: 1 }, // keep container laid out
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.12 },
    },
  };

  // Shared child animation (fade + slide up)
  const child: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="mx-auto flex w-full max-w-[1160px] flex-col items-start gap-[18px] lg:gap-[26px]"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={parent}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Title */}
      <motion.div variants={child} transition={{ duration: 0.6, ease: "easeOut" }}>
        <div className="relative">
          <p className="CormorantGaramond text-[15px] lg:text-[30px] text-[#353635] leading-[1.1]">
            A NEW ERA OF REAL <span className="italic">ESTATE EXCELLENCE</span>
          </p>
          <div className="mt-[5px] h-[2px] w-full bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(53,54,53,0.28)_50%,rgba(255,255,255,0)_100%)]" />
        </div>
      </motion.div>

      {/* Text + Image */}
      <motion.div
        variants={child}
        transition={{ duration: 0.9, ease: "easeOut", delay: 1 }}
        className="grid w-full grid-cols-1 items-start gap-[28px] lg:grid-cols-[0.95fr_0.8fr] lg:gap-[56px]"
        style={{ willChange: "transform, opacity" }}
      >
        <p
          className="max-w-[650px] text-[#353635] text-[12px] lg:text-[17px] leading-[1.7] lg:leading-[1.62]"
          style={{ fontFamily: "Didot, serif" }}
        >
          With four decades of experience, our luxury boutique real estate agency is dedicated to
          setting a new benchmark for service and expertise in the realm of upscale properties in
          Dubai.<br />
          Understanding the distinct needs and preferences of our clients, we provide
          personalized solutions that consistently surpass expectations.<br />
          Leveraging our profound
          knowledge of the local market and an extensive network, we present a carefully curated
          selection of exclusive properties epitomizing luxury living.<br />
        </p>

        <div className="w-full max-w-[460px] overflow-hidden rounded-[4px] shadow-[0_24px_70px_rgba(53,54,53,0.10)] lg:justify-self-end">
          <img
            src="/images/placeholders/about.jpeg"
            alt="Luxury real estate expertise in Dubai"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </motion.div>

      {/* Button */}
      <motion.div
        variants={child}
        transition={{ duration: 1.0, ease: "easeOut", delay: 1.5 }}
        style={{ willChange: "transform, opacity" }}
      >
        <Link to="/about-us" className="inline-block">
          <Button className="w-[154px] lg:w-[240px]">
            Read more{" "}
            <img loading="lazy" src={arrow.longWhite} alt="" className="w-[17px] rotate-[-45deg]" />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
