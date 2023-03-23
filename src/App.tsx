import "./styles.css";
import useReactRouter from "use-react-router";

export default function App() {
  const { location } = useReactRouter();
  return (
    <div className="App">
      <h1>Location: ${location.pathname}</h1>
    </div>
  );
}
