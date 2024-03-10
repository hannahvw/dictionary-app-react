import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <Dictionary />
      <footer>
        Coded by Hannah Van Wyk and open-sourced on{" "}
        <a href="https://github.com/hannahvw/dictionary-app-react">GitHub</a>{" "}
        and <a href="https://loquacious-granita-e8ac90.netlify.app/">Netlify</a>
        .
      </footer>
    </div>
  );
}

export default App;
