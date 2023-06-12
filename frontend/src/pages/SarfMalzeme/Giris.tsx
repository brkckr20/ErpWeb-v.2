import { useState } from "react";
import Fis from "../../components/Fis";
import ProcessButtonGroup from "../../components/ProcessButtonGroup";
import { CRUDManager } from "../../features/CRUDManager";
import { Button, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AntModal from "../../components/Modal/AntModal";

export interface IFisItem {
  labelName?: string;
  type?: "text" | "date" | "textWithFilter";
  disabled?: boolean;
  onClick?: () => void;
}

const Giris = () => {
  const [cariModalOpen, setCariModalOpen] = useState(false);
  // const manager = new CRUDManager("sarfmalzemedepo");

  const fisItems: IFisItem[] = [
    {
      labelName: "İşlem Cinsi",
      type: "text",
    },
    {
      labelName: "Tarih",
      type: "date",
    },
    {
      labelName: "Firma Kodu",
      type: "textWithFilter",
      onClick: () => setCariModalOpen(true),
    },
    {
      labelName: "Firma Ünvan",
      type: "text",
    },
    {
      labelName: "Fatura No",
      type: "text",
    },
    {
      labelName: "Kayıt No",
      type: "text",
      disabled: true,
    },
  ];

  return (
    <div className="w-full flex flex-column h-full surface-200 p-1">
      <ProcessButtonGroup
        kaydet={() => {
          alert("kayit islemi yapilacak");
        }}
      />
      <div className="w-full h-full flex flex-column">
        <div className="mt-1 mb-1">
          <Fis fisItems={fisItems} />
        </div>
        <div className="flex-1 flex">
          <div>
            <Tooltip title="Yeni satır ekle">
              <Button type="primary" shape="circle" icon={<PlusOutlined />} />
            </Tooltip>
          </div>
          <div className="flex-1">2</div>
        </div>
        {/* <div className="flex-1">varsa havuz</div> */}
      </div>
      <AntModal
        open={cariModalOpen}
        title="Firma Listesi"
        handleModal={() => setCariModalOpen(false)}
      >
        <h1>lorem ipsum</h1>
      </AntModal>
    </div>
  );
};

export default Giris;
