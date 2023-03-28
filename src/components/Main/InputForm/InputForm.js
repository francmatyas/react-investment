import "./InputForm.css";
import { useState, useEffect } from "react";
import { InvestmentUtils } from "../../../scripts/InvestmentUtils";
import Card from "../../Design/Card";

function InputForm(props) {
  const { onInputChange } = props;
  const [startAmount, setStartAmount] = useState(100000);
  const [additionalContribution, setAdditionalContribution] = useState(1000);
  const [returnRate, setReturnRate] = useState(7);
  const [years, setYears] = useState(10);

  useEffect(() => {
    onInputChange(
      new InvestmentUtils(
        startAmount,
        additionalContribution,
        returnRate,
        years * 12
      )
    );
  }, [startAmount, additionalContribution, returnRate, years, onInputChange]);

  function correctInput(value) {
    return value.length === 0 ? 0 : value;
  }

  return (
    <Card>
      <form id="input-form">
        <div className="input-form__col">
          <label htmlFor="start-amount" className="input-form__label">
            Počáteční jednorázová investice
          </label>

          <input
            id="start-amount"
            className="input-form__input"
            type="number"
            min="0"
            required
            value={startAmount}
            onChange={(event) =>
              setStartAmount(correctInput(event.target.value))
            }
          />
          {startAmount === 0 && (
            <p className="input-form__error">Vlož nějaké číslo, třeba 10 000</p>
          )}
        </div>

        <div className="input-form__col">
          <label
            htmlFor="additional-contribution"
            className="input-form__label"
          >
            Pravidelná měsíční investice
          </label>
          <input
            id="additional-contribution"
            className="input-form__input"
            type="number"
            min="0"
            value={additionalContribution}
            onChange={(event) => {
              setAdditionalContribution(correctInput(event.target.value));
            }}
          />
        </div>

        <div className="input-form__col">
          <label htmlFor="return-rate" className="input-form__label">
            Předpokládaná roční úroková sazba (%)
          </label>
          <input
            id="return-rate"
            className="input-form__input"
            type="number"
            min="0"
            required
            value={returnRate}
            onChange={(event) =>
              setReturnRate(correctInput(event.target.value))
            }
          />
          {returnRate === 0 && (
            <p className="input-form__error">Vlož nějaké číslo, třeba 7</p>
          )}
        </div>

        <div className="input-form__col">
          <label htmlFor="years" className="input-form__label">
            Na kolik let chcete investovat?
          </label>
          <input
            id="years"
            className="input-form__input"
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
    </Card>
  );
}

export default InputForm;
