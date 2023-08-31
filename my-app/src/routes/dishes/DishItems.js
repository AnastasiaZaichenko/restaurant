import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteDish, setEditDish } from "../../store/actions/dishActions";

export default function DishItems({ dish }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onEditBtnClick() {
    if (dish) {
      dispatch(setEditDish(dish));
      navigate(`/dish/${dish.id}/edit`);
    }
  }

  function onDeleteBtnClick() {
    dispatch(deleteDish(dish));
  }
  return (
    <li>
      <span>{dish.name}</span>
      <span>{dish.description}</span>
      <span>{dish.price}</span>
      <button onClick={onEditBtnClick}>Edit</button>
      <button onClick={onDeleteBtnClick}>Delete</button>
    </li>
  );
}
