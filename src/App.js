import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaPreferiti from "./components/ListaPreferiti";
import { Provider } from "react-redux";
import store from "./Redux/Companies/store";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Provider store={store}><ListaPreferiti/></Provider>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
