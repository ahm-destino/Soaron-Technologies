/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SummerCampPage } from "./pages/SummerCampPage";
import { SummerCampPopup } from "./components/sections/SummerCampPopup";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
        <SummerCampPopup />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/summer-camp" element={<SummerCampPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
