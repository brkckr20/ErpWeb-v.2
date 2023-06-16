import { useEffect, useState } from "react";
import Fis from "../../components/Fis";
import ProcessButtonGroup from "../../components/ProcessButtonGroup";
import { Button, Table, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";

import AntModal from "../../components/Modal/AntModal";
import AntTables from "../../components/Tables/AntTables";
import { CRUDManager } from "../../features/CRUDManager";
import { ListSettings } from "../../features/ListSettings";

export interface IFisItem {
  labelName?: string;
  type?: "text" | "date" | "textWithFilter";
  disabled?: boolean;
  onClick?: () => void;
}

const Giris = () => {
  const [cariModalOpen, setCariModalOpen] = useState(false);
  const [cariList, setCariList] = useState([]);
  const manager = new CRUDManager("sarfmalzemedepo");
  const listSettings = new ListSettings();

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

  const yeniSatirEkle = () => {
    alert();
  };

  useEffect(() => {
    manager.getCards("kartlar", "firmakarti").then((data) => setCariList(data));
    listSettings.getCompanyCodeAndName(cariList);
  }, []);

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Firma Kodu",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Firma Adı",
      dataIndex: "age",
      key: "age",
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
              <Button
                onClick={yeniSatirEkle}
                type="primary"
                shape="circle"
                icon={<PlusOutlined />}
              />
            </Tooltip>
          </div>
          <div className="flex-1 ml-1">{/* <AntTables /> */}</div>
        </div>
        {/* <div className="flex-1">varsa havuz</div> */}
      </div>
      <AntModal
        open={cariModalOpen}
        title="Firma Listesi"
        handleModal={() => setCariModalOpen(false)}
      >
        <Table dataSource={dataSource} columns={columns} size="small" />;
      </AntModal>
    </div>
  );
};

export default Giris;
