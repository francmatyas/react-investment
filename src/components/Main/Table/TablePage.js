import "./TablePage.css";

import TableRow from "./TableRow";

function TablePage(props) {
  const { data, year } = props;

  return (
    <div id="table__page">
      <h2>{year}. rok Vašeho investování.</h2>
      <div id="table__page__header">
        <p>Měsíc</p>
        <p>Počáteční částka</p>
        <p>Úrok</p>
        <p>Konečná částka</p>
      </div>
      {data.map((item, index) => {
        return <TableRow data={item} key={index} />;
      })}
    </div>
  );
}

export default TablePage;
