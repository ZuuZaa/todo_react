import "./style.scss";
import SunIcon from "../../../../assets/icons/icon-sun.svg";
import MoonIcon from "../../../../assets/icons/icon-moon.svg";
import { ThemeProvider} from "styled-components";
import { GlobalStyles } from "components/globalStyle";
import { lightTheme, darkTheme } from "assets/themes";
import { useTheme } from "contexts/theme";

const TodoHeader = () => {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="todo-header">
        <h1>todo</h1>
        <img
          src={theme === "dark" ? SunIcon : MoonIcon}
          alt="toggle theme"
          onClick={() => toggleTheme()}
        />
      </div>
    </ThemeProvider>
  );
};

export default TodoHeader;
