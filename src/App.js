import MainLayout from "components/MainLayout";
import { ThemeProvider } from "contexts/theme";


function App() {

  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;