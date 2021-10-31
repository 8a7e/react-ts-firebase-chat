import { Button, Grid, Typography } from "@mui/material";

import { firebaseAPI } from "../../API";

function Login() {
  return (
    <Grid container alignSelf={"center"} justifyContent={"center"}>
      <Typography variant="h6" component="div" textAlign="center">
        Сlick on the login button to access the chat
      </Typography>
      <Button
        onClick={firebaseAPI.login}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Login
      </Button>
    </Grid>
  );
}
export default Login;
