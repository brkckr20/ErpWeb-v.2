import { useState, ChangeEvent } from "react";
import Date from "../../components/Inputs/Date";
import InputGroups from "../../components/Inputs/InputGroups";
import ProcessButtonGroup from "../../components/ProcessButtonGroup";
import { MalzemeGirisFis } from "../../interfaces";
import { Dialog } from "primereact/dialog";
import UpdateFooter from "../../components/Modal/UpdateFooter";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Giris = () => {
  const initialValues: MalzemeGirisFis = {
    id: null,
    islem_cinsi: "SARF_MALZEME_GIRIS",
    tarih: "",
    firma_kodu: "",
    firma_unvan: "",
    fatura_no: "",
  };

  const [saveForm, setSaveForm] = useState<MalzemeGirisFis>(initialValues);
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1000",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1001",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
  ]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSaveForm((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
  }

  const handleSave = () => {
    alert();
  };
  return (
    <div className="w-full flex flex-column h-full surface-200 p-1">
      <ProcessButtonGroup kaydet={handleSave} />
      <div className="flex mt-2">
        <div className="flex flex-column w-full">
          <InputGroups
            label="İşlem Cinsi"
            value={saveForm.islem_cinsi}
            onChange={handleInputChange}
            name="islem_cinsi"
            disabled
          />
          <Date />
          <InputGroups
            label="Firma Kodu"
            filtered={true}
            value={saveForm.firma_kodu}
            onChange={handleInputChange}
            name="firma_kodu"
            openModalName="firma"
            onClick={() => setVisible(true)}
          />
        </div>
        <div className="flex flex-column  w-full">
          <InputGroups
            label="Firma Unvan"
            value={saveForm.firma_unvan}
            onChange={handleInputChange}
            name="firma_unvan"
          />
          <InputGroups
            label="Fatura No"
            value={saveForm.fatura_no}
            onChange={handleInputChange}
            name="fatura_no"
          />
          <InputGroups
            label="Kayıt No"
            value={saveForm.id}
            onChange={handleInputChange}
            name="id"
            disabled
          />
        </div>
      </div>
      <Dialog
        header="Header"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        footer={<UpdateFooter label="Tamam" />}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
      <div className="flex-1 flex w-full mt-1">
        <div className="mr-1 flex flex-column">
          <Button
            icon="pi pi-plus"
            rounded
            outlined
            severity="success"
            size="small"
            tooltip="Yeni satır"
            tooltipOptions={{ position: "right" }}
          />
        </div>
        <div className="w-full bg-black-alpha-30">
          <DataTable
            value={products}
            size="small"
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column field="id" header="ID"></Column>
            <Column field="id" header="ID"></Column>
            <Column field="id" header="ID"></Column>
            <Column field="id" header="ID"></Column>
            <Column field="id" header="ID"></Column>
            <Column field="code" header="Code"></Column>
          </DataTable>
        </div>
      </div>
      <div className="flex-1">havuz alani olacak</div>
    </div>
  );
};

export default Giris;
