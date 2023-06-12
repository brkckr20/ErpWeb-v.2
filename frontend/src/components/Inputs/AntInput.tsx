import React from "react";
import { Input, DatePicker, Space, Button } from "antd";
import type { DatePickerProps } from "antd";
import { MoreOutlined } from "@ant-design/icons";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

interface IProps {
  type?: "text" | "number" | "date" | "textWithFilter";
  labelName?: string | any;
  disabled?: boolean;
  onClick?: () => void;
}

const AntInput: React.FC<IProps> = ({
  type = "text",
  labelName,
  disabled,
  onClick,
}) => {
  switch (type) {
    case "text":
      return (
        <Input
          addonBefore={<AddonBefore labelName={labelName} />}
          size="small"
          disabled={disabled}
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
    case "textWithFilter":
      return (
        <Space.Compact size="small" style={{ width: "100%" }}>
          <Input
            addonBefore={<AddonBefore labelName={labelName} />}
            size="small"
          />
          <Button
            size="small"
            type="primary"
            className="bg-teal-900"
            onClick={onClick}
          >
            <MoreOutlined />
          </Button>
        </Space.Compact>
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
