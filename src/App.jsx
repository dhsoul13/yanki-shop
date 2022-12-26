import '../src/assets/style/index.scss';
import { Route, Routes } from 'react-router-dom';
import AuthHoc from './hoc/isAuthHoc';
import OutletCommon from './component/common/outlet';
import AuthPage from './page/AuthPage';
import CatalogContainer from './container/CatalogContainer';
import LikeContainer from './container/LikeContainer';
import ErrorContainer from './container/ErrorContainer';
import ContactContainer from './container/ContactContainer';
import MainContainer from './container/MainContainer';
import AboutContainer from './container/AboutContainer';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<OutletCommon />}>
          <Route
            path="/"
            element={<MainContainer />}
          />

          <Route
            path="/auth"
            element={<AuthPage />}
          />
          <Route
            path="/catalog"
            element={<CatalogContainer />}
          />
          <Route
            path="/like"
            element={<LikeContainer />}
          />
          <Route
            path="/contact"
            element={<ContactContainer />}
          />
          <Route
            path="/about"
            element={<AboutContainer />}
          />
          <Route
            path="*"
            element={<ErrorContainer />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
