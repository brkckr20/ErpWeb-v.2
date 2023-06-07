import { FC } from "react";
import { Select } from "antd";

interface IProps {
  options: OptionValue[];
}

interface OptionValue {
  value: string;
  label: string;
}

const InputSelectBox: FC<IProps> = ({ options }) => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <Select
      showSearch
      size="small"
      placeholder="Kalem İşlem"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      className="w-full"
      options={options}
    />
  );
};

export default InputSelectBox;
