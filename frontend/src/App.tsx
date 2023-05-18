import SideBar from "./components/Sidebar";
import { Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import MalzemeKarti from "./pages/Kartlar/MalzemeKarti";
import MalzemeKodlama from "./pages/Kodlama/MalzemeKodlama";
import Anasayfa from "./pages/Anasayfa";

function App() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.content}>
        <Switch>
          <Route path="/malzemekarti" component={MalzemeKarti} />
          <Route path="/malzemekodlama" component={MalzemeKodlama} />
          <Route path="/" component={Anasayfa} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
