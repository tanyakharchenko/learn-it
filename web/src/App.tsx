import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "components/Header";
import { store } from "./store";
import theme from "./theme";
import { AppRouting } from "./Routing";

function App() {
  return (
    <React.Suspense fallback="...is loading">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
          <Router>
            <AppRouting />
          </Router>
        </ThemeProvider>
      </Provider>
    </React.Suspense>
  );
}

export default App;
