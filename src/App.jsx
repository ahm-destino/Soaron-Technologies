/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SummerCampPage } from "./pages/SummerCampPage";
import { CorporateSolutionsPage } from "./pages/CorporateSolutionsPage";
import { TechAcademyPage } from "./pages/TechAcademyPage";
import { Web3AdvocacyPage } from "./pages/Web3AdvocacyPage";
import { CertificationsPage } from "./pages/CertificationsPage";
import { GetStartedPage } from "./pages/GetStartedPage";
import { AboutPage } from "./pages/AboutPage";
import { ScrollToTop } from "./components/layout/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/summer-camp" element={<SummerCampPage />} />
          <Route path="/corporate-solutions" element={<CorporateSolutionsPage />} />
          <Route path="/academy" element={<TechAcademyPage />} />
          <Route path="/web3-advocacy" element={<Web3AdvocacyPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
