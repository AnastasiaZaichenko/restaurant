import { deleteTable } from "../../store/actions/tableActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEditTable } from "../../store/actions/tableActions";

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
    <li>
      <span>{table.number}</span>
      <button onClick={onEditBtnClick}>Edit</button>
      <button onClick={onDeleteBtnClick}>Delete</button>
    </li>
  );
}
