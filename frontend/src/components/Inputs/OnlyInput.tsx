import React, { ChangeEventHandler, FC } from "react";
import { InputText } from "primereact/inputtext";

interface IOnlyInputProps {
  rowData?: any;
  column?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: string;
}

const OnlyInput: FC<IOnlyInputProps> = ({
  disabled = false,
  value,
  onChange,
}) => {
  return (
    <InputText
      type="text"
      value={value}
      onChange={onChange}
      className="p-inputtext-sm w-full"
      disabled={disabled}
    />
  );
};

export { OnlyInput };
