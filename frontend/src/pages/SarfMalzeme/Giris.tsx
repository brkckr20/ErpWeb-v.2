import { useState, ChangeEvent } from "react";
import Date from "../../components/Inputs/Date";
import InputGroups from "../../components/Inputs/InputGroups";
import ProcessButtonGroup from "../../components/ProcessButtonGroup";
import { MalzemeGirisFis } from "../../interfaces";

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
    </div>
  );
};

export default Giris;
