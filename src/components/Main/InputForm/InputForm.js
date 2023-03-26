import "./InputForm.css";
import Card from "../../Design/Card";

function InputForm(props) {
  const {
    startAmount,
    additionalContribution,
    returnRate,
    years,
    setStartAmount,
    setAdditionalContribution,
    setReturnRate,
    setYears,
  } = props;

  return (
    <Card>
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
            onChange={(event) => setStartAmount(parseInt(event.target.value))}
          />
        </div>

        <div className="form__col">
          <label
            htmlFor="additional-contribution"
            className="investment__label"
          >
            Pravidelná měsíční investice
          </label>
          <input
            id="additional-contribution"
            className="investment__input"
            type="number"
            min="0"
            value={additionalContribution}
            onChange={(event) =>
              setAdditionalContribution(parseInt(event.target.value))
            }
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
            onChange={(event) => setReturnRate(parseInt(event.target.value))}
          />
        </div>

        <div className="form__col">
          <label htmlFor="years" className="investment__label">
            Na kolik let chcete investovat?
          </label>
          <input
            id="years"
            className="investment__input"
            type="number"
            min="0"
            required
            value={years}
            onChange={(event) => setYears(parseInt(event.target.value))}
          />
        </div>
      </form>
    </Card>
  );
}

export default InputForm;
