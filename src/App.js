import './App.css';
import Header from './components/main-sections/Header';
import Navbar from './components/main-sections/Navbar';
import SpecialFeatsSection from './components/main-sections/SpecialFeatsSection';
import Circles from './components/small-sections/icon-shapes/Circles';
import SquareInCircle from './components/small-sections/icon-shapes/SquareInCircle';
import SquareStack from './components/small-sections/icon-shapes/SquareStack';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>

        <main>

          <SpecialFeatsSection>
            <Circles/>
            <SquareInCircle/>
            <SquareStack/>
          </SpecialFeatsSection>
          
          

        </main>

    </div>
  );
}

export default App;
