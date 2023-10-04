import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer greeting='¡Bienvenidos!' titulo='Productos Disponibles: 6' />}  />
                <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            </Routes>
        </BrowserRouter>

    );
}





export default App;
