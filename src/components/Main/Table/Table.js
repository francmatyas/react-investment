import "./Table.css";
import { useState } from "react";

import TablePage from "./TablePage";
import Card from "../../Design/Card";

function Table(props) {
  const { data, show } = props;
  const [page, setPage] = useState(0);

  function handlePrevPage() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  function handleNextPage() {
    if (page < data.length - 1) {
      setPage(page + 1);
    }
  }

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
      <div id="table">
        <h2>Rok {page + 1}. Vašeho investování.</h2>
        <TablePage data={data[page]} />

        <div id="table__controls">
          <button
            className={
              "table__controls__button " +
              (page === 0 && " table__controls__button--disabled")
            }
            onClick={handlePrevPage}
          >
            Předchozí rok
          </button>
          <button
            className={
              "table__controls__button " +
              (page === data.length - 1 && "table__controls__button--disabled")
            }
            onClick={handleNextPage}
          >
            Následující rok
          </button>
        </div>
      </div>
    </Card>
  );
}

export default Table;
