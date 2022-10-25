import Home from '../src/pages/Home'
import ScrapbookForm from '../src/pages/ScrapbookForm'
import PeopleList from '../src/pages/PeopleList'
import UpdatePeopleCard from '../src/pages/UpdatePeopleCard'
import Sidebar from './components/Sidebar'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<ScrapbookForm />} />
        <Route path="/people" element={<PeopleList />} />
        <Route path="/update" element={<UpdatePeopleCard />} />
      </Routes>
    </>
  );
}

export default App;
