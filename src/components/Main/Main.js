import "./Main.css";
import { useState } from "react";

import InputForm from "./InputForm/InputForm";
import Tutorial from "./Tutorial/Tutorial";
import ResultDisplay from "./ResultDisplay/ResultDisplay";

function Main() {
  const [investmentUtils, setInvestmentUtils] = useState();

  return (
    <main id="main">
      <div className="main__row">
        <InputForm onInputChange={(value) => setInvestmentUtils(value)} />
        <Tutorial />
      </div>
      <ResultDisplay data={investmentUtils} />
    </main>
  );
}

export default Main;
