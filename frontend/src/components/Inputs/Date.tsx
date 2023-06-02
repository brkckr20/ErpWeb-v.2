import React from "react";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";

interface IDateProps {
  label?: string;
  date?: any;
  setDate?: (e: CalendarChangeEvent) => void;
}

const Date: React.FC<IDateProps> = ({ label = "Tarih", date, setDate }) => {
  return (
    <div className="flex p-inputgroup">
      <span className="p-inputgroup-addon w-12rem justify-content-start">
        {label}
      </span>
      <Calendar value={date} onChange={setDate} />
    </div>
  );
};

export default Date;
