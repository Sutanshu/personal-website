import { Box, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const [positionR, setPositionR] = useState<any>("absolute");
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 900
        ? setPositionR("absolute")
        : setPositionR("relative");
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <Box
      //@ts-ignore
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyItems: "center",
        position: "relative",
        justifyContent: "center",
        textAlign: "center",
        height: "10vh",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
          }}
        >
          Sutanshu Seth
        </h1>
      </div>
      {!isMobile && (
        <div
          ref={ref}
          style={{
            position: positionR,
            right: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              justifyItems: "center",
              alignItems: "center",
              right: 0,
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
        </div>
      )}
    </Box>
  );
};
export default NavBar;
