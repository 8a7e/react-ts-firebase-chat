import { FC } from "react";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Grid,
  Button,
  Container,
  LinearProgress,
  Avatar,
} from "@mui/material";

import { firebaseAPI } from "../../API";
import { UserType } from "../../types";

const MainLayout: FC<Props> = ({ children, user, loading }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component="div">
              React Firebase Chat
            </Typography>
            {user ? (
              <Box
                sx={{ cursor: "pointer" }}
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Box
                  p={1}
                  display="flex"
                  alignItems="center"
                  borderRight={1}
                  height={"10px"}
                >
                  <Avatar src={user.photoURL} />
                  <Typography ml={1}>{user.displayName}</Typography>
                </Box>
                <Button onClick={firebaseAPI.logout} color="inherit">
                  Logout
                </Button>
              </Box>
            ) : (
              <Button onClick={firebaseAPI.login} color="inherit">
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
        {loading && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
      </Box>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Grid container minHeight={"80vh"}>
          {children}
        </Grid>
      </Container>
    </>
  );
};

interface Props {
  children: React.ReactNode;
  user: UserType;
  loading: boolean;
}

export default MainLayout;
