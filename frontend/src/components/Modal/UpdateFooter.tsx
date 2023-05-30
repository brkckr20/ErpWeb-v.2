import React from "react";
import { Button } from "primereact/button";

interface IUpdateFooterProps {
  handleUpdate: () => void;
}

const UpdateFooter: React.FC<IUpdateFooterProps> = ({ handleUpdate }) => {
  return (
    <div>
      <Button
        label="Güncelle"
        icon="pi pi-check"
        onClick={handleUpdate}
        autoFocus
        severity="success"
      />
    </div>
  );
};

export default UpdateFooter;
