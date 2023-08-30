import logo from "./logo.svg";
import "./App.css";
// import Sayac from "./components/Sayac";
import React, {  } from "react";

function App() {
  // const [sayaclar, setSayaclar] = useState([]);
  // useEffect(() => {
  //   const fetchSomething = async () => {
  //     const res = await fetch("http://localhost:5000/sayaclar");
  //     const data = await res.json();
  //     setSayaclar(data);
  //   };

  //   fetchSomething();
  // }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>

      {/* <div className="container">
        {sayaclar.map((sayac) => (
          <Sayac baslangic={sayac.startVal} key={sayac.id} />
        ))}
      </div> */}
    </>
  );
}

export default App;
