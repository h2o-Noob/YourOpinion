import React from "react";
import News from "./News";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import data from "./data.json";

const NewsList = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5", paddingTop: "5vh", paddingLeft: "7px" }}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {(data.data).map((news) => (
              <Grid item xs={12} sm={4} md={4} key={news}>
                <News data={news}/>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default NewsList;
