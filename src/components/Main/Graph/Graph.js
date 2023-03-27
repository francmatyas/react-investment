import "./Graph.css";
import { VictoryAxis, VictoryChart, VictoryLine, VictoryLegend } from "victory";

function Graph(props) {
  const { interest, investment } = props;

  return (
    <div id="graph">
      <h3 id="graph__title">Průběh Vašeho investování</h3>
      <VictoryChart>
        <VictoryLegend
          x={160}
          y={20}
          orientation="horizontal"
          gutter={20}
          style={{ labels: { fontSize: 10 } }}
          data={[
            { name: "Výnos", symbol: { fill: "#007FFF" } },
            { name: "Investice", symbol: { fill: "#A4D1FF" } },
          ]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => {
            if (x >= 1000000) {
              return `${x / 1000000}M Kč`;
            } else if (x >= 1000) {
              return `${x / 1000}k Kč`;
            } else {
              return `${x} Kč`;
            }
          }}
          style={{
            axisLabel: { padding: 30 },
            tickLabels: { fontSize: 8, padding: 5 },
          }}
        />
        <VictoryAxis
          tickFormat={(x) => `${x} měs.`}
          style={{
            axisLabel: { padding: 30 },
            tickLabels: { fontSize: 8, padding: 5 },
          }}
        />
        <VictoryLine
          style={{
            data: { stroke: "#007FFF" },
            parent: { border: "1px solid #fff" },
          }}
          data={interest}
        />
        <VictoryLine
          style={{
            data: { stroke: "#A4D1FF" },
            parent: { border: "1px solid #fff" },
          }}
          data={investment}
        />
      </VictoryChart>
    </div>
  );
}

export default Graph;
