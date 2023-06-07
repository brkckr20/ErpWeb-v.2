import { Input } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { SizeType } from "antd/es/config-provider/SizeContext";

import React from "react";

interface IProps {
  size?: SizeType;
  onButtonHandle?: () => void;
}

interface IButtonProps {
  onClick?: () => void;
}

const Suffix: React.FC<IButtonProps> = ({ onClick }) => {
  return (
    <MoreOutlined
      onClick={onClick}
      style={{
        fontSize: 16,
        color: "#1677ff",
        cursor: "pointer",
      }}
    />
  );
};
const OnlyInputWithButton: React.FC<IProps> = ({
  size = "small",
  onButtonHandle,
}) => {
  return <Input size={size} suffix={<Suffix onClick={onButtonHandle} />} />;
};

export default OnlyInputWithButton;
