import ProcessButtonGroup from "../../components/ProcessButtonGroup";

const Giris = () => {
  const handleSave = () => {
    alert();
  };
  return (
    <div className="w-full h-full surface-200 p-1">
      <ProcessButtonGroup kaydet={handleSave} />
    </div>
  );
};

export default Giris;
