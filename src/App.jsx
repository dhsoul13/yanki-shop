import Header from './component/common/header';
import '../src/assets/style/index.scss';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from '@reach/router';
import MainPage from './page/MainPage';

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
          element={<MainPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
