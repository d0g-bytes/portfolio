import "./App.css";
import Router from "./Router";
import { ThemeProvider } from "./custom-components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Router />
    </ThemeProvider>
  );
}

export default App;
