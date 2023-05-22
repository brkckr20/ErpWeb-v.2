import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";
import { Provider } from "react-redux";
import { store } from "./contexts/store.ts";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider authType="localstorage" authName="_auth">
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AuthProvider>
);
