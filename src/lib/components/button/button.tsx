import React from "react";

interface IButtonProps {
  label?: string;
}
export const Button: React.SFC<IButtonProps> = props => {
  return (
    <button>
      {props.label}
      {props.children}
    </button>
  );
};
