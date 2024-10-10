import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onDismissed: () => void;
}

const Alert = ({ children, onDismissed }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onDismissed}
      ></button>
    </div>
  );
};

export default Alert;
