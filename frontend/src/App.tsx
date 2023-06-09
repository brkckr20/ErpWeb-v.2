import SideBar from "./components/Sidebar";
import { Switch, Route, useLocation } from "react-router-dom";
import Protected from "./pages/Protected";

import styles from "./App.module.css";
import MalzemeKodlama from "./pages/Kodlama/MalzemeKodlama";
import Anasayfa from "./pages/Anasayfa";
import Giris from "./pages/Giris";
import BirimKodlama from "./pages/Kodlama/BirimKodlama";
import FirmaKarti from "./pages/Kartlar/FirmaKarti";
import SarfMalzemeGiris from "./pages/SarfMalzeme/Giris";

import { useEffect } from "react";

import { useAppSelector } from "./contexts/store";

function App() {
  const menuList = useAppSelector((state) => state.openMenu);

  useEffect(() => {
    const token = localStorage.getItem("token"); // localStorage'dan token'ı al

    // Tarayıcı yenilendiyse ve token varsa, token'ı tekrar localStorage'a ekle
    if (performance.navigation.type === 1 && token) {
      localStorage.setItem("token", token);
    }
  }, []);
  const { pathname } = useLocation();
  return (
    <div className={styles.container}>
      {pathname !== "/giris" && <SideBar />}
      <div className={styles.content}>
        <Switch>
          <Route exact path="/giris" component={Giris} />
          <Protected
            exact
            path="/sarfmalzemegiris"
            component={SarfMalzemeGiris}
          />
          <Protected exact path="/malzemekodlama" component={MalzemeKodlama} />
          <Protected exact path="/birimkodlama" component={BirimKodlama} />
          <Protected exact path="/firmakarti" component={FirmaKarti} />
          <Protected exact path="/" component={Anasayfa} />
        </Switch>
        {/* <div
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            width: "calc(100% - 250.5px)",
            color: "white",
            padding: "0 4px",
          }}
        >
          {menuList.length > 0 &&
            menuList.map((item) => (
              <div
                key={item.key}
                className="inline-block bg-black-alpha-80 p-1 m-1 border-round"
              >
                <label className="mx-1">{item.name}</label>
                <button className="mx-1 px-1 cursor-pointer">X</button>
              </div>
            ))}
        </div> */}
      </div>
    </div>
  );
}

export default App;
