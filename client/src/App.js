import './App.css';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Routes>
          <Route path='/home' element={<Home/>} />
       </Routes>
    </Layout>
  );
}

export default App;
