import "./App.css";
import "./style.css";
function App() {
  return (
    <>
      <div className="container">
        <header className="header">
          <a href="#" className="logo">
            Tourism.air
          </a>

          <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Selling</a>
            <a href="#">Likes</a>
            <a href="#">Contact</a>
          </nav>
        </header>
        <div className="content">
          <h1>
            BEST PLACES TO FIND AND EXPLORE <br />
            <span className="that">THAT</span> ALL YOU NEED
          </h1>
          <p>
           <span className="we">We</span>  know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <div>
            <input
              type="text"
              placeholder="Free seats 💺 just buy it 🤩"
              className="set"
            />
            <button className="batto">Leran More</button>
          </div>
        </div>
        <div className="uycha">
          <div className="uycha1">
            <span>✈️</span>
            <br />
            <h3>Dubai</h3>
            <p>• Aquaventure WaterPark</p>
            <p>• Hatta Wadi Hub</p>
            <p>• AquaFun</p>
            <p>• Ibn Battuta Mall</p>
          </div>
          <div className="uycha2">
            <span>✈️</span>
            <br />
            <h3>Istanbul</h3>
            <p>• Sultanahmet</p>
            <p>• Eminonu</p>
            <p>• Bayaglu</p>
            <p>• Karakoy</p>
          </div>
          <div className="uycha3">
            <span>✈️</span>
            <br />
            <h3>Poland</h3>
            <p>• Krakow</p>
            <p>• Warsaw</p>
            <p>• Gdansk</p>
            <p>• Wraclow</p>
            <div className="uycha4">
              <span>✈️</span>
              <br />
              <h3>Egypt</h3>
              <p>• Kair</p>
              <p>• Luksor</p>
              <p>• Sharm- esh-Shaykh</p>
              <p>• Aleksandrya</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

