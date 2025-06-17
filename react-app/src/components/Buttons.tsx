import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: string;
  handleClick: () => void;
}

const Buttons = ({ children, color = "primary", handleClick }: Props) => {
  return (
    <div>
      <button
        color="primary"
        onClick={handleClick}
        type="button"
        className={"btn btn-" + color}
      >
        {children}
      </button>
    </div>
  );
};

export default Buttons;
