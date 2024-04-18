import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

/**
 * Common Button component
 * @param {node} [children] - The content of the component
 * @param {string} className - Additonal CSS classes (optional)
 * @param {*} props Additional props to pass onto the button
 * @returns <Button href={href} variant={variant} className={className} {...props}>{children}<Button />
 */
export default function Button({ children, href, className, ...props }: ButtonProps) {
  return (
    <Link
      className={clsx("w-fit h-fit py-3 px-4 rounded-xl font-semibold bg-[#05192D] text-white ", className)}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
