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
      return (
        <InputNumber
          size="small"
          defaultValue={0}
          formatter={(value: any) => {
            const formattedValue = parseFloat(value).toFixed(2);
            return `${formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
          }}
        />
      );
  }
  // return <Input size="small" disabled={disabled} type={type} />;
};

export { OnlyInput };
