import { Routes, Route } from "react-router-dom";
import NotFound from "../../extra/NotFound";
import TableList from "./TableList";
import TableForm from "./TableForm";

export default function TableRouter() {
  return (
    <Routes>
      <Route path="/" element={<TableList />} />
      <Route path="/create" element={<TableForm />} />
      <Route path="/:id/edit" element={<TableForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
