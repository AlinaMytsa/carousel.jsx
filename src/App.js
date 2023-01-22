import Carousel from "./components/Carousel";

function App() {
  const images = [
    'file:///Users/alinamytsa/Downloads/lights-g2a9430fb5_1920.jpg',
    'file:///Users/alinamytsa/Downloads/sand-dunes-g65183a523_1920.jpg',
    'file:///Users/alinamytsa/Downloads/beach-gb35fe8bb5_1920.jpg'
  ]
  return (
   <Carousel images={images}/>
  );
}

export default App;
