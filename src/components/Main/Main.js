import "./Main.css";
import { useState, useEffect } from "react";

import Graph from "./Graph/Graph";
import Table from "./Table/Table";
import InputForm from "./InputForm/InputForm";
import Card from "../Design/Card";
import Tutorial from "./Tutorial/Tutorial";

function Main() {
  const [investmentUtils, setInvestmentUtils] = useState();
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    if (investmentUtils) {
      if (
        investmentUtils.startAmount === 0 ||
        investmentUtils.returnRate === 0
      ) {
        setShowData(false);
      } else {
        setShowData(true);
      }
    } else {
      setShowData(false);
    }
  }, [investmentUtils]);

  return (
    <main id="main">
      <Card>
        <div id="main__investment">
          <InputForm
            onInputChange={(value) => setInvestmentUtils(value)}
          />
          <div id="investment__results">
            <h2 id="investment__title">Výsledek</h2>
            <div>
              <p className="investment__details">
                Investovaná částka:
                <span className="investment__details__number">
                  {investmentUtils?.getStartAmount()}
                </span>
              </p>
              <p className="investment__details">
                Obdržený úrok:
                <span className="investment__details__number">
                  {showData ? investmentUtils?.getFinalInterest() : "0 Kč"}
                </span>
              </p>
              <p className="investment__details">
                Výsledná částka:
                <span className="investment__details__number">
                  {showData ? investmentUtils?.getFinalValue() : "0 Kč"}
                </span>
              </p>
            </div>
          </div>
          <Tutorial />
        </div>
      </Card>

      <div className="main__row">
        <Graph
          show={showData}
          interest={investmentUtils?.graphData}
          investment={investmentUtils?.getInvestmentData()}
        />

        <Table data={investmentUtils?.getTableData()} show={showData} />
      </div>
    </main>
  );
}

export default Main;
