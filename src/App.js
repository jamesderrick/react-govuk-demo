import { Routes, Route } from 'react-router-dom';
import DateOfBirth from "./pages/DateOfBirth";
import Welcome from "./pages/Welcome";
import Progress from "./components/Progress";
import { TopNav } from 'govuk-react';
import Personal from './pages/Personal';
import FormComplete from './pages/FormComplete';
import './App.css';

function App() {
  return (
    <>
      <TopNav />
      <Progress />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/1" element={<Personal />} />
        <Route path="/2" element={<DateOfBirth />} />
        <Route path="/3" element={<FormComplete />} />
      </Routes>
    </>
  )
}

export default App;
