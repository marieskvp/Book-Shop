import { useState } from 'react'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import './App.css'
import { Books } from './pages/Books'
import { Update } from './pages/Update'
import { Add } from './pages/Add'
import { createContext ,useContext} from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [sweetalert,setSweetAlert] = useState(false)
    const increment = () => {
        setSweetAlert(!sweetalert);
    };
    return (
        <GlobalContext.Provider value={{ sweetalert, increment }}>
            {children}
        </GlobalContext.Provider>
    );
};

function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/update/:id' element={<Update/>} />
        </Routes>
      </BrowserRouter>
      </GlobalProvider>
    </div>
  )
}

export default App
