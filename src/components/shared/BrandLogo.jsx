import Image from "next/image";

const sizes = {
  navbar: { width: 200, height: 40 },
  sidebar: { width: 180, height: 36 },
  preview: { width: 200, height: 40 },
  default: { width: 200, height: 40 },
};

export default function BrandLogo({ variant = "default", className }) {
  const size = sizes[variant] || sizes.default;

  return (
    <Image
      src="/dark-logo.png"
      alt="Frontend Forge Logo"
      width={size.width}
      height={size.height}
      className={className}
    />
  );
}