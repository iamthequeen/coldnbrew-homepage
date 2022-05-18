import './App.css';
import BlogPosts from './components/main-sections/BlogPosts';
import Footer from './components/main-sections/Footer';
import Header from './components/main-sections/Header';
import Navbar from './components/main-sections/Navbar';
import ProductCollection from './components/main-sections/ProductCollection';
import ProductSpotlight from './components/main-sections/ProductSpotlight';
import RowOfLogos from './components/main-sections/RowOfLogos';
import SpecialFeatsSection from './components/main-sections/SpecialFeatsSection';
import Circles from './components/small-sections/icon-shapes/Circles';
import SquareInCircle from './components/small-sections/icon-shapes/SquareInCircle';
import SquareStack from './components/small-sections/icon-shapes/SquareStack';
import ScrollContainer from './components/small-sections/ScrollContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>

        <main>
          <ScrollContainer/>
          <SpecialFeatsSection>
            <Circles/>
            <SquareInCircle/>
            <SquareStack/>
          </SpecialFeatsSection>
          
          <ProductCollection/>
          <ProductSpotlight/>
          <hr/>
          <RowOfLogos/>
          <BlogPosts/>
          <Footer/>

        </main>

    </div>
  );
}

export default App;
