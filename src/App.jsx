import '../src/assets/style/index.scss';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from '@reach/router';
import MainPage from './page/MainPage';
import AuthHoc from './hoc/isAuthHoc';
import OutletCommon from './component/common/outlet';

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
            element={
              <div>
                <h1>sdasdsdjskdskdsjkd</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
