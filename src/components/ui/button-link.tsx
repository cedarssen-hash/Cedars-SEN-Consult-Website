import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const variantClass = variant === "secondary" ? "button-link--secondary" : "";

  return (
    <a className={`button-link ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}

