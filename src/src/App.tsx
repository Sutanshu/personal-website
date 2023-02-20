import * as React from "react";
import Box from "@mui/material/Box";

function App() {
  return (
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
      <h1 style={{ color: "green", background: "black" }}>Sutanshu Seth</h1>
      <h1> Another one </h1>
    </Box>
  );
}

export default App;
