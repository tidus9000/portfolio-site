import React from "react";

interface Props {
  children: string;
  colour?: string;
  onClicked: () => void;
}

function Button({ onClicked, children, colour = "primary" }: Props) {
  return <button onClick={onClicked}>{children}</button>;
}

export default Button;
