import './App.css'
import Layout from './components/Layout'
import Report from './components/Report';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CardReportList from './components/CardReportList';
function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<CardReportList />} />
            <Route path='/register' element={<Register />} />
            <Route path='/reportList' element={<CardReportList />} />
            <Route path='/auth' element={<Login />} />
            <Route path='/report/:id' element={<Report />} />
          </Routes>
        </Layout>
      </BrowserRouter>

    </div>
  )
}

export default App
