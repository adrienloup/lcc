import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AverageTimePage from './pages/Question/AverageTimePage';
import ImpactPage from './pages/Impact/ImpactPage';
import HomePage from './pages/Home/HomePage';
import MobileVisitorsPage from './pages/Question/MobileVisitorsPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import PagesViewedPage from './pages/Question/PagesViewedPage';
import ProfilePage from './pages/Profile/ProfilePage';
import RawMaterialsPage from './pages/Documentation/RawMaterials/RawMaterialsPage';
import ReferenceModelsPage from './pages/Documentation/ReferenceModels/ReferenceModelsPage';
import ResourcesPage from './pages/Documentation/Resources/ResourcesPage';
import ServersLocatedPage from './pages/Question/ServersLocatedPage';
import ServersUsedPage from './pages/Question/ServersUsedPage';
import VisitorsLocatedPage from './pages/Question/VisitorsLocatedPage';
import VisitorsPerMonthPage from './pages/Question/VisitorsPerMonthPage';
import WebsitePage from './pages/Question/WebsitePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/lcc/calculator/average-time"
          element={<AverageTimePage />}
        />
        <Route
          path="/lcc/calculator/ecological-impact"
          element={<ImpactPage />}
        />
        <Route path="/lcc" element={<HomePage />} />
        <Route
          path="/lcc/calculator/mobile-visitors"
          element={<MobileVisitorsPage />}
        />
        <Route path="/lcc/*" element={<NotFoundPage />} />
        <Route
          path="/lcc/calculator/pages-viewed"
          element={<PagesViewedPage />}
        />
        <Route
          path="/lcc/calculator/mobile-visitors"
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
          path="/lcc/calculator/servers-located"
          element={<ServersLocatedPage />}
        />
        <Route
          path="/lcc/calculator/servers-used"
          element={<ServersUsedPage />}
        />
        <Route
          path="/lcc/calculator/visitors-located"
          element={<VisitorsLocatedPage />}
        />
        <Route
          path="/lcc/calculator/visitors-per-month"
          element={<VisitorsPerMonthPage />}
        />
        <Route path="/lcc/calculator/website" element={<WebsitePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
