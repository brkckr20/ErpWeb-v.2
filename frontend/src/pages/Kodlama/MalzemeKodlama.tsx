import { useState, useRef, useEffect } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dialog as UpdateModal } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import styles from "./kodlama.module.css";
import { MalzemeInterface, KodlamaIsimleri } from "../../interfaces";
import { Column } from "primereact/column";
import { KodlamaYonetimi } from "./KodlamaYonetimi";
import { Toast } from "primereact/toast";
import { ContextMenu } from "primereact/contextmenu";

const MalzemeKodlama = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [updateVisible, setUpdateVisible] = useState<boolean>(false);
  const [x, setX] = useState("");
  const [malzemeKodListesi, setMalzemeKodListesi] = useState<
    MalzemeInterface[]
  >([]);
  const [secilenSatir, setSecilenSatir] = useState<MalzemeInterface | null>(
    null
  );

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

  const [form, setForm] = useState({
    malzeme_kodu: "",
    malzeme_adi: "",
    depo_adi: "malzemedepo",
  });

  const [updateForm, setUpdateForm] = useState<MalzemeInterface | null | any>({
    id: 0,
    malzeme_kodu: "",
    malzeme_adi: "",
    depo_adi: "malzemedepo",
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
    isim: "malzemekodlama",
  };

  const kaydet = () => {
    kodlamaYonetimi.kodlamaKaydet(depoAdi, form).then((data) => {
      show(data);
      setForm({ malzeme_kodu: "", malzeme_adi: "", depo_adi: "malzemedepo" });
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
    kodlamaYonetimi
      .kodlamaGetir(depoAdi)
      .then((data) => setMalzemeKodListesi(data));
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
                <label>Malzeme Kodu</label>
                <InputText
                  className="p-inputtext-sm"
                  value={form.malzeme_kodu}
                  onChange={(e) =>
                    setForm({ ...form, malzeme_kodu: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-column gap-2">
                <label>Malzeme Adı</label>
                <InputText
                  className="p-inputtext-sm"
                  value={form.malzeme_adi}
                  onChange={(e) =>
                    setForm({ ...form, malzeme_adi: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-column gap-2">
                <label>Depo Adı</label>
                <InputText
                  className="p-inputtext-sm"
                  value={form.depo_adi}
                  onChange={(e) =>
                    setForm({ ...form, depo_adi: e.target.value })
                  }
                />
              </div>
            </div>
          </Dialog>
        </div>
        <div className="card flex justify-content-center">
          <UpdateModal
            header="Malzeme Kodu Kaydet"
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
                <label>Malzeme Kodu</label>
                <InputText
                  className="p-inputtext-sm"
                  value={updateForm?.malzeme_kodu}
                  onChange={(e) =>
                    setUpdateForm({
                      ...updateForm,
                      malzeme_kodu: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-column gap-2">
                <label>Malzeme Adı</label>
                <InputText
                  className="p-inputtext-sm"
                  value={updateForm?.malzeme_adi}
                  onChange={(e) =>
                    setUpdateForm({
                      ...updateForm,
                      malzeme_adi: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-column gap-2">
                <label>Depo Adı</label>
                <InputText
                  className="p-inputtext-sm"
                  value={updateForm?.depo_adi}
                  onChange={(e) =>
                    setUpdateForm({ ...updateForm, depo_adi: e.target.value })
                  }
                />
              </div>
            </div>
          </UpdateModal>
        </div>
        <div>
          <h1 className={styles.listHeading}>Malzeme Kodu Listesi</h1>
          <div>
            <ContextMenu model={menuModel} ref={cm} />
            <DataTable
              value={malzemeKodListesi}
              dataKey="id"
              emptyMessage="Gösterilecek kayıt yok"
              size="small"
              globalFilterFields={["malzeme_kodu", "malzeme_adi", "depo_adi"]}
              showGridlines
              stripedRows
              onContextMenu={(e) => cm.current?.show(e.originalEvent)}
              onContextMenuSelectionChange={(e: any) =>
                setSecilenSatir(e.value)
              }
            >
              <Column
                field={"malzeme_kodu"}
                header="Malzeme Kodu"
                filter
                filterPlaceholder="Search by name"
              />
              <Column
                field={"malzeme_adi"}
                header="Malzeme Adı"
                filter
                filterPlaceholder="Search by name"
              />
              <Column
                field={"depo_adi"}
                header="Depo Adı"
                filter
                filterPlaceholder="Search by name"
              />
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default MalzemeKodlama;
