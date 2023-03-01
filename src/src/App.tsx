import Experience from "./components/Experience";
import Skills from "./components/Skills";
import HomePage from "./components/Homepage";

function App() {
  return (
    <div
      style={{
        fontFamily: "Playfair Display, sans-serif",
      }}
    >
      <HomePage />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
