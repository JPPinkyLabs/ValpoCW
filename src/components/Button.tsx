import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "white";
  children: ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2.5 font-body font-bold text-[0.78rem] tracking-[0.14em] uppercase no-underline transition-all duration-150 hover:-translate-y-0.5";

  const variants = {
    primary: `${base} clip-btn bg-magenta text-white px-8 py-3.5 glow-magenta hover:shadow-[0_0_50px_rgba(255,45,120,0.7)]`,
    secondary: `${base} bg-transparent text-calipso border-[1.5px] border-calipso px-8 py-3.5 glow-calipso hover:shadow-[0_0_40px_rgba(0,229,204,0.4)] hover:bg-calipso/[0.08]`,
    white: `${base} clip-btn bg-white text-magenta px-10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]`,
  };

  const classes = `${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
