import { motion } from "framer-motion";
import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

interface UnderlineLinkProps {
  text: string;
  href?: string;
  rough?: boolean;
  active?: boolean;
  pause?: boolean;
}

const UnderlineLink = ({ text, rough, active, pause }: UnderlineLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!rough) {
    return (
      <div
        className="home-route cursor-pointer flex flex-col relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="nav-text inline-block">{text}</div>
        <motion.span
          className="underline absolute bottom-0 left-0 h-0.5 bg-black"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={active ? "text-red-900" : ""}
    >
      <RoughNotation
        color="#7F1D1D"
        type="underline"
        show={!pause && active}
        iterations={2}
        strokeWidth={2}
        animationDuration={250}
      >
        <RoughNotation
          color="#1E40AF"
          type="box"
          show={isHovered && !active}
          padding={[10, 5, 5, 5]}
          iterations={1}
          strokeWidth={2}
          animationDuration={250}
        >
          {text}
        </RoughNotation>
      </RoughNotation>
    </div>
  );
};

export default UnderlineLink;
