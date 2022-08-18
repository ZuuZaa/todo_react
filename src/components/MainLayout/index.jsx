import "./style.scss";
import BackgroundImage from "components/BackgroundImage";
import Todo from "components/Todo";
import { useTheme } from "contexts/theme";
import { TodoProvider } from "contexts/todo";

const MainLayout = () => {
  const { theme } = useTheme();
  return (
    <div className="main-layout" id={theme}>
      <BackgroundImage />
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </div>
  );
};
export default MainLayout;
