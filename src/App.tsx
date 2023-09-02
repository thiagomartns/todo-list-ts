import { ThemeProvider } from "styled-components/";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { Header } from "./components/Header";
import { InputContainer } from "./components/InputContainer";
import { TaskContainer } from "./components/TaskContainer";
import { AppProvider } from "./context/TaskContext";

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <InputContainer />
        <TaskContainer />
        <GlobalStyles />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
