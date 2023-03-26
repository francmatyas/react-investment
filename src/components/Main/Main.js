import "./Main.css";
import { useState, useEffect } from "react";
import { InvestmentUtils } from "../../scripts/InvestmentUtils";

import Graph from "./Graph/Graph";
import Table from "./Table/Table";
import InputForm from "./InputForm/InputForm";
import Card from "../Design/Card";

function Main() {
  const [startAmount, setStartAmount] = useState(100000);
  const [additionalContribution, setAdditionalContribution] = useState(1000);
  const [returnRate, setReturnRate] = useState(7);
  const [years, setYears] = useState(10);

  const [investmentUtils, setInvestmentUtils] = useState(
    new InvestmentUtils(
      startAmount,
      additionalContribution,
      returnRate,
      years * 12
    )
  );

  console.log(investmentUtils.startAmount);

  useEffect(() => {
    setInvestmentUtils(
      new InvestmentUtils(
        startAmount,
        additionalContribution,
        returnRate,
        years * 12
      )
    );
  }, [startAmount, additionalContribution, returnRate, years]);

  //onsole.table(investmentUtils.graphData);

  return (
    <main id="main">
      <Card>
        <div id="main__investment">
          <InputForm
            startAmount={startAmount}
            additionalContribution={additionalContribution}
            returnRate={returnRate}
            years={years}
            setStartAmount={setStartAmount}
            setAdditionalContribution={setAdditionalContribution}
            setReturnRate={setReturnRate}
            setYears={setYears}
          />
          <div id="investment__results">
            <h2 id="investment__title">Výsledek</h2>
            <div>
              <p className="investment__details">
                Investovaná částka:
                <span className="investment__details__number">
                  {investmentUtils.getStartAmount()}
                </span>
              </p>
              <p className="investment__details">
                Obdržený úrok:
                <span className="investment__details__number">
                  {investmentUtils.getFinalInterest()}
                </span>
              </p>
              <p className="investment__details">
                Výsledná částka:
                <span className="investment__details__number">
                  {investmentUtils.getFinalValue()}
                </span>
              </p>
            </div>
          </div>
        </div>
      </Card>

      <div id="main__results">
        <Card>
          <Graph
            interest={investmentUtils.graphData}
            investment={investmentUtils.getInvestmentData()}
          />
        </Card>

        <Card>
          <Table data={investmentUtils.getTableData()} />
        </Card>
      </div>
    </main>
  );
}

export default Main;
