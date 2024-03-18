import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserRouter from './pages/users/UserRouter';
import PostRouter from './pages/posts/PostRouter';
import Error404 from './_utils/Error404';
import PublicRouter from './pages/public/PublicRouter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
        <Route path="/users/*" element={<UserRouter />} />
        <Route path="/posts/*" element={<PostRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
