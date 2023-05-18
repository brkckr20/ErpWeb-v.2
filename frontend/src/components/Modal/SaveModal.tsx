import { Button } from "primereact/button";

export const SaveModal = ({ onSave, setVisible }: any) => {
  return (
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
        onClick={onSave}
        autoFocus
        severity="success"
      />
    </div>
  );
};
