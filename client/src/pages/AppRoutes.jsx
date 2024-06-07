import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import About from "./About/About";

import HoaxCreateForm from "./HoaxCreateForm/HoaxCreateForm";
import HoaxUpdateForm from "./HoaxUpdateForm/HoaxUpdateForm";
import HoaxView from "./HoaxView/HoaxView";
import HoaxList from "./HoaxList/HoaxList";
import CreatedHoax from "./HoaxCreateForm/CreatedHoax";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<HoaxCreateForm />} />
          <Route path="/updatehoax/:id" element={<HoaxUpdateForm />} />
          <Route path="/hoax/:id" element={<HoaxView />} />
          <Route path="/" element={<HoaxList />} />
          <Route path="/createdhoax/:id" element={<CreatedHoax />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
