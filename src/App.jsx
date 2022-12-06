import Header from './component/common/header';
import '../src/assets/style/index.scss';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from '@reach/router';
import MainPage from './page/MainPage';
import AuthHoc from './hoc/isAuthHoc';

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />

        <Route
          path="/ex"
          element={
            <AuthHoc>
              <>
                <MainPage></MainPage>
              </>
            </AuthHoc>
          }
        />

        <Route
          path="/auth"
          element={
            <>
              <h1>dsdsd</h1>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
