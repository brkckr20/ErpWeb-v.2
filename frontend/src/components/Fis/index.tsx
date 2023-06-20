import React from "react";
import AntInput from "../Inputs/AntInput";
import { IFisItem } from "../../pages/SarfMalzeme/Giris";

interface IProps {
  fisItems?: IFisItem[];
  grupSayisi?: number;
}

const Fis: React.FC<IProps> = ({ fisItems }) => {
  const groups: JSX.Element[] = [];

  if (fisItems) {
    for (let i = 0; i < fisItems.length; i += 3) {
      const groupItems = fisItems.slice(i, i + 3);

      const group = (
        <div
          style={{ display: "flex", flexDirection: "column", flex: 1 }}
          key={i}
        >
          {groupItems.map((item, index) => (
            <AntInput
              disabled={item.disabled}
              key={index}
              labelName={item.labelName}
              type={item.type}
              onClick={item.onClick}
              value={item?.type}
            />
          ))}
        </div>
      );

      groups.push(group);
    }
  }

  return <div style={{ display: "flex", flexWrap: "wrap" }}>{groups}</div>;
};

export default Fis;
