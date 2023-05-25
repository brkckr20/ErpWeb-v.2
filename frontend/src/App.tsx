import SideBar from "./components/Sidebar";
import { Switch, Route, useLocation } from "react-router-dom";
import Protected from "./pages/Protected";

import styles from "./App.module.css";
import MalzemeKodlama from "./pages/Kodlama/MalzemeKodlama";
import Anasayfa from "./pages/Anasayfa";
import Giris from "./pages/Giris";
import BirimKodlama from "./pages/Kodlama/BirimKodlama";
import FirmaKarti from "./pages/Kartlar/FirmaKarti";

function App() {
  const { pathname } = useLocation();
  return (
    <div className={styles.container}>
      {pathname !== "/giris" && <SideBar />}
      <div className={styles.content}>
        <Switch>
          <Route exact path="/giris" component={Giris} />
          <Protected exact path="/malzemekodlama" component={MalzemeKodlama} />
          <Protected exact path="/birimkodlama" component={BirimKodlama} />
          <Protected exact path="/firmakarti" component={FirmaKarti} />
          <Protected exact path="/" component={Anasayfa} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
