import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import styles from "./Button.module.css";

type Props = {
  label: string;
  color?: "red" | "yellow" | "green";
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: FC<Props> = ({ label, color, ...props }) => {
  const buttonColorStyle = color ? styles[color] : styles.default;
  return (
    <button
      type="button"
      className={`${styles.btn} ${buttonColorStyle}`}
      {...props}
    >
      {label}
    </button>
  );
};
