import { Route, Routes } from "react-router-dom";
import { FirstPage } from "./pages/FirstPage/FirstPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { SecondPage } from "./pages/SecondPage/SecondPage.jsx";
import { Layout } from "./pages/Layout/Layout";


function App() {
  return (
<>
<Routes>
      <Route path="/" element={<Layout />}>
        <Route path="main" element={<MainPage />} />
        <Route path="first" element={<FirstPage />} />
        <Route path="second" element={<SecondPage />} />
      </Route>
    </Routes>
</>
  );
}

export default App;
