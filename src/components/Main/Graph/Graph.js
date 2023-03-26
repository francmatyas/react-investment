import "./Graph.css";
import { VictoryAxis, VictoryChart, VictoryLine } from "victory";

function Graph(props) {
  const { interest, investment } = props;

  return (
    <div id="graph">
      <h2>Průběh Vašeho investování</h2>
      <VictoryChart>
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
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          style={{
            data: { stroke: "#007FFF" },
            parent: { border: "1px solid #fff" },
          }}
          data={interest}
        />
        <VictoryLine
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
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
