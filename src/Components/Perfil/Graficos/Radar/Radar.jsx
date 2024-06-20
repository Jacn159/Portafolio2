import "./Radar.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import data from "../../../../Data/Perfil.json";

const Herramientas = () => {
  return (
    <ResponsiveContainer className={"radar"}>
      <RadarChart
        cx="50%"
        outerRadius="80%"
        data={data.technologies.data_analysis}
        className={"radar__contenedor"}
        margin={{ top: 50 }}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <Radar dataKey="pv" stroke="#2D667B" fill="#2D667B" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Herramientas;
