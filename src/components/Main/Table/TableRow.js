import "./TableRow.css";

function TableRow(props) {
  const { data } = props;
  const { month, startValue, interest, finalValue } = data;
  return (
    <tr id="table__row">
      <td>{month}</td>
      <td>{`${Math.ceil(startValue).toLocaleString("cs-CZ")} Kč`}</td>
      <td>{`${Math.ceil(interest).toLocaleString("cs-CZ")} Kč`}</td>
      <td>{`${Math.ceil(finalValue).toLocaleString("cs-CZ")} Kč`}</td>
    </tr>
  );
}

export default TableRow;
