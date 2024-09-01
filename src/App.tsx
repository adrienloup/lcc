import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AccessibilityPage from './pages/Documentation/AccessibilityPage';
import AverageTimePage from './pages/Question/AverageTimePage';
import EcologicalImpactPage from './pages/EcologicalImpact/EcologicalImpactPage';
import HomePage from './pages/Home/HomePage';
import MobileVisitorsPage from './pages/Question/MobileVisitorsPage';
import PagesViewedPage from './pages/Question/PagesViewedPage';
import ProfilePage from './pages/Profile/ProfilePage';
import RawMaterialsPage from './pages/Documentation/RawMaterialsPage';
import ReferenceModelsPage from './pages/Documentation/ReferenceModelsPage';
import ResourcesPage from './pages/Documentation/ResourcesPage';
import ServersLocatedPage from './pages/Question/ServersLocatedPage';
import ServersUsedPage from './pages/Question/ServersUsedPage';
import VisitorsLocatedPage from './pages/Question/VisitorsLocatedPage';
import VisitorsPerMonthPage from './pages/Question/VisitorsPerMonthPage';
import WebsitePage from './pages/Question/WebsitePage';

function App() {
  useTranslation();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/lcc/documentation/accessibility"
          element={<AccessibilityPage />}
        />
        <Route
          path="/lcc/question/average-time"
          element={<AverageTimePage />}
        />
        <Route
          path="/lcc/ecological-impact"
          element={<EcologicalImpactPage />}
        />
        <Route path="/lcc" element={<HomePage />} />
        <Route path="/lcc/*" element={<HomePage />} />
        <Route
          path="/lcc/question/mobile-visitors"
          element={<MobileVisitorsPage />}
        />
        <Route
          path="/lcc/question/pages-viewed"
          element={<PagesViewedPage />}
        />
        <Route
          path="/lcc/question/mobile-visitors"
          element={<MobileVisitorsPage />}
        />
        <Route path="/lcc/profile" element={<ProfilePage />} />
        <Route
          path="/lcc/documentation/reference-models/raw-materials"
          element={<RawMaterialsPage />}
        />
        <Route
          path="/lcc/documentation/reference-models"
          element={<ReferenceModelsPage />}
        />
        <Route
          path="/lcc/documentation/resources"
          element={<ResourcesPage />}
        />
        <Route
          path="/lcc/question/servers-located"
          element={<ServersLocatedPage />}
        />
        <Route
          path="/lcc/question/servers-used"
          element={<ServersUsedPage />}
        />
        <Route
          path="/lcc/question/visitors-located"
          element={<VisitorsLocatedPage />}
        />
        <Route
          path="/lcc/question/visitors-per-month"
          element={<VisitorsPerMonthPage />}
        />
        <Route path="/lcc/question/website" element={<WebsitePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
