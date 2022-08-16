import "./style.scss";
import BackgroundImage from "components/BackgroundImage";
import Todo from "components/Todo";
import { useTheme } from "contexts/theme";

const MainLayout = () => {
  const {theme} = useTheme();
  return (
    <div className="main-layout" id={theme}>
      <BackgroundImage />
      <Todo />
    </div>
  );
};
export default MainLayout;
