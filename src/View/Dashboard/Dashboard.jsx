import Otros from "../Frames/Otros/Otros";
import Perfil from "../Frames/Perfil/Perfil";
import ProyectosAgro from "../Frames/ProyectosAgro/ProyectosAgro";
import ProyectosGeneral from "../Frames/ProyectosGeneral/ProyectosGeneral";
import ProyectosWeb from "../Frames/ProyectosWeb/ProyectosWeb";
import "./Dashboard.css";

const Dashboard = ({ page }) => {
  const choosePage = () => {
    let pageView = "";
    switch (page) {
      case 1:
        pageView = <Perfil></Perfil>;
        break;
      case 2:
        pageView = <ProyectosGeneral></ProyectosGeneral>;
        break;
      case 3:
        pageView = <ProyectosAgro></ProyectosAgro>;
        break;
      case 4:
        pageView = <ProyectosWeb></ProyectosWeb>;
        break;
      case 5:
        pageView = <Otros></Otros>;
        break;
      default:
        pageView = <Perfil></Perfil>;
    }

    return pageView;
  };
  return <div className="dashboard">{choosePage()}</div>;
};

export default Dashboard;
