import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import PetsForm from './pets/Pets-form';
import PetsList from './pets/Pets-list';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PetsForm />} />
          <Route path="list" element={<PetsList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App