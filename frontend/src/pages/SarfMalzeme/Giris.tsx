import { useState, ChangeEvent } from "react";
import Date from "../../components/Inputs/Date";
import InputGroups from "../../components/Inputs/InputGroups";
import ProcessButtonGroup from "../../components/ProcessButtonGroup";
import { MalzemeGirisFis, MalzemeGirisKalem } from "../../interfaces";
import { Dialog } from "primereact/dialog";
import UpdateFooter from "../../components/Modal/UpdateFooter";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { CRUDManager } from "../../features/CRUDManager";
import { OnlyInput } from "../../components/Inputs/OnlyInput";
import InputSelectBox from "../../components/Inputs/InputSelectBox";

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
  const [kalem, setKalem] = useState<MalzemeGirisKalem[]>([
    {
      id: "1",
      kalem_islem: "TAMİR GİRİŞ",
      birim: "ADET",
      malzeme_adi: "TONER",
      malzeme_kodu: "TNR1",
      miktar: 1,
    },
    {
      id: "2",
      kalem_islem: "TAMİR GİRİŞ",
      birim: "ADET",
      malzeme_adi: "TONER",
      malzeme_kodu: "TNR2",
      miktar: 1,
    },
    {
      id: "3",
      kalem_islem: "TAMİR GİRİŞ",
      birim: "ADET",
      malzeme_adi: "TONER",
      malzeme_kodu: "TNR2",
      miktar: 1,
    },
  ]);

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
            icon="pi pi-plus"
            rounded
            outlined
            severity="success"
            size="small"
            tooltip="Yeni satır"
            tooltipOptions={{ position: "right" }}
          />
        </div>
        <div id="fis" className="w-full bg-black-alpha-30 overflow-x-auto">
          <DataTable
            value={kalem}
            size="small"
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column
              field="kalem_islem"
              header="Kalem İşlem"
              body={<InputSelectBox type="kalem_islem" />}
            />
            <Column
              field="malzeme_kodu"
              header="Malzeme Kodu"
              body={(rowData) => (
                <OnlyInput disabled={true} value={rowData.malzeme_kodu} />
              )}
            />
            <Column
              field="malzeme_kodu"
              header="Malzeme Adı"
              body={<OnlyInput disabled={true} />}
            ></Column>
            <Column
              field="miktar"
              header="Miktar"
              body={(rowData) => (
                <OnlyInput
                  value={rowData.miktar}
                  onChange={(e: any) => {
                    console.log(rowData);
                  }}
                />
              )}
            ></Column>
            <Column
              field="birim"
              header="Birim"
              body={<InputSelectBox type="birim" />}
            ></Column>
            <Column field="not1" header="Not 1" body={<OnlyInput />}></Column>
          </DataTable>
        </div>
      </div>
      <div className="flex-1">havuz alani olacak</div>
    </div>
  );
};

export default Giris;
