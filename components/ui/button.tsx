import { IButtonProps } from "@/interface";
import clsx from "clsx";

export function Button({
  children,
  className,
  variant = "primary",
  animation = "scale",
  ...props
}: IButtonProps) {
  return (
    <button
      className={clsx(
        "uppercase text-[20px] px-4 py-2 rounded-md font-semibold",
        "transition-all duration-300 ease-in-out",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "relative overflow-hidden",

        variant === "primary" && "bg-orange-gradient text-white",
        variant === "secondary" && "bg-gray-200 text-black",
        variant === "blue" && "bg-blue-btn-gradient text-white",
        variant === "dark-blue" && "bg-dark-gradient text-white",

        animation === "scale" && [
          "hover:scale-105 active:scale-95",
          "hover:shadow-lg hover:shadow-current/20",
        ],
        animation === "slide" && [
          "hover:-translate-y-1 active:translate-y-0",
          "hover:shadow-xl hover:shadow-current/30",
        ],
        animation === "shine" && [
          "before:absolute before:inset-0",
          "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
          "before:-translate-x-full hover:before:translate-x-full",
          "before:transition-transform before:duration-700",
          "hover:shadow-lg",
        ],

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
