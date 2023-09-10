import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {

    return (
        <div className="App">
            { }
            <NavBar/>        
            <ItemListContainer greeting='¡Bienvenidos!' titulo='Productos Destacados:'/>

        </div>

    );
}





export default App;
