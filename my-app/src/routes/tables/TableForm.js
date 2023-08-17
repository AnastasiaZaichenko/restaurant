import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearForm, save } from "../../store/actions/tableActions";
import { selectTableEdit } from "../../store/selectors";
// import { useForm } from "react-hook-form";

export default function TableForm() {
  const tableEdit = useSelector(selectTableEdit);
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (tableEdit?.id) {
      setValue(tableEdit.number);
    }
  }, [tableEdit.number, tableEdit?.id]);

  function onAddBtnClick(e) {
    e.preventDefault();
    if (value) {
      const table = {
        ...tableEdit,
        number: value,
      };
      dispatch(save(table));
      dispatch(clearForm());

      setValue("");
    }
  }

  function onValueChange(e) {
    const tableNumber = e.target.value;
    if (!isNaN(Number(tableNumber))) {
      setValue(tableNumber);
    }
    return;
  }

  function goBackBtn() {
    navigate("/table");
  }

  return (
    <form>
      <label htmlFor="tableNumber">
        Чтобы создать новый стол введите цифру
      </label>
      <input
        type="text"
        id="tableNumber"
        value={value}
        onChange={onValueChange}
      />
      <button type="submit" onClick={onAddBtnClick}>
        Создать{" "}
      </button>
      <button onClick={goBackBtn}>Назад</button>
    </form>
  );
}
