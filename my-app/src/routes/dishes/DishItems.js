import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteDish, setEditDish } from "../../store/actions/dishActions";
import style from "../commonStyle.module.css";

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
    <li className={style.list_item}>
      <div className={style.datas_box}>
        <span className={style.datas_name}>{dish.name}</span>
        <span className={style.datas_description}>{dish.description}</span>
        <span className={style.datas_price}>{dish.price}</span>
      </div>
      <div className={style.buttons_box}>
        <button className={style.button_edit} onClick={onEditBtnClick}>
          Edit
        </button>
        <button className={style.button_delete} onClick={onDeleteBtnClick}>
          Delete
        </button>
      </div>
    </li>
  );
}
