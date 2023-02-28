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

  const search = () => {
    setSelected(!selected);

    if (ref && ref.current && selected) {
      ref.current.style.transform = "translateY(-40vh)";
      ref.current.style.transition = "transform 1s";
    }
    if (ref && ref.current && !selected) {
      ref.current.style.transform = "translateY(0vh)";
    }
  };

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

  const getSearchEngine = () => {
    return (
      <Box
        sx={{
          height: "90vh",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          ref={ref}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "normal",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              // justifyItems: "center",
            }}
          >
            <Button
              sx={{
                ":hover": {
                  backgroundColor: "#3492CB",
                  color: "white",
                },
              }}
            >
              Google
            </Button>
            <Button
              sx={{
                ":hover": {
                  backgroundColor: "#3492CB",
                  color: "white",
                },
              }}
            >
              Bing
            </Button>
            <Button
              sx={{
                ":hover": {
                  backgroundColor: "#3492CB",
                  color: "white",
                },
              }}
            >
              DuckDuckGo
            </Button>
          </div>
          <Box
            ref={ref}
            sx={{
              height: "10vh",
              width: "40vw",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              borderColor: "black",
              borderRadius: "10px",
              transition: "transform 1s",
            }}
          >
            <TextField
              id="standard-basic"
              label="Search Engine"
              variant="standard"
              sx={{ width: "60%" }}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && search()}
              value={query}
            ></TextField>
            <SearchIcon
              sx={{
                color: "#3492CB",
                paddingRight: "10px",
                ":hover": {
                  color: "#1913A0",
                  cursor: "pointer",
                },
              }}
              onClick={search}
            />
          </Box>
        </Box>
      </Box>
    );
  };

  const getExperience = () => {
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "normal",
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            justifyItems: "center",
            height: "10vh",
            width: "100vw",
            backgroundColor: "white",
          }}
        >
          <h1>Sutanshu Seth</h1>
        </Box>
      </Box>
      {/* {getSearchEngine()} */}
      {/* {getPDF()} */}
      {getExperience()}
    </>
  );
}

export default App;
