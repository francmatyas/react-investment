import "./Main.css";
import { useState } from "react";
import { InvestmentUtils } from "../../scripts/InvestmentUtils";

import Graph from "./Graph/Graph";
import Table from "./Table/Table";
import Card from "../Design/Card";

function Main() {
  const [startAmount, setStartAmount] = useState(0);
  const [additionalContribution, setAdditionalContribution] = useState(0);
  const [returnRate, setReturnRate] = useState(0);

  const investmentUtils = new InvestmentUtils(10000, 500, 7, 120);

  const investmentData = investmentUtils.resultInvestment;
  console.table(investmentData);

  return (
    <main id="main">
      <h1>Investiční kalkulačka</h1>

      <Card>
        <div id="investment__card">
          <div className="card__col">
            <label htmlFor="start-amount" className="investment__label">
              Počáteční jednorázová investice
            </label>
            <input
              id="start-amount"
              className="investment__input"
              type="number"
              min="0"
              required
              value={startAmount}
              onChange={(event) => setStartAmount(event.target.value)}
            />
          </div>

          <div className="card__col">
            <label
              htmlFor="additional-contribution"
              className="investment__label"
            >
              Pravidelná měsíční investice
            </label>
            <input
              id="additional-contribution"
              className="investment__input"
              type="number"
              min="0"
              value={additionalContribution}
              onChange={(event) =>
                setAdditionalContribution(event.target.value)
              }
            />
          </div>

          <div className="card__col">
            <label htmlFor="return-rate" className="investment__label">
              Předpokládaná roční úroková sazba (%)
            </label>
            <input
              id="return-rate"
              className="investment__input"
              type="number"
              min="0"
              required
              value={returnRate}
              onChange={(event) => setReturnRate(event.target.value)}
            />
          </div>

          <div className="card__row">
            <button className="investment__button">Vypočítat</button>
            <button className="investment__button">Resetovat</button>
          </div>
        </div>
      </Card>

      <Card>
        <h2>Výsledek</h2>
        <div>
          <p className="investment__details">
            Investovaná částka:
            <span className="investment__details__number">{investmentUtils.getStartAmount()}</span>
          </p>
          <p className="investment__details">
            Obdržený úrok: <span className="investment__details__number">{investmentUtils.getFinalInterest()}</span>
          </p>
          <p className="investment__details">
            Výsledná částka:
            <span className="investment__details__number">{investmentUtils.getFinalValue()}</span>
          </p>
        </div>

        <Graph data={investmentData} />
        <Table />
      </Card>
    </main>
  );
}

export default Main;
