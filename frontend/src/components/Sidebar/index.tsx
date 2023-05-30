import { PanelMenu } from "primereact/panelmenu";
import { MenuItem } from "primereact/menuitem";
import styles from "./sidebar.module.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  const items: MenuItem[] = [
    {
      label: "Kodlama",
      icon: "pi pi-fw pi-code",
      items: [
        {
          template: () => <Link to="/malzemekodlama">Malzeme Kodlama</Link>,
        },
        {
          template: () => <Link to="/birimkodlama">Birim Kodlama</Link>,
        },
      ],
    },
    {
      label: "Kartlar",
      icon: "pi pi-fw pi-building",
      items: [
        {
          template: () => <Link to="/firmakarti">Firma Kartı</Link>,
        },
      ],
    },
    {
      label: "Sarf Malz. Depo",
      icon: "pi pi-fw pi-th-large",
      items: [
        {
          template: () => <Link to="/sarfmalzemegiris">Sarf Malz. Giriş</Link>,
        },
      ],
    },
  ];

  return (
    <div className={styles.sidebar}>
      <div>
        <h1 className={styles.logo}>
          <Link to="/">Portal v.2.0</Link>
        </h1>
      </div>
      <div className="card flex justify-content-center p-1 h-auto">
        <PanelMenu model={items} className="md:w-25rem w-full" />
      </div>
    </div>
  );
};

export default SideBar;
