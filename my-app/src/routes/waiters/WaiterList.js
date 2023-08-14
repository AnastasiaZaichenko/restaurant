import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectWaiterList } from "../../store/selectors";
import WaiterItems from "./WaiterItems";
import { fetchWaiterList } from "../../store/actions/waiterActions";
export default function WaiterList() {
  const dispatch = useDispatch();
  const list = useSelector(selectWaiterList);
  const waiterList = list.map((waiter) => (
    <WaiterItems key={waiter.id} waiter={waiter} />
  ));

  useEffect(() => {
    dispatch(fetchWaiterList());
  }, [dispatch]);

  return (
    <div>
      <ul>{waiterList}</ul>
      <button>
        <Link to="/waiter/create">Add Waiter</Link>
      </button>
    </div>
  );
}
