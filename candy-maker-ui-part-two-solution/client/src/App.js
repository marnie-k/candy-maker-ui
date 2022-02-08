import "./App.css";
import Search from './components/search'
import ManProd from './components/manProd'
import ErrorMsg from './components/errorMsg'

function App() {
  return (
    <div className="app">
     <BrowserRouter>
     <Routes>
       <Route path= '/manufacturers' element={<Search/>} />
       <Route path= '/products/:manufacturerId' element={< ManProd/>} />
       <Route path= '/*' element={< ErrorMsg/>} />     
      </Routes>

     </BrowserRouter>
    </div>  
  );
}

export default App;
