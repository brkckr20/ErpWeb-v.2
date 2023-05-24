import { useState, useRef, useEffect } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dialog as UpdateModal } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import styles from "./kodlama.module.css";
import { BirimInterface, KodlamaIsimleri } from "../../interfaces";
import { Column } from "primereact/column";
import { KodlamaYonetimi } from "./KodlamaYonetimi";
import { Toast } from "primereact/toast";
import { ContextMenu } from "primereact/contextmenu";

const BirimKodlama = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [updateVisible, setUpdateVisible] = useState<boolean>(false);
  const [x, setX] = useState("");
  const [malzemeKodListesi, setMalzemeKodListesi] = useState<BirimInterface[]>(
    []
  );
  const [secilenSatir, setSecilenSatir] = useState<BirimInterface | null>(null);

  const toast = useRef<Toast>(null);
  const cm = useRef<ContextMenu>(null);

  const menuModel = [
    {
      label: "Güncelle",
      icon: "pi pi-fw pi-pencil",
      command: () => {
        setUpdateForm(secilenSatir);
        setUpdateVisible(true);
      },
    },
    {
      label: "Sil",
      icon: "pi pi-fw pi-trash",
      command: () => {
        setUpdateForm(secilenSatir);
        sil();
      },
    },
  ];

  const [form, setForm] = useState<BirimInterface>({
    ad: "",
    kisa_kod: "",
    depo: "",
  });

  const [updateForm, setUpdateForm] = useState<BirimInterface | null | any>({
    id: 0,
    ad: "",
    kisa_kod: "",
    depo: "malzemedepo",
  });

  const show = (data: any) => {
    toast.current?.show({
      severity: data.status,
      summary: "Bilgi",
      detail: data.mesaj,
    });
    setX(x === "geldi" ? "" : "geldi");
  };

  const kodlamaYonetimi = new KodlamaYonetimi();
  const depoAdi: KodlamaIsimleri = {
    isim: "birimkodlama",
  };

  const kaydet = () => {
    kodlamaYonetimi.kodlamaKaydet(depoAdi, form).then((data) => {
      console.log(data);
      show(data);
      setForm({ ad: "", kisa_kod: "", depo: "" });
    });
    setVisible(false);
    setX(x === "geldi" ? "" : "geldi");
  };

  const guncelle = () => {
    kodlamaYonetimi.kodlamaGuncelle(depoAdi, updateForm).then((data) => {
      show(data);
    });
    setUpdateVisible(false);
  };

  const sil = () => {
    kodlamaYonetimi.kodlamaSil(depoAdi, secilenSatir?.id).then((data) => {
      show(data);
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

  const footerContent2 = (
    <div>
      <Button
        label="Güncelle"
        icon="pi pi-check"
        onClick={guncelle}
        autoFocus
        severity="success"
      />
    </div>
  );

  useEffect(() => {
    kodlamaYonetimi.kodlamaGetir(depoAdi).then((data) => {
      setMalzemeKodListesi(data);
    });
  }, [x]);

  return (
    <>
      <Toast ref={toast} />
      <div className="w-full h-full surface-200 p-1">
        <div className="flex gap-1">
          <Button
            label=""
            icon="pi pi-plus"
            size="small"
            severity="success"
            onClick={() => setVisible(true)}
          />
        </div>
        <div className="card flex justify-content-center">
          <Dialog
            header="Malzeme Kodu Kaydet"
            visible={visible}
            style={{ width: "35vw" }}
            onHide={() => setVisible(false)}
            footer={footerContent}
          >
            <div className="card flex gap-2">
              <div className="flex flex-column gap-2">
                <label>Birim Ad :</label>
                <InputText
                  className="p-inputtext-sm"
                  value={form.ad}
                  onChange={(e) => setForm({ ...form, ad: e.target.value })}
                />
              </div>
              <div className="flex flex-column gap-2">
                <label>Birim Kısa Kodu</label>
                <InputText
                  className="p-inputtext-sm"
                  value={form.kisa_kod}
                  onChange={(e) =>
                    setForm({ ...form, kisa_kod: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-column gap-2">
                <label>Depo Adı</label>
                <InputText
                  className="p-inputtext-sm"
                  value={form.depo}
                  onChange={(e) => setForm({ ...form, depo: e.target.value })}
                />
              </div>
            </div>
          </Dialog>
        </div>
        <div className="card flex justify-content-center">
          <UpdateModal
            header="Birim Güncelle"
            visible={updateVisible}
            style={{ width: "45vw" }}
            onHide={() => setUpdateVisible(false)}
            footer={footerContent2}
          >
            <div className="card flex gap-2">
              <div className="flex flex-column gap-2">
                <label>Kayıt Numarası</label>
                <InputText
                  className="p-inputtext-sm"
                  value={updateForm?.id?.toString()}
                  disabled
                />
              </div>
              <div className="flex flex-column gap-2">
                <label>Birim Adı</label>
                <InputText
                  className="p-inputtext-sm"
                  value={updateForm?.ad}
                  onChange={(e) =>
                    setUpdateForm({
                      ...updateForm,
                      ad: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-column gap-2">
                <label>Kısa Kod</label>
                <InputText
                  className="p-inputtext-sm"
                  value={updateForm?.kisa_kod}
                  onChange={(e) =>
                    setUpdateForm({
                      ...updateForm,
                      kisa_kod: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-column gap-2">
                <label>Depo Adı</label>
                <InputText
                  className="p-inputtext-sm"
                  value={updateForm?.depo}
                  onChange={(e) =>
                    setUpdateForm({ ...updateForm, depo: e.target.value })
                  }
                />
              </div>
            </div>
          </UpdateModal>
        </div>
        <div>
          <h1 className={styles.listHeading}>Birim Listesi</h1>
          <div>
            <ContextMenu model={menuModel} ref={cm} />
            <DataTable
              value={malzemeKodListesi}
              dataKey="id"
              emptyMessage="Gösterilecek kayıt yok"
              size="small"
              globalFilterFields={["ad", "kisa_kod", "depo"]}
              showGridlines
              stripedRows
              onContextMenu={(e) => cm.current?.show(e.originalEvent)}
              onContextMenuSelectionChange={(e: any) =>
                setSecilenSatir(e.value)
              }
            >
              <Column
                field={"ad"}
                header="Birim Adı"
                filter
                filterPlaceholder="Ad'a göre ara"
              />
              <Column
                field={"kisa_kod"}
                header="Birim Kısa Kod"
                filter
                filterPlaceholder="Kod'a göre ara"
              />
              <Column
                field={"depo"}
                header="Depo Adı"
                filter
                filterPlaceholder="Depo adına göre ara"
              />
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default BirimKodlama;
