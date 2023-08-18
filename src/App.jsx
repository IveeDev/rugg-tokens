import "./App.scss";

import pepe from "../src/assets/img/RUGG.png";
import Form from "./components/form/Form";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="app">
      <div className="container">
        <NavBar />

        <div className="intro">
          <div className="container">
            <img src={pepe} alt="pepe" />

            <h1>RUGG TOKENS</h1>
          </div>
        </div>

        {/* Form */}
        <Form />

        <div className="referal">
          <div className="container">
            <button className="btn">Claim Airdrop</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
