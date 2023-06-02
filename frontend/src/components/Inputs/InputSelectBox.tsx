import { FC, useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

interface IslemCinsi {
  name: string;
}

interface IBirim {
  name: string;
}

interface IProps {
  type?: "birim" | "kalem_islem";
}

const InputSelectBox: FC<IProps> = ({ type }) => {
  const [selected, setSelected] = useState<IslemCinsi | null>(null);

  const islemCinsi: IslemCinsi[] = [
    { name: "MALZEME GİRİŞ" },
    { name: "TAMİR GİRİŞ" },
  ];

  const birim: IBirim[] = [{ name: "ADET" }, { name: "METRE" }];

  const optionType = () => {
    switch (type) {
      case "birim":
        return birim;
      case "kalem_islem":
        return islemCinsi;
      default:
        return birim;
    }
  };

  return (
    <Dropdown
      value={selected}
      onChange={(e: DropdownChangeEvent) => setSelected(e.value)}
      options={optionType()}
      optionLabel="name"
      className="w-full"
    />
  );
};

export default InputSelectBox;
