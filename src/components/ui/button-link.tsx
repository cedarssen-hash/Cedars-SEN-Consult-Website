import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  href,
  ...props
}: ButtonLinkProps) {
  const variantClass = variant === "secondary" ? "button-link--secondary" : "";
  const classes = `button-link ${variantClass} ${className}`.trim();

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link className={classes} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return <a className={classes} href={href} {...props}>{children}</a>;
}

