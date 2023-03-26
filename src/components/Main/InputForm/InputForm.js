import "./InputForm.css";
import { useState, useEffect } from "react";
import { InvestmentUtils } from "../../../scripts/InvestmentUtils";

function InputForm(props) {
  const [startAmount, setStartAmount] = useState(100000);
  const [additionalContribution, setAdditionalContribution] = useState(1000);
  const [returnRate, setReturnRate] = useState(7);
  const [years, setYears] = useState(10);

  useEffect(() => {
    props.onInputChange(
      new InvestmentUtils(
        startAmount,
        additionalContribution,
        returnRate,
        years * 12
      )
    );
  }, [startAmount, additionalContribution, returnRate, years]);

  function correctNaN(value) {
    return value.length === 0 ? 0 : value;
  }

  return (
    <form id="input__form">
      <div className="form__col">
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
          onChange={(event) => setStartAmount(correctNaN(event.target.value))}
        />
        {startAmount === 0 && (
          <p className="input__error">Vložte nějaké číslo, třeba 10 000</p>
        )}
      </div>

      <div className="form__col">
        <label htmlFor="additional-contribution" className="investment__label">
          Pravidelná měsíční investice
        </label>
        <input
          id="additional-contribution"
          className="investment__input"
          type="number"
          min="0"
          value={additionalContribution}
          onChange={(event) => {
            setAdditionalContribution(correctNaN(event.target.value));
          }}
        />
      </div>

      <div className="form__col">
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
          onChange={(event) => setReturnRate(correctNaN(event.target.value))}
        />
        {returnRate === 0 && (
          <p className="input__error">Vložte nějaké číslo, třeba 7</p>
        )}
      </div>

      <div className="form__col">
        <label htmlFor="years" className="investment__label">
          Na kolik let chcete investovat?
        </label>
        <input
          id="years"
          className="investment__input"
          type="number"
          min="1"
          required
          value={years}
          onChange={(event) => {
            const value = event.target.value;
            setYears(value.length === 0 ? 1 : value);
          }}
        />
      </div>
    </form>
  );
}

export default InputForm;
