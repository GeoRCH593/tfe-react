import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
  
      <Route path="*" element={<div>404</div>} />
    </Routes>
</BrowserRouter>
);

export default Router;