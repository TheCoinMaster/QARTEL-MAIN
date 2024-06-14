import "./App.css";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="App" style={styles.wrapper}>
      <Dashboard />
    </div>
  );
}

export default App;

const styles = {
  wrapper: {
    background: "#000",
    width: "100vw",
  },
};
