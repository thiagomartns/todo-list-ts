import { ThemeProvider } from "styled-components/";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { Header } from "./components/Header";
import { InputContainer } from "./components/InputContainer";
import { TaskContainer } from "./components/TaskContainer";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <InputContainer />
      <TaskContainer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
