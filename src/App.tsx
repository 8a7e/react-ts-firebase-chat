import { createContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { Alert, Snackbar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import MainLayout from "./layouts/main";

import { firebaseAPI } from "./API";
import { publicRoutes, privateRoutes } from "./routes";

import { UserType } from "./types";

interface ContextType {
  user: UserType;
}

export const Context = createContext({} as ContextType);

function App() {
  const [user, loading, error] = useAuthState(firebaseAPI.auth);

  return (
    <div>
      <Context.Provider value={{ user }}>
        <CssBaseline />
        <BrowserRouter>
          <MainLayout user={user} loading={loading}>
            {user ? (
              <Switch>
                {publicRoutes.map(({ path, Component }) => (
                  <Route
                    key={path}
                    path={path}
                    component={Component}
                    exact={true}
                  />
                ))}
                <Redirect to={"/"} />
              </Switch>
            ) : (
              <Switch>
                {privateRoutes.map(({ path, Component }) => (
                  <Route
                    key={path}
                    path={path}
                    component={Component}
                    exact={true}
                  />
                ))}
                <Redirect to={"/"} />
              </Switch>
            )}
          </MainLayout>
          <Snackbar open={error} autoHideDuration={5000}>
            <Alert severity="error" sx={{ width: "100%" }}>
              An error has occurred, please try again.
            </Alert>
          </Snackbar>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
