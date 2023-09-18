import "./Home.scss";
import profile from "../../assets/foto.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="details">
        <span className="intro">Hola, soy</span>

        <div className="name">
          <div>
            <h1 className="txt">CA</h1>
            <h1 className="txt">MI</h1>
          </div>

          <h1 className="txt lg">LO</h1>

          <div className="dev">
            FRONT-END <b>DEVELOPER</b>
          </div>
        </div>
      </div>

      <div className="profile-img">
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Home;
