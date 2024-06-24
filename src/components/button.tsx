import "./button.css";

interface ButtonProps {
  className: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  className,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
    ></button>
  );
};
