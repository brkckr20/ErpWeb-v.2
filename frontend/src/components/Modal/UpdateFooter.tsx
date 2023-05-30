import React from "react";
import { Button } from "primereact/button";

interface IUpdateFooterProps {
  handleUpdate?: () => void;
  label: string;
}

const UpdateFooter: React.FC<IUpdateFooterProps> = ({
  handleUpdate,
  label = "Güncelle",
}) => {
  return (
    <div>
      <Button
        label={label}
        icon="pi pi-check"
        onClick={handleUpdate}
        autoFocus
        severity="success"
      />
    </div>
  );
};

export default UpdateFooter;
