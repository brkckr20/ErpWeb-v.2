import { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

const MalzemeKarti = () => {
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
        onClick={() => setVisible(false)}
        autoFocus
        severity="success"
      />
    </div>
  );

  return (
    <div className="w-full h-full surface-200 p-1">
      <div>
        <Button
          label="Yeni"
          icon="pi pi-plus"
          size="small"
          severity="success"
          onClick={() => setVisible(true)}
        />
      </div>
      <div className="card flex justify-content-center">
        <Dialog
          header="Yeni Kart Ekle"
          visible={visible}
          style={{ width: "40vw" }}
          onHide={() => setVisible(false)}
          footer={footerContent}
        >
          <div className="card flex">
            <div className="flex flex-column gap-2">
              <label>Malzeme Kodu</label>
              <InputText className="p-inputtext-sm" />
            </div>
          </div>
          <div className="card flex">
            <div className="flex flex-column gap-2">
              <label>Malzeme Kodu</label>
              <InputText className="p-inputtext-sm" />
            </div>
          </div>
          <div className="card flex">
            <div className="flex flex-column gap-2">
              <label>Malzeme Kodu</label>
              <InputText className="p-inputtext-sm" />
            </div>
          </div>
          <div className="card flex">
            <div className="flex flex-column gap-2">
              <label>Malzeme Kodu</label>
              <InputText className="p-inputtext-sm" />
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default MalzemeKarti;
