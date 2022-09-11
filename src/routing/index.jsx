import { Routes, Route } from "react-router-dom";
import MainLayout from "components/MainLayout";
import { ActiveTodos, AllTodos, CompletesTodos } from "components/Todo/pages";

export const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<AllTodos />} />
                <Route path="/active" element={<ActiveTodos />} />
                <Route path="/completed" element={<CompletesTodos />} />
            </Route>
        </Routes>
    )
} 
