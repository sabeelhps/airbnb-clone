import './App.css';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Layout>
      <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/signup' element={<SignUp/>} />
       </Routes>
    </Layout>
  );
}

export default App;
