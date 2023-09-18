import "./Social.scss";

const Social = ({ logo, value }) => {
  return (
    <div className="social">
      <img src={logo} alt="" />
      <h1>{value}</h1>
    </div>
  );
};

export default Social;
