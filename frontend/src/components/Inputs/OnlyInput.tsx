import { FC } from "react";
import { Input, InputNumber } from "antd";

interface IProps {
  disabled?: boolean;
  type?: "text" | "number";
}

const OnlyInput: FC<IProps> = ({ type = "text", disabled = false }) => {
  switch (type) {
    case "text":
      return <Input size="small" disabled={disabled} type={type} />;
    case "number":
      return <InputNumber className="w-full" size="small" />;
  }
};

export { OnlyInput };
