import { Routes, Route } from "react-router-dom";
import NotFound from "./extra/NotFound";
import DishRouter from "./routes/dishes/DishRouter";
import TableRouter from "./routes/tables/TableRouter";
import WaiterRouter from "./routes/waiters/WaiterRouter";
import OrderRouter from "./routes/orders/OrderRouter";
import Layout from "./extra/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/order/*" element={<OrderRouter />} />
          <Route path="/dish/*" element={<DishRouter />} />
          <Route path="/table/*" element={<TableRouter />} />
          <Route path="/waiter/*" element={<WaiterRouter />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
