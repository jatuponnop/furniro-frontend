import React from "react";

type Props = {
  name: string;
  href?: string;
  width?: number;
  height?: number;
  onClick?: any;
};

function Icon({
  name,
  href,
  width = 24,
  height = 24,
  onClick,
  ...props
}: Props) {
  return (
    <a
      href={href}
      style={{
        width,
        height,
      }}
      onClick={onClick}
    >
      <img
        {...props}
        src={`images/icons/${name}.png`}
        alt={name}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </a>
  );
}

export default Icon;
