import { useState, ChangeEvent } from "react";
import Date from "../../components/Inputs/Date";
import InputGroups from "../../components/Inputs/InputGroups";
import ProcessButtonGroup from "../../components/ProcessButtonGroup";
import { MalzemeGirisFis } from "../../interfaces";
import { Dialog } from "primereact/dialog";
import UpdateFooter from "../../components/Modal/UpdateFooter";

const Giris = () => {
  const initialValues: MalzemeGirisFis = {
    id: null,
    islem_cinsi: "",
    tarih: "",
    firma_kodu: "",
    firma_unvan: "",
    fatura_no: "",
  };

  const [saveForm, setSaveForm] = useState<MalzemeGirisFis>(initialValues);
  const [visible, setVisible] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSaveForm((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    alert();
  };
  return (
    <div className="w-full h-full surface-200 p-1">
      <ProcessButtonGroup kaydet={handleSave} />
      <div className="flex mt-2">
        <div className="flex flex-column w-full">
          <InputGroups
            label="İşlem Cinsi"
            value={saveForm.islem_cinsi}
            onChange={handleInputChange}
            name="islem_cinsi"
          />
          <Date />
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
        <div className="flex flex-column  w-full">
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
    </div>
  );
};

export default Giris;
