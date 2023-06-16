import React from "react";
import { Modal } from "antd";

interface IProps {
  children: React.ReactNode;
  title?: string;
  open?: boolean;
  handleModal?: () => void;
  list?: any[];
}

const AntModal: React.FC<IProps> = ({
  title = "Bilgi",
  children,
  open,
  handleModal,
  list,
}) => {
  return (
    <Modal
      title={title}
      centered
      open={open}
      onOk={handleModal}
      okText="Tamam"
      onCancel={handleModal}
      cancelText="İptal"
      width={720}
    >
      {children}
    </Modal>
  );
};

export default AntModal;
