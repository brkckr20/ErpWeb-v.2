import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

const FirmaKarti = () => {
  const [visible, setVisible] = useState<boolean>(false);

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
        // onClick={kaydet}
        autoFocus
        severity="success"
      />
    </div>
  );
  return (
    <React.Fragment>
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
            style={{ width: "22vw" }}
            onHide={() => setVisible(false)}
            footer={footerContent}
          >
            <div className="card">
              <div className="flex gap-2">
                <div className="flex flex-column gap-2">
                  <label>Birim Kısa Kodu</label>
                  <InputText
                    className="p-inputtext-sm"
                    value={"orm.kisa_kod"}
                  />
                </div>
                <div className="flex flex-column gap-2">
                  <label>Birim Kısa Kodu</label>
                  <InputText
                    className="p-inputtext-sm"
                    value={"orm.kisa_kod"}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-column gap-2">
                  <label>Birim Kısa Kodu</label>
                  <InputText
                    className="p-inputtext-sm"
                    value={"orm.kisa_kod"}
                  />
                </div>
                <div className="flex flex-column gap-2">
                  <label>Birim Kısa Kodu</label>
                  <InputText
                    className="p-inputtext-sm"
                    value={"orm.kisa_kod"}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-column gap-2">
                  <label>Birim Kısa Kodu</label>
                  <InputText
                    className="p-inputtext-sm"
                    value={"orm.kisa_kod"}
                  />
                </div>
                <div className="flex flex-column gap-2">
                  <label>Birim Kısa Kodu</label>
                  <InputText
                    className="p-inputtext-sm"
                    value={"orm.kisa_kod"}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-column gap-2">
                  <label>Birim Kısa Kodu</label>
                  <InputText
                    className="p-inputtext-sm"
                    value={"orm.kisa_kod"}
                  />
                </div>
                <div className="flex flex-column gap-2">
                  <label>Birim Kısa Kodu</label>
                  <InputText
                    className="p-inputtext-sm"
                    value={"orm.kisa_kod"}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-column gap-2">
                  <label>Birim Kısa Kodu</label>
                  <InputText
                    className="p-inputtext-sm"
                    value={"orm.kisa_kod"}
                  />
                </div>
                <div className="flex flex-column gap-2">
                  <label>Birim Kısa Kodu</label>
                  <InputText
                    className="p-inputtext-sm"
                    value={"orm.kisa_kod"}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-column gap-2">
                  <label>Birim Kısa Kodu</label>
                  <InputText
                    className="p-inputtext-sm"
                    value={"orm.kisa_kod"}
                  />
                </div>
                <div className="flex flex-column gap-2">
                  <label>Birim Kısa Kodu</label>
                  <InputText
                    className="p-inputtext-sm"
                    value={"orm.kisa_kod"}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-column gap-2">
                  <label>Birim Kısa Kodu</label>
                  <InputText
                    className="p-inputtext-sm"
                    value={"orm.kisa_kod"}
                  />
                </div>
                <div className="flex flex-column gap-2">
                  <label>Birim Kısa Kodu</label>
                  <InputText
                    className="p-inputtext-sm"
                    value={"orm.kisa_kod"}
                  />
                </div>
              </div>
              <div className="">
                <div className="flex flex-column gap-2">
                  <label>Birim Kısa Kodu</label>
                  <InputText
                    className="p-inputtext-sm"
                    value={"orm.kisa_kod"}
                  />
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FirmaKarti;
