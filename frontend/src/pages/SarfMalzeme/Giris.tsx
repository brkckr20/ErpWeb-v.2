import Fis from "../../components/Fis";
import ProcessButtonGroup from "../../components/ProcessButtonGroup";
import { CRUDManager } from "../../features/CRUDManager";

export interface IFisItem {
  labelName?: string;
  type?: "text" | "date";
}

const Giris = () => {
  // const manager = new CRUDManager("sarfmalzemedepo");

  const fisItems: IFisItem[] = [
    {
      labelName: "İşlem Cinsi",
      type: "text",
    },
    {
      labelName: "Tarih",
      type: "date",
    },
    {
      labelName: "Firma Kodu",
      type: "text",
    },
    {
      labelName: "Firma Ünvan",
      type: "text",
    },
    {
      labelName: "Fatura No",
      type: "text",
    },
    {
      labelName: "Kayıt No",
      type: "text",
    },
  ];

  return (
    <div className="w-full flex flex-column h-full surface-200 p-1">
      <ProcessButtonGroup
        kaydet={() => {
          alert("kayit islemi yapilacak");
        }}
      />
      <div className="w-full h-full flex flex-column">
        <div className="mt-1 mb-1">
          <Fis fisItems={fisItems} />
        </div>
        <div
          className="flex-1"
          style={{ backgroundColor: "rebeccapurple", color: "white" }}
        >
          kalem
        </div>
        {/* <div className="flex-1">varsa havuz</div> */}
      </div>
    </div>
  );
};

export default Giris;
