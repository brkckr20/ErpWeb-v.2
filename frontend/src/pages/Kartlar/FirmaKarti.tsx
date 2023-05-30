import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import React, { useState, useRef, useEffect } from "react";
import { FirmaKartiInterface } from "../../interfaces";
import { getFieldLabel } from "../../utils/getFieldLabel";
import { KartYonetimi } from "../Kartlar/_KartYonetimi";
import { Toast } from "primereact/toast";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ContextMenu } from "primereact/contextmenu";
import { Dialog as UpdateModal } from "primereact/dialog";
import UpdateFooter from "../../components/Modal/UpdateFooter";

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
  const [firmaListesi, setFirmaListesi] = useState<FirmaKartiInterface[]>([]);
  const [fieldList, setFieldList] = useState<any>([]);
  const [updateTable, setUpdateTable] = useState(false);

  const [updateVisible, setUpdateVisible] = useState<boolean>(false);

  const cm = useRef<ContextMenu>(null);

  const toast = useRef<Toast>(null);

  const [updateForm, setUpdateForm] = useState<
    FirmaKartiInterface | null | any
  >({
    id: 0,
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
  });
  const [secilenSatir, setSecilenSatir] = useState<FirmaKartiInterface | null>(
    null
  );

  const menuModel = [
    {
      label: "Güncelle",
      icon: "pi pi-fw pi-pencil",
      command: () => {
        setUpdateVisible(true);
        kartYonetimi
          .idyeGoreKartGetir("firmakarti", secilenSatir?.id)
          .then((data) => setUpdateForm(data));
      },
    },
    {
      label: "Sil",
      icon: "pi pi-fw pi-trash",
      command: () => {
        // setUpdateForm(secilenSatir);
        // sil();
      },
    },
  ];

  const show = (data: any) => {
    toast.current?.show({
      severity: data.status,
      summary: "Bilgi",
      detail: data.mesaj,
    });
  };

  const columns = fieldList.map((field: any) => ({
    field,
    header: getFieldLabel(field),
  }));

  const fieldToArray = columns.map((item: any) => item.field);

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

  const guncelle = () => {
    kartYonetimi.kartGuncelle("firmakarti", updateForm).then((data) => {
      setUpdateVisible(false);
      show(data);
      setUpdateTable(true);
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

  useEffect(() => {
    kartYonetimi.kartGetir("firmakarti").then((data) => {
      setFirmaListesi(data);
      setFieldList(Object.keys(data[0]));
    });
  }, [updateTable]);

  return (
    <React.Fragment>
      <Toast ref={toast} />
      <div className="w-full h-full surface-200 p-1">
        <div className="flex gap-1 mb-1">
          <Button
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
        <div className="card flex justify-content-center">
          <UpdateModal
            header="Firma Güncelle"
            visible={updateVisible}
            style={{ width: "40vw" }}
            onHide={() => setUpdateVisible(false)}
            footer={<UpdateFooter handleUpdate={guncelle} />}
          >
            <div className="card flex flex-wrap gap-2">
              {Object.entries(updateForm).map(([key, value]) => (
                <div className="flex flex-column gap-2" key={key}>
                  <label>{key}</label>
                  <InputText
                    className="p-inputtext-sm"
                    value={value as any}
                    disabled={key === "id"}
                    onChange={(e) =>
                      setUpdateForm({ ...updateForm, [key]: e.target.value })
                    }
                  />
                </div>
              ))}
            </div>
          </UpdateModal>
        </div>
        <div>
          <ContextMenu model={menuModel} ref={cm} />
          <DataTable
            value={firmaListesi}
            dataKey="id"
            emptyMessage="Gösterilecek kayıt yok"
            size="small"
            globalFilterFields={fieldToArray}
            showGridlines
            stripedRows
            onContextMenu={(e) => cm.current?.show(e.originalEvent)}
            onContextMenuSelectionChange={(e: any) => setSecilenSatir(e.value)}
          >
            {columns.map((column: any) => (
              <Column
                key={column.field}
                field={column.field}
                header={column.header}
                filter
                filterPlaceholder={`${column.header} a göre ara`}
              />
            ))}
          </DataTable>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FirmaKarti;
