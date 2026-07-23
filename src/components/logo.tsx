import Image from "next/image";

type LogoProps = {
  /** Which background this instance sits on — picks the matching light/dark artwork. */
  tone: "dark" | "light";
  /** "wordmark" is the full "Stack n Spark" lockup; "mini" is the icon mark alone. */
  variant?: "wordmark" | "mini";
  className?: string;
};

const SOURCES = {
  wordmark: {
    dark: { src: "/images/Logo png.png", width: 2000, height: 344 },
    light: { src: "/images/Logo png dark.png", width: 2000, height: 344 },
  },
  mini: {
    dark: { src: "/images/Logo mini light.png", width: 1718, height: 1092 },
    light: { src: "/images/Logo mini.png", width: 2000, height: 2000 },
  },
} as const;

export function Logo({ tone, variant = "wordmark", className = "h-5 w-auto" }: LogoProps) {
  const { src, width, height } = SOURCES[variant][tone];
  return (
    <Image
      src={src}
      alt="Stack n Spark"
      width={width}
      height={height}
      className={className}
    />
  );
}
