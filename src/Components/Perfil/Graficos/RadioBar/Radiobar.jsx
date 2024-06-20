import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import "./Radiobar.css";
import data from "../../../../Data/Perfil.json";
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const colors = ["#91BFD0", "#5891A6", "#2D667B", "#103F51", "#D8F2FB", "pink"];

const Radiobar = () => {
  return (
    <ResponsiveContainer className={"radiobar"} width="100%" height="100%">
      <BarChart
        data={data.soft_skills}
        margin={{
          top: 30,
          bottom: 10,
        }}
        className={"radiobar__contenedor"}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="pv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.soft_skills.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Radiobar;
