import React, { useState } from "react";
import { Modal } from "antd";

interface IProps {
  children: React.ReactNode;
  title?: string;
  open?: boolean;
  handleModal?: () => void;
}

const AntModal: React.FC<IProps> = ({
  title = "Bilgi",
  children,
  open,
  handleModal,
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
    >
      {children}
    </Modal>
  );
};

export default AntModal;
