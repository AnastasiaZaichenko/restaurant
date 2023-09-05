import { deleteTable } from "../../store/actions/tableActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEditTable } from "../../store/actions/tableActions";
import style from "../commonStyle.module.css";

export default function TableItems({ table }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onEditBtnClick() {
    if (table) {
      dispatch(setEditTable(table));
      navigate(`/table/${table.id}/edit`);
    }
  }

  function onDeleteBtnClick() {
    dispatch(deleteTable(table));
  }

  return (
    <li className={style.list_item}>
      <div className={style.datas_box}>
        <span className={style.datas_number}>{table.number}</span>
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
