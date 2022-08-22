import { Routes, Route } from "react-router-dom";
import MainLayout from "components/MainLayout"
import { AllTodos } from "components/Todo/pages/All";
import { ActiveTodos } from "components/Todo/pages/Active";
import { CompletesTodos } from "components/Todo/pages/Completed";

export const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="" element={<AllTodos />} />
               <Route path="/active" element={<ActiveTodos/>} />
                 <Route path="/completed" element={<CompletesTodos />} />
            </Route>
        </Routes>
    )
} 