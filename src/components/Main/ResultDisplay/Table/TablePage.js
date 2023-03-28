import "./TablePage.css";

import TableRow from "./TableRow";

function TablePage(props) {
  const { data } = props;

  return (
    <table id="table__page">
        <thead>
        <tr id="table__page__header">
          <th>Měsíc</th>
          <th>Počáteční částka</th>
          <th>Úrok</th>
          <th>Konečná částka</th>
        </tr>
        </thead>

        <tbody>
        {data.map((item, index) => {
          return <TableRow data={item} key={index} />;
        })}
        </tbody>
    </table>
  );
}

export default TablePage;
