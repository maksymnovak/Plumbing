import { ButtonHTMLAttributes } from "react";

interface INavItemProps {
  label: string;
  href: string;
  submenu?: string[];
}

interface IBlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "chars";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
}
type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "blue" | "dark-blue";
  animation?: "scale" | "slide" | "shine";
};
interface IDeviderProps {
  height?: string;
  variant?: "main" | "second";
}

export type { IBlurTextProps, IButtonProps, IDeviderProps, INavItemProps };
