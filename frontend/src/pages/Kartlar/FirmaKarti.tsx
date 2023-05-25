import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import React, { useState, useRef } from "react";
import { FirmaKartiInterface } from "../../interfaces";
import { getFieldLabel } from "../../utils/getFieldLabel";
import { KartYonetimi } from "../Kartlar/_KartYonetimi";
import { Toast } from "primereact/toast";

const kartYonetimi = new KartYonetimi();

const initialValues: FirmaKartiInterface = {
  firma_kodu: "",
  firma_unvan1: "",
  adres1: "",
  adres2: "",
  ulke_adi: "",
  ulke_kodu: "",
  sehir: "",
  ilce: "",
  posta_kodu: "",
  vergi_dairesi: "",
  vergi_no: "",
  telefon: "",
  cari_tipi: "",
  gib_mail: "",
};

const FirmaKarti = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [saveForm, setSaveForm] = useState<FirmaKartiInterface>(initialValues);

  const toast = useRef<Toast>(null);

  const show = (data: any) => {
    toast.current?.show({
      severity: data.status,
      summary: "Bilgi",
      detail: data.mesaj,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSaveForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const kaydet = () => {
    kartYonetimi.kartKaydet("firmakarti", saveForm).then((data) => {
      setVisible(false);
      show(data);
      setSaveForm(initialValues);
    });
  };

  const footerContent = (
    <div>
      <Button
        label="Vazgeç"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
        severity="danger"
      />
      <Button
        label="Kaydet"
        icon="pi pi-check"
        onClick={kaydet}
        autoFocus
        severity="success"
      />
    </div>
  );
  return (
    <React.Fragment>
      <Toast ref={toast} />
      <div className="w-full h-full surface-200 p-1">
        <div className="flex gap-1">
          <Button
            label=""
            icon="pi pi-plus"
            size="small"
            severity="info"
            onClick={() => setVisible(true)}
          />
        </div>
        <div className="card flex justify-content-center">
          <Dialog
            header="Yeni Firma Ekle"
            visible={visible}
            style={{ width: "25vw" }}
            onHide={() => setVisible(false)}
            footer={footerContent}
          >
            <div className="card">
              {Object.entries(saveForm).map(([fieldName, fieldValue]) => (
                <div className="" key={fieldName}>
                  <div className="flex flex-column">
                    <label>{getFieldLabel(fieldName)}</label>
                    <InputText
                      className="p-inputtext-sm"
                      name={fieldName}
                      value={fieldValue}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Dialog>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FirmaKarti;
