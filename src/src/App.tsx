import * as React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

function App() {
  const [query, setQuery] = React.useState("");
  const ref = React.useRef<HTMLInputElement>(null);
  const [selected, setSelected] = React.useState(true);

  const getPDF = () => {
    return (
      <Box
        sx={{
          height: "90vh",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "flex-start",
          display: "flex",
        }}
      >
        <Document
          file="Sutanshu_Seth_Resume.pdf"
          onLoadSuccess={() => console.log("success")}
          onLoadError={(e) => console.log("error", e)}
        >
          <Page pageNumber={1} />
        </Document>
      </Box>
    );
  };

  const Experience = () => {
    return (
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          color: "black",
        }}
      >
        <h1 ref={ref} style={{ color: "black" }}>
          Experience
        </h1>
      </Box>
    );
  };

  const Skills = () => {
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          border: "1px solid black",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          color: "black",
        }}
      >
        <h1 style={{ color: "black" }}>Skills</h1>
      </Box>
    );
  };

  const NavBar = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyItems: "center",
          justifyContent: "space-between",
          height: "10vh",
          width: "100vw",
          backgroundColor: "white",
        }}
      >
        <h1>Sutanshu Seth</h1>
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
            sx={{
              ":hover": {
                backgroundColor: "#3492CB",
                color: "white",
              },
              color: "black",
            }}
          >
            Resume
          </Button>
          <Button
            sx={{
              ":hover": {
                backgroundColor: "#3492CB",
                color: "white",
              },
              color: "black",
            }}
          >
            Github
          </Button>
          <Button
            sx={{
              ":hover": {
                backgroundColor: "#3492CB",
                color: "white",
              },
              color: "black",
            }}
          >
            LinkedIn
          </Button>
        </div>
      </Box>
    );
  };
  const HomePage = (): JSX.Element => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "normal",
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
          border: "1px solid black",
        }}
      >
        <NavBar />
        <Box
          sx={{
            height: "100vh",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            color: "black",
          }}
        >
          <h1 ref={ref} style={{ color: "black" }}>
            Home
          </h1>
        </Box>
      </Box>
    );
  };

  const callback = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        if (ref && ref.current) {
          ref.current.style.transform = "translateX(60%)";
          ref.current.style.transition = "transform 2s";
        }
      } else {
        if (ref && ref.current) {
          ref.current.style.transform = "translateX(-50%)";
          ref.current.style.transition = "transform 2s";
          return;
        }
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    root: ref.current,
    // Creates a threshold of with increments of 0.01
    threshold: new Array(101).fill(0).map((v, i) => i * 0.01),
  });

  // intersection observer
  useEffect(() => {
    if (ref && ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref && ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, observer]);
  return (
    <>
      <HomePage />
      <Experience />
      <Skills />
    </>
  );
}

export default App;
