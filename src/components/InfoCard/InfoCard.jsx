/* eslint-disable react/prop-types */
import "./InfoCard.css";
export default function InfoCard(props) {
  return (
    <div className="infoCard">
      <h2 className="cardTitle">{props.title}</h2>
      <p className="cardContent">{props.content}</p>
    </div>
  );
}
