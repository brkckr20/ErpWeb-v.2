import React, { useState } from "react";
import { Calendar } from "primereact/calendar";

interface IDateProps {
  label?: string;
}

const Date: React.FC<IDateProps> = ({ label = "Tarih" }) => {
  const [date, setDate] = useState(null);

  return (
    <div className="flex p-inputgroup">
      <span className="p-inputgroup-addon w-12rem justify-content-start">
        {label}
      </span>
      <Calendar value={date} onChange={(e: any) => setDate(e.value)} />
    </div>
  );
};

export default Date;
