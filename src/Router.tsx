import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewForm from './pages/NewForm/NewForm';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewForm />} />
      </Routes>
    </BrowserRouter>
  );
}
