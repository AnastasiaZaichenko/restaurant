import { Route, Routes } from "react-router-dom";
import NotFound from "../../extra/NotFound";
import DishForm from "./DishForm";
import DishList from "./DishList";

export default function DishRouter() {
  return (
    <Routes>
      <Route path="/" element={<DishList />} />
      <Route path="/create" element={<DishForm />} />
      <Route path="/:id/edit" element={<DishForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
