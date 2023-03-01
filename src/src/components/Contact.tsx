import Button from "@mui/material/Button";
import Typewriter from "typewriter-effect";
import { Box } from "@mui/system";

export default function Contact() {
  return (
    <Box
      //@ts-ignore
      sx={{
        display: "flex",
        height: "50vh",
        flexDirection: "column",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        paddingTop: "2vh",
        fontSize: "20px",
      }}
    >
      <div>
        <Typewriter
          options={{
            delay: 50,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<strong><span style="font-size: 50px; color: white;"> #Open<span style="font-size: 50px; color: #3FC9ED;">ToWork</span></span></strong>'
              )
              .start();
          }}
        />
      </div>
      <div
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          paddingLeft: "10%",
          width: "70vw",
          fontSize: "25px",
        }}
      >
        <p>
          I am currently looking for{" "}
          <span style={{ color: "#15B6DF" }}>
            full-time opportunities starting May 2023.
          </span>{" "}
          I am a soon-to-be New Grad with{" "}
          <span style={{ color: "#15B6DF" }}> 16 months </span> of experience.
          Please reach out to me if you have any opportunities that you think I
          would be a good fit for or if you just want to say hi!
        </p>
      </div>
      <div
        style={{
          paddingBottom: "10vh",
        }}
      >
        <Button
          href="mailto:sutanshu@ualberta.ca"
          target="_blank"
          sx={{
            border: "2px solid grey",
            fontSize: "20px",
            ":hover": {
              backgroundColor: "#3FC9ED",
              color: "white",
              border: "2px solid #3FC9ED",
            },
            color: "white",
            fontFamily: "Playfair Display",
          }}
        >
          Say Hello
        </Button>
      </div>
    </Box>
  );
}
