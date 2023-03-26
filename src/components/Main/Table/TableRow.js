import "./TableRow.css";

function TableRow(props) {
  const { data } = props;
  const { month, startValue, interest, finalValue } = data;
  return (
    <div id="table__row">
      <p>{month}</p>
      <p>{`${Math.ceil(startValue).toLocaleString("cs-CZ")} Kč`}</p>
      <p>{`${Math.ceil(interest).toLocaleString("cs-CZ")} Kč`}</p>
      <p>{`${Math.ceil(finalValue).toLocaleString("cs-CZ")} Kč`}</p>
    </div>
  );
}

export default TableRow;
