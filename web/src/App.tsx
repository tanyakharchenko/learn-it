import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { CreateCoursePage } from "components/pages/CreateCoursePage";
import { Header } from "components/Header";
import { store } from "./store";
import theme from "./theme";

function App() {
  return (
    <React.Suspense fallback="...is loading">
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Header />
            <CreateCoursePage />
          </ThemeProvider>
        </Provider>
    </React.Suspense>
  );
}

export default App;
