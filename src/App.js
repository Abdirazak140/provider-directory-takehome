import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProviderDirectory } from './pages/provider_directory';
import { ProviderProfile } from './pages/provider_profile';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProviderDirectory/>}/>
        <Route path='/provider/:id' element={<ProviderProfile/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
