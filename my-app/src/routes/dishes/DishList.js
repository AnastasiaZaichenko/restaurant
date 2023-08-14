import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectDishList } from "../../store/selectors";
import DishItems from "./DishItems";
import { useEffect } from "react";
import { fetchDishList } from "../../store/actions/dishActions";

export default function DishList() {
  const dispatch = useDispatch();
  const list = useSelector(selectDishList);
  const dishList = list.map((dish) => <DishItems key={dish.id} dish={dish} />);

  useEffect(() => {
    dispatch(fetchDishList());
  }, [dispatch]);

  return (
    <div>
      <ul>{dishList}</ul>

      <button>
        <Link to="/dish/create">Add dish</Link>
      </button>
    </div>
  );
}
