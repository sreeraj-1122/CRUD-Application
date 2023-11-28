import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CrudHome from './components/CrudHome';
import Adddata from './components/Adddata';
import EditData from './components/EditData';
import { createContext, useState } from 'react';
import { studentData } from './components/data';
import ViewData from './components/ViewData';
import DeleteData from './components/DeleteData';

export const NewContext = createContext()

function App() {
  const [data, setData] = useState(studentData);

  return (
    <div className="App">
     
      <NewContext.Provider value={{data,setData}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CrudHome />} />
          <Route path='/adddata' element={<Adddata />} />
          <Route path='/editdata/:index' element={<EditData />} />
          <Route path='/viewdata/:userid' element={<ViewData />} />
          <Route path='/deletedata/:index' element={<DeleteData/>}/>

        </Routes>

      </BrowserRouter>

      </NewContext.Provider>

    </div>
  );
}

export default App;
