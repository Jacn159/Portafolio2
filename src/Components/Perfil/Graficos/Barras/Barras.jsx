import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import "./Barras.css";
import data from "../../../../Data/Perfil.json";
const Barras = () => {
  return (
    <ResponsiveContainer className={"barras"} width="100%" height="100%">
      <ComposedChart
        className={"barras__container"}
        layout="vertical"
        data={data.technologies.web_development}
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Bar dataKey="pv" barSize={14} fill="#103F51" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Barras;
