import "./Main.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import InputForm from "./InputForm/InputForm";
import Tutorial from "./Tutorial/Tutorial";
import ResultDisplay from "./ResultDisplay/ResultDisplay";

function Main() {
  const [investmentUtils, setInvestmentUtils] = useState();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <main id="main">
      <div className="main__row">
        <InputForm onInputChange={(value) => setInvestmentUtils(value)} />
        {(!isMobile && !isTablet) && <Tutorial />}
      </div>
      <ResultDisplay data={investmentUtils} />
      {(isMobile || isTablet) && <Tutorial />}
    </main>
  );
}

export default Main;
