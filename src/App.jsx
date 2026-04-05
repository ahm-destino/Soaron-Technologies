/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SummerCampPage } from "./pages/SummerCampPage";
import { CorporateSolutionsPage } from "./pages/CorporateSolutionsPage";
import { TechAcademyPage } from "./pages/TechAcademyPage";
import { Web3AdvocacyPage } from "./pages/Web3AdvocacyPage";
import { CertificationsPage } from "./pages/CertificationsPage";
import { GetStartedPage } from "./pages/GetStartedPage";
import { SummerCampPopup } from "./components/sections/SummerCampPopup";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
        <SummerCampPopup />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/summer-camp" element={<SummerCampPage />} />
          <Route path="/corporate-solutions" element={<CorporateSolutionsPage />} />
          <Route path="/academy" element={<TechAcademyPage />} />
          <Route path="/web3-advocacy" element={<Web3AdvocacyPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
