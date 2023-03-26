import "./Graph.css";
import { VictoryAxis, VictoryChart, VictoryLine } from "victory";
import Card from "../../Design/Card";

function Graph(props) {
  const { interest, investment, show } = props;

  if (!show)
    return (
      <Card>
        <div className="main__results__error">
          <p>Nebyla zadána žádná investice</p>
        </div>
      </Card>
    );

  return (
    <Card>
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
    </Card>
  );
}

export default Graph;
