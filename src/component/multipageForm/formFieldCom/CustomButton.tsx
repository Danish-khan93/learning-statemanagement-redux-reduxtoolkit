import { Button } from "@mui/material";

interface CustomButtonProps {
  children: string;
  onClick: () => void;
  type?: "submit"| any
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick,type }) => {
  return (
    <Button  type={type} onClick={onClick} >{children}</Button>
  );
};

export default CustomButton;
