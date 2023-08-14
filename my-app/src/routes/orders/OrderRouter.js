import { Routes, Route } from "react-router-dom";
import OrderForm from "./OrderForm";
import OrderList from "./OrderList";
import NotFound from "../../extra/NotFound";

export default function OrderRouter() {
  return (
    <Routes>
      <Route path="/" element={<OrderList />} />
      <Route path="/create" element={<OrderForm />} />
      <Route path="/:id/edit" element={<OrderForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
