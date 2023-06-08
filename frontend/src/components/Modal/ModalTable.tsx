import React from "react";
import { Table } from "antd";

interface IProps {
  columns?: any[];
  data?: any[];
}

const ModalTable: React.FC<IProps> = ({ columns, data }) => {
  return (
    <>
      <div>Firma Adı :</div>
      <Table columns={columns} dataSource={data} size="small" />
    </>
  );
};

export default ModalTable;
