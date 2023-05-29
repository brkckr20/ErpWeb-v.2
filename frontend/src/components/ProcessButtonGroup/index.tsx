import { FC } from "react";
import { Button } from "primereact/button";

interface IPGButton {
  yeni?: () => void;
  kaydet?: () => void;
}

const ProcessButtonGroup: FC<IPGButton> = ({ kaydet }) => {
  return (
    <div>
      <div className="flex gap-1 mb-1">
        <Button
          icon="pi pi-plus"
          size="small"
          tooltip="Yeni"
          tooltipOptions={{ position: "top" }}
          severity="info"
        />
        <Button
          icon="pi pi-save"
          size="small"
          tooltip="Kaydet"
          tooltipOptions={{ position: "top" }}
          severity="info"
          onClick={kaydet}
        />
        <Button
          icon="pi pi-print"
          size="small"
          tooltip="Yazdır"
          tooltipOptions={{ position: "top" }}
          severity="info"
        />
        <Button
          icon="pi pi-angle-left"
          size="small"
          tooltip="Geri"
          tooltipOptions={{ position: "top" }}
          severity="info"
        />
        <Button
          icon="pi pi-angle-right"
          size="small"
          tooltip="İleri"
          tooltipOptions={{ position: "top" }}
          severity="info"
        />
        <Button
          icon="pi pi-angle-double-left"
          size="small"
          tooltip="İlk"
          tooltipOptions={{ position: "top" }}
          severity="info"
        />
        <Button
          icon="pi pi-angle-double-right"
          size="small"
          tooltip="Son"
          tooltipOptions={{ position: "top" }}
          severity="info"
        />
        <Button
          icon="pi pi-file-excel"
          size="small"
          tooltip="Excel"
          tooltipOptions={{ position: "top" }}
          severity="info"
        />
        <Button
          icon="pi pi-times"
          size="small"
          tooltip="Vazgeç"
          tooltipOptions={{ position: "top" }}
          severity="secondary"
        />
        <Button
          icon="pi pi-trash"
          size="small"
          tooltip="Sil"
          tooltipOptions={{ position: "top" }}
          severity="danger"
        />
      </div>
    </div>
  );
};

export default ProcessButtonGroup;
