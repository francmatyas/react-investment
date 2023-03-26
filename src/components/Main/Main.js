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

  let investmentUtils = new InvestmentUtils(
    startAmount,
    additionalContribution,
    returnRate,
    years * 12
  );

  useEffect(() => {
    investmentUtils = new InvestmentUtils(
      startAmount,
      additionalContribution,
      returnRate,
      years * 12
    );
  }, [startAmount, additionalContribution, returnRate, years]);

  return (
    <main id="main">
      <h1>Investiční kalkulačka</h1>

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

      <Card>
        <h2>Výsledek</h2>
        <div>
          <p className="investment__details">
            Investovaná částka:
            <span className="investment__details__number">
              {investmentUtils.getStartAmount()}
            </span>
          </p>
          <p className="investment__details">
            Obdržený úrok:
            <span className="investment__details__number">
              {investmentUtils.getFinalInterest()}
            </span>
          </p>
          <p className="investment__details">
            Výsledná částka:
            <span className="investment__details__number">
              {investmentUtils.getFinalValue()}
            </span>
          </p>
        </div>

        <Graph data={investmentUtils.graphData} />
      </Card>

      <Card>
        <Table data={investmentUtils.getTableData()} />
      </Card>
    </main>
  );
}

export default Main;
