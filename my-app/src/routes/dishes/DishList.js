import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectDishList } from "../../store/selectors";
import DishItems from "./DishItems";
import { useEffect } from "react";
import { fetchDishList } from "../../store/actions/dishActions";
import style from "../commonStyle.module.css";

export default function DishList() {
  const dispatch = useDispatch();
  const list = useSelector(selectDishList);
  const dishList = list.map((dish) => <DishItems key={dish.id} dish={dish} />);

  useEffect(() => {
    dispatch(fetchDishList());
  }, [dispatch]);

  return (
    <div className={style.body_box}>
      <ul className={style.list}>
        <li className={style.capture_dish}>
          <span>Meal</span>
          <span>Description</span>
          <span>Price</span>
        </li>
        {dishList}
      </ul>
      <button className={style.button_create}>
        <Link to="/dish/create">Create a new dish</Link>
      </button>
    </div>
  );
}
