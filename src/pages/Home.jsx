import { Link } from "react-router-dom";
import "../styles/pages/Home.css";

function Home() {
  return (
    <div className="home">

      <div className="home-container">
        
        <div className="home-header">
          <p>Bienvenidos a nuestra tienda</p>
        </div>

        <div className="home-content">
          <h2>Productos de la mejor calidad del mercado y con los mejores precios</h2>
        </div>

      </div>

    </div>
  );
}

export default Home;