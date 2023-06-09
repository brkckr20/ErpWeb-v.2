import { Input, DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import React from "react";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

interface IProps {
  type?: "text" | "number" | "date";
  labelName?: string | any;
}

const AntInput: React.FC<IProps> = ({ type = "text", labelName }) => {
  switch (type) {
    case "text":
      return (
        <Input
          addonBefore={<AddonBefore labelName={labelName} />}
          size="small"
        />
      );
    case "date":
      return (
        <div className="ant-input-wrapper ant-input-group css-dev-only-do-not-override-dfjnss">
          <span className="ant-input-group-addon" style={{ width: "173px" }}>
            {"Tarih".toLocaleUpperCase()}
          </span>
          <DatePicker
            placeholder=""
            onChange={onChange}
            className="w-full"
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            size="small"
          />
        </div>
      );
    default:
      return <></>;
  }
};

/* addon kısmı için eklendi başka bir sayfada olacak şekilde düzenlenebilir */
interface IAddonProps {
  labelName: string;
}

const AddonBefore: React.FC<IAddonProps> = ({ labelName }) => {
  return (
    <span style={{ width: "150px", display: "inline-block" }}>
      {labelName.toLocaleUpperCase()}
    </span>
  );
};

export default AntInput;
