import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

const Sayac = ({ baslangic }) => {
  const [sayacDegeri, setSayacDegeri] = useState(0);

  const Artir = () => {
    setSayacDegeri(sayacDegeri + 1);
  };

useEffect(() => {
  const id = setInterval(() => {
    console.log(new Date().toTimeString());
  }, 1000);
  return () => {
    clearInterval(id);
  };
}, []);

  return (
    <div className="sayac">
      <h2>{baslangic + sayacDegeri}</h2>
      <button className="btn" onClick={Artir}>
        +
      </button>
    </div>
  );
};

Sayac.defaultProps = { baslangic: 0 };
Sayac.propTypes = {
  baslangic: PropTypes.number,
};
export default Sayac;
