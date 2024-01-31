import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingForm from "./Component/BookingForm";
import TvShow from "./Component/TvShow";
import ShowDetails from "./Component/ShowDetails";
import ShowList from "./Component/Showlist";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TvShow />} />
          <Route path="/showlist" element={<ShowList />} />
          <Route path="/showdetails" element={<ShowDetails />} />
          <Route path="/booking" element={<BookingForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
