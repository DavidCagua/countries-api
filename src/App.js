import React, { useState } from "react";
import "./App.css";
import CountryList from "./country-list";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import Header from "./header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryPage from "./country-page";

const initialState = {
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: "",
  filterByName: "",
  flag: "",
};

const store = createStore(reducer, initialState);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";
  return (
    <main className={mainClass}>
      <Provider store={store}>
        <Router>
          <Header darkMode={darkMode} setDarkmode={setDarkMode} />
          <Routes>
            <Route path="/country/:id" element={<CountryPage />} />
            <Route path="/" element={<CountryList />}></Route>
          </Routes>
        </Router>
      </Provider>
    </main>
  );
}

export default App;
