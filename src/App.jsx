import '../src/assets/style/index.scss';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from '@reach/router';
import MainPage from './page/MainPage';
import AuthHoc from './hoc/isAuthHoc';
import OutletCommon from './component/common/outlet';
import AuthPage from './page/AuthPage';
import CatalogContainer from './container/CatalogContainer';
import LikeContainer from './container/LikeContainer';
import ErrorContainer from './container/ErrorContainer';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<OutletCommon />}>
          <Route
            path="/"
            element={<MainPage />}
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
            path="*"
            element={<ErrorContainer />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
