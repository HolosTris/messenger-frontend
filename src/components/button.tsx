import "./button.css";

interface ButtonProps {
  className: string;
  disabled?: boolean;
}

export const Button = ({ className, disabled = false }: ButtonProps) => {
  return <button className={className} disabled={disabled}></button>;
};
