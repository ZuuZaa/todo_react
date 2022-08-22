import { ThemeProvider } from "contexts/theme";
import { Routing } from "routing";


function App() {

  return (
    <ThemeProvider>
      <Routing />
    </ThemeProvider>
  );
}

export default App;