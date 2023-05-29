import { ChangeEvent, FC } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./Input.css";

interface IInputText {
  label: string;
  filtered?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | any;
  name?: string;
  disabled?: boolean;
}

const InputGroups: FC<IInputText> = ({
  label,
  filtered,
  value,
  name,
  onChange,
  disabled,
}) => {
  return (
    <div className="">
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon w-12rem justify-content-start">
          {label}
        </span>
        <InputText
          className="p-inputtext-sm"
          value={value}
          onChange={onChange}
          name={name}
          disabled={disabled}
        />
        {filtered && (
          <Button
            severity="secondary"
            icon="pi pi-ellipsis-v"
            className="p-0"
          />
        )}
      </div>
    </div>
  );
};

export default InputGroups;
