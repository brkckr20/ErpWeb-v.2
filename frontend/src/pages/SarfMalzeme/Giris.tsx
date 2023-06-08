import { useState, ChangeEvent } from "react";
import Date from "../../components/Inputs/Date";
import InputGroups from "../../components/Inputs/InputGroups";
import ProcessButtonGroup from "../../components/ProcessButtonGroup";
import { MalzemeGirisFis, MalzemeGirisKalem } from "../../interfaces";
import { Dialog } from "primereact/dialog";
import UpdateFooter from "../../components/Modal/UpdateFooter";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { CRUDManager } from "../../features/CRUDManager";
import InputSelectBox from "../../components/Inputs/InputSelectBox";
import OnlyInputWithButton from "../../components/Inputs/OnlyInputWithButton";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { OnlyInput } from "../../components/Inputs/OnlyInput";
import AntModal from "../../components/Modal/AntModal";
import ModalTable from "../../components/Modal/ModalTable";
import { getFieldLabel } from "../../utils/getFieldLabel";

const Giris = () => {
  const manager = new CRUDManager("sarfmalzemedepo");

  const initialValues: MalzemeGirisFis = {
    id: null,
    islem_cinsi: "SARF_MALZEME_GIRIS",
    tarih: "",
    firma_kodu: "",
    firma_unvan: "",
    fatura_no: "",
    kalem: [],
  };

  const [saveForm, setSaveForm] = useState<MalzemeGirisFis>(initialValues);
  const [visible, setVisible] = useState(false);
  const [kalem, setKalem] = useState<MalzemeGirisKalem[]>([]);

  const [mKoduModal, setMKoduModal] = useState(false);
  const [cardList, setCardList] = useState<any[]>([]);

  const [columns, setColumns] = useState<any[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSaveForm((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const changeDate = (e: any) => {
    setSaveForm({ ...saveForm, tarih: e.value });
  };

  const handleSave = () => {
    manager.create(saveForm).then((data) => console.log(data));
  };

  const addNewLine = () => {
    setKalem([
      ...kalem,
      {
        id: "3",
        kalem_islem: "",
        birim: "",
        malzeme_adi: "",
        malzeme_kodu: "",
        miktar: 1,
        key: Number(kalem.length + 1),
      },
    ]);
  };

  return (
    <div className="w-full flex flex-column h-full surface-200 p-1">
      <ProcessButtonGroup kaydet={handleSave} />
      <div className="flex mt-2">
        <div className="flex flex-column w-full">
          <InputGroups
            label="İşlem Cinsi"
            value={saveForm.islem_cinsi}
            onChange={handleInputChange}
            name="islem_cinsi"
            disabled
          />
          <Date date={saveForm.tarih} setDate={changeDate} />
          <InputGroups
            label="Firma Kodu"
            filtered={true}
            value={saveForm.firma_kodu}
            onChange={handleInputChange}
            name="firma_kodu"
            openModalName="firma"
            onClick={() => setVisible(true)}
          />
        </div>
        <div className="flex flex-column w-full">
          <InputGroups
            label="Firma Unvan"
            value={saveForm.firma_unvan}
            onChange={handleInputChange}
            name="firma_unvan"
          />
          <InputGroups
            label="Fatura No"
            value={saveForm.fatura_no}
            onChange={handleInputChange}
            name="fatura_no"
          />
          <InputGroups
            label="Kayıt No"
            value={saveForm.id}
            onChange={handleInputChange}
            name="id"
            disabled
          />
        </div>
      </div>
      <Dialog
        header="Header"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        footer={<UpdateFooter label="Tamam" />}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
      <div className="flex-1 flex w-full mt-1">
        <div className="mr-1 flex flex-column">
          <Button
            type="primary"
            shape="circle"
            onClick={addNewLine}
            icon={<PlusOutlined />}
          />
        </div>
        <div id="fis" className="w-full bg-black-alpha-30 overflow-x-auto">
          <AntModal
            title="Malzeme Kodu"
            open={mKoduModal}
            handleModal={() => setMKoduModal(false)}
          >
            <ModalTable columns={columns} data={cardList} />
          </AntModal>
          <DataTable
            value={kalem}
            size="small"
            tableStyle={{ minWidth: "50rem" }}
            emptyMessage="Kayıt girmek için + butonuna tıklayarak yeni kayıt ekleyebilirsiniz!"
          >
            <Column
              field="kalem_islem"
              header="Kalem İşlem"
              body={(rowData) => (
                <InputSelectBox
                  options={[{ label: "MALZEME", value: "malzeme" }]}
                />
              )}
            />
            <Column
              field="malzeme_kodu"
              header="Malzeme Kodu"
              body={(rowData) => (
                <OnlyInputWithButton
                  onButtonHandle={() => {
                    setMKoduModal(true);
                    manager
                      .getCards("kartlar", "firmakarti")
                      .then((data: any[]) => {
                        const filteredData = data.map(
                          ({ id, firma_kodu, firma_unvan1 }) => ({
                            id,
                            firma_kodu,
                            firma_unvan1,
                          })
                        );
                        setCardList(filteredData);
                        const filteredColumns = Object.keys(cardList[0]).map(
                          (key) => ({
                            title: getFieldLabel(key),
                            dataIndex: key,
                          })
                        );
                        setColumns(filteredColumns);
                      });
                  }}
                />
              )}
            />
            <Column
              field="malzeme_adi"
              header="Malzeme Adı"
              body={(rowData) => <OnlyInput disabled={true} />}
            ></Column>
            <Column
              field="miktar"
              header="Miktar"
              body={(rowData) => <OnlyInput type="number" />}
            ></Column>
            <Column
              field="birim"
              header="Birim"
              body={(rowData) => (
                <InputSelectBox
                  options={[{ label: "GİRİŞ", value: "giris" }]}
                />
              )}
            ></Column>
            <Column
              field="not1"
              header="Not 1"
              body={(rowData) => <OnlyInput />}
            ></Column>
          </DataTable>
        </div>
      </div>
      {/* <div className="flex-1">havuz alani olacak</div> */}
    </div>
  );
};

export default Giris;
