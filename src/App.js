import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

    return (
        <div className="App">
            { }
            <NavBar />
            <ItemListContainer greeting='¡Bienvenidos!' titulo='Productos Disponibles: 6' />
            <ItemDetailContainer />
        </div>

    );
}





export default App;
