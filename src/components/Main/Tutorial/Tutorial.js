import "./Tutorial.css";
import investmentSvg from "../../../assets/svg/investing.svg";
import Card from "../../Design/Card";

function Tutorial() {
  return (
    <Card>
      <div id="tutorial">
        <div>
          <p>
            Kalkulačka ti vypočítá, na kolik peněz si můžeš přijít při různých
            výších investic <strong>díky složenému úročení.</strong>
          </p>

          <p>
            <strong>Jak vyplnit kalkulačku?</strong>
          </p>

          <ul>
            <li>Můžeš investovat jednorázově či pravidelně</li>
            <li>Nebo zkombinovat obojí, což je nejefektivnější</li>
            <li>Akciový trh přináší průměrně 6–8 % ročně</li>
            <li>Vyber, jak dlouho chceš investovat</li>
            <li>Spočítej si, kolik peněz můžeš získat!</li>
          </ul>
        </div>
        <img
          src={investmentSvg}
          height="120px"
          alt="investment"
          id="tutorial__img"
        />
      </div>
    </Card>
  );
}

export default Tutorial;
