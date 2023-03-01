import { Box } from "@mui/material";

const Experience = () => {
  return (
    <Box
      //@ts-ignore
      sx={{
        // height: "100vh",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "black", fontSize: "40px" }}>Experience</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          paddingLeft: "10%",
          width: "70vw",
          fontSize: "25px",
        }}
      >
        <h3
          style={{
            fontSize: "30px",
          }}
        >
          Software Developer Intern, Investing Team
        </h3>
        <h2>Wealthsimple</h2>
        <h5
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        >
          <strong>May 2022 - August 2022</strong>
        </h5>
        <li>
          <p>
            Shipped several features and experiments using{" "}
            <span style={{ color: "#15B6DF" }}>
              React, TypeScript, Ruby on Rails, and GraphQL.{" "}
            </span>
            This served as a function of{" "}
            <span style={{ color: "#15B6DF" }}>
              lowering churn rates, more than 18,500 new clients, $27M net
              deposits, and lowered withdrawal rates by 6%.{" "}
            </span>
          </p>
        </li>

        <li>
          <p>
            Optimizing scaling queries and stepping scales that led to reduced
            costs and resources by eliminating{" "}
            <span style={{ color: "#15B6DF" }}>
              3 additional AWS Athena containers.{" "}
            </span>
          </p>
        </li>
        <li>
          <p>
            Volunteered and actively participated in the build release working
            group, resulting in a{" "}
            <span style={{ color: "#15B6DF" }}>
              more optimized way of bundling our apps, and cutting our build
              time by 33%.{" "}
            </span>
          </p>
        </li>
        <h3
          style={{
            paddingTop: "10%",
            fontSize: "30px",
          }}
        >
          Software Developer Intern, QuickBooks Onboarding
        </h3>
        <h2>Intuit</h2>
        <h5
          style={{
            fontSize: "20px",
            color: "grey",
          }}
        >
          <strong>January 2021 - December 2021</strong>
        </h5>
        <li>
          <p>
            Built a <span style={{ color: "#15B6DF" }}>React </span> component
            resolver that parsed JSON files to build components. This{" "}
            <span style={{ color: "#15B6DF" }}>
              lowered time to ship experiments dramatically, and reduced the
              size of codebase by 62%.{" "}
            </span>
          </p>

          <li>
            <p>
              Configured <span style={{ color: "#15B6DF" }}>Splunk </span>{" "}
              dashboards to receive logs across various endpoints through{" "}
              <span style={{ color: "#15B6DF" }}>
                AWS Lambda, and CloudWatch.{" "}
              </span>{" "}
              Ordered based on priority, these logs helped address issues{" "}
              <span style={{ color: "#15B6DF" }}>way faster than before.</span>
            </p>
          </li>
          <li>
            <p>
              Worked on integration, and system testing using{" "}
              <span style={{ color: "#15B6DF" }}>Cypress.</span>
              Additionally wrote tons of unit tests using{" "}
              <span style={{ color: "#15B6DF" }}>Jest </span> to dramatically
              <span style={{ color: "#15B6DF" }}>increase code coverage. </span>
            </p>
          </li>
          <li>
            <p>
              Led the daily{" "}
              <span style={{ color: "#15B6DF" }}> stand ups, </span> actively
              participated in grooming our backlog.
            </p>
          </li>
        </li>
      </div>
    </Box>
  );
};

export default Experience;
