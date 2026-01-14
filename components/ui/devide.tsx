import { IDeviderProps } from "@/interface";

export function Devider({ height = "10px", variant = "main" }: IDeviderProps) {
  const gradientClass =
    variant === "main"
      ? "bg-gradient-to-r from-transparent via-[#8e96a3] to-white "
      : "bg-[linear-gradient(to_right,transparent,#8e96a3,#ffffff,#8e96a3,transparent)]";

  return <div className={`w-full ${gradientClass}`} style={{ height }} />;
}
