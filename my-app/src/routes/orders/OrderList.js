import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCommonActions } from "../../store/actions/commonActions";
import { selectCommonList } from "../../store/selectors";
import OrderItems from "./OrderItems";

export default function OrderList() {
  const dispatch = useDispatch();
  const list = useSelector(selectCommonList);
  const orderList = list.map((order) => (
    <OrderItems key={order.id} order={order} />
  ));

  useEffect(() => {
    dispatch(fetchCommonActions());
  }, [dispatch]);

  return (
    <div>
      <ul>{orderList}</ul>
      <button>
        <Link to="/order/create">Add order</Link>
      </button>
    </div>
  );
}
