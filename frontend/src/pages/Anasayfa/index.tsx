import { Card } from "primereact/card";

const Anasayfa = () => {
  return (
    <div className="w-full h-full surface-200 p-2">
      <div className="grid col-3">
        <div className="card">
          <Card title="Malzeme Kodu" className="bg-blue-500 text-white">
            <div className="w-full flex align-items-center justify-content-between bg-blue-500">
              <span>1 adet</span>
              <span>
                <i className="pi pi-check" style={{ fontSize: "1rem" }}></i>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Anasayfa;
