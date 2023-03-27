import "./ResultDisplay.css";
import { useState, useEffect } from "react";

import noDataSvg from "../../../assets/svg/empty.svg";

import Graph from "../Graph/Graph";
import Table from "../Table/Table";
import Card from "../../Design/Card";

function ResultDisplay(props) {
  const { data } = props;
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    if (data) {
      if (data.startAmount === 0 || data.returnRate === 0) {
        setShowData(false);
      } else {
        setShowData(true);
      }
    } else {
      setShowData(false);
    }
  }, [data]);

  if (!showData) {
    return (
      <Card>
        <div id="result-display__error">
          <img src={noDataSvg} alt="No data" height={150} />
          <p>Nebyla zadána žádná investice</p>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div id="result-display">
        <div className="result-display__data">
          <h2 id="result-display__title">Výsledek</h2>
          <div>
            <p className="result-display__details">
              Investovaná částka:
              <span className="result-display__details__number">
                {data?.getStartAmount()}
              </span>
            </p>
            <p className="result-display__details">
              Obdržený úrok:
              <span className="result-display__details__number">
                {showData ? data?.getFinalInterest() : "0 Kč"}
              </span>
            </p>
            <p className="result-display__details">
              Výsledná částka:
              <span className="result-display__details__number">
                {showData ? data?.getFinalValue() : "0 Kč"}
              </span>
            </p>
          </div>
        </div>

        <Graph
          interest={data?.graphData}
          investment={data?.getInvestmentData()}
        />

        <Table data={data?.getTableData()} />
      </div>
    </Card>
  );
}

export default ResultDisplay;
