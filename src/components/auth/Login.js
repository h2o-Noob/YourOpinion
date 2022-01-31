import React from "react";
import firebase from "firebase/app";
import { auth } from "../../firebase";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Login = () => {
  const theme = createTheme();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Button
                variant="contained"
                color="error"
                onClick={() =>
                  auth.signInWithRedirect(
                    new firebase.auth.GoogleAuthProvider()
                  )
                }
                size="large"
              >
                Sign in using Google
              </Button>
            </Box>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Button
                variant="contained"
                onClick={() =>
                  auth.signInWithRedirect(
                    new firebase.auth.FacebookAuthProvider()
                  )
                }
                size="large"
              >
                Sign in using Facebook
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Login;
