import React from "react";
import styles from "./Button.module.css";
import Loader from "../Loader";

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onClick?: (e?: any) => void;
    shape?: string;
    size?: string;
    loading?: boolean;
    variant?: string;
    height?: string;
    width?: string;
    style?: React.CSSProperties;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  type,
  loading,
  height,
  width,
  style,
  ...restProps
}) => {
  return (
    <button
      style={{ height, width, ...style }}
      disabled={loading || restProps.disabled}
      className={`${styles[className]}   ${className}  ${
        (loading || restProps.disabled) && styles["disabled"]
      }`}
      type={type}
      {...restProps}
    >
      {!!leftIcon && <div className="mr-2">{leftIcon}</div>}
      {loading ? <Loader>{children}</Loader> : children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
