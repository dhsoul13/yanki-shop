import '../src/assets/style/index.scss';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from '@reach/router';
import MainPage from './page/MainPage';
import AuthHoc from './hoc/isAuthHoc';
import OutletCommon from './component/common/outlet';
import AuthPage from './page/AuthPage';

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
        </Route>
      </Routes>
    </>
  );
};

export default App;
