import Experience from "./components/Experience";
import Skills from "./components/Skills";
import HomePage from "./components/Homepage";
import Button from "@mui/material/Button";
import Contact from "./components/Contact";

function App() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  return (
    <div
      style={{
        fontFamily: "Playfair Display, sans-serif",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <HomePage />
      <Skills />
      <Experience />
      <Contact />

      {isMobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            justifyItems: "center",
            alignItems: "center",
            paddingTop: "2vh",
            height: "5vh",
          }}
        >
          <Button
            href="Sutanshu_Seth_Resume.pdf"
            target="_blank"
            sx={{
              fontSize: "15px",
              ":hover": {
                backgroundColor: "#3FC9ED",
                color: "white",
              },
              color: "white",
            }}
          >
            Resume
          </Button>
          <Button
            href="https://github.com/Sutanshu"
            target="_blank"
            sx={{
              fontSize: "15px",
              ":hover": {
                backgroundColor: "#3FC9ED",
                color: "white",
              },
              color: "white",
            }}
          >
            Github
          </Button>
          <Button
            href="https://www.linkedin.com/in/sutanshu-seth"
            target="_blank"
            sx={{
              fontSize: "15px",
              ":hover": {
                backgroundColor: "#3FC9ED",
                color: "white",
              },
              color: "white",
            }}
          >
            LinkedIn
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
