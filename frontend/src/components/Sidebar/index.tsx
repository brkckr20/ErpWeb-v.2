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
          label: "Malzeme Kodlama",
          icon: "pi pi-fw pi-plus",
          template: () => <Link to="/malzemekodlama">Malzeme Kodlama</Link>,
        },
        {
          label: "Kumaş Kodlama",
          items: [
            {
              label: "Bookmark",
              icon: "pi pi-fw pi-bookmark",
              template: () => <Link to="/malzemekodlama">Kumaş Adı</Link>,
            },
            {
              label: "Bookmark",
              icon: "pi pi-fw pi-bookmark",
              template: () => <Link to="/malzemekodlama">Kumaş Kartı</Link>,
            },
            {
              label: "Bookmark",
              icon: "pi pi-fw pi-bookmark",
              template: () => <Link to="/malzemekodlama">Kumaş Cinsi</Link>,
            },
            {
              label: "Bookmark",
              icon: "pi pi-fw pi-bookmark",
              template: () => (
                <Link to="/malzemekodlama">Kumaş Desenlerinin Kodlanması</Link>
              ),
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className={styles.sidebar}>
      <div>
        <h1 className={styles.logo}>
          <Link to="/">Portal</Link>
        </h1>
      </div>
      <div className="card flex justify-content-center p-1 h-auto">
        <PanelMenu model={items} className="md:w-25rem w-full" />
      </div>
    </div>
  );
};

export default SideBar;
