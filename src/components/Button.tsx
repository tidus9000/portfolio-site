interface Props {
  children: string;
  colour?: string;
  onClicked: () => void;
}

function Button({ onClicked, children, colour = "primary" }: Props) {
  return <button onClick={onClicked} className={`btn btn-${colour}`}>{children}</button>;
}

export default Button;
