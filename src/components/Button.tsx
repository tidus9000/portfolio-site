import React from "react";

interface Props {
  children: string;
  colour?: string;
  onClicked: () => void;
}

function Button({ onClicked, children, colour = "primary" }: Props) {
  return (
    <button className={"btn btn-" + colour} onClick={onClicked}>
      {children}
    </button>
  );
}

export default Button;
