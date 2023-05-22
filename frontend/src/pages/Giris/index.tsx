import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useAppDispatch, useAppSelector } from "../../contexts/store";
import { login } from "../../contexts/auth/authSlice";

const Giris = () => {
  const dispactch = useAppDispatch();

  const auth = useAppSelector((state) => state.auth);

  const [formValues, setFormValues] = useState({
    kullaniciAdi: "ADMIN",
    sifre: "",
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await dispactch(login(formValues));
  };

  return (
    <React.Fragment>
      <div className="w-full h-full bg-gray-300 flex align-items-center justify-content-center">
        <form className="w-2" onSubmit={handleSubmit}>
          <h1 className="text-center mb-2">Giriş Yap</h1>
          <div>
            <InputText
              type="text"
              className="p-inputtext-sm w-full mb-2"
              placeholder="Kullanıcı Adı"
              value={formValues.kullaniciAdi}
              onChange={(e) =>
                setFormValues({ ...formValues, kullaniciAdi: e.target.value })
              }
            />
          </div>
          <div>
            <InputText
              type="password"
              className="p-inputtext-sm w-full mb-2"
              placeholder="Şifre"
              value={formValues.sifre}
              onChange={(e) =>
                setFormValues({ ...formValues, sifre: e.target.value })
              }
            />
          </div>
          <div className="text-center">
            <Button
              label="Giriş Yap"
              icon="pi pi-check"
              size="small"
              type="submit"
            />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Giris;
