import "./style.css";

const CenteredCard = ({ children }) => {
  return (
    <div className="cardCentral">
      <span>{children}</span>
    </div>
  );
};

export default CenteredCard;
