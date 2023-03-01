import { Box, Button } from "@mui/material";

const NavBar = () => {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  return (
    <Box
      //@ts-ignore
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyItems: "center",
        justifyContent: "space-between",
        height: "10vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: isMobile ? "0" : "43%",
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
              color: "black",
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
              color: "black",
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
              color: "black",
            }}
          >
            LinkedIn
          </Button>
        </div>
      )}
    </Box>
  );
};
export default NavBar;
