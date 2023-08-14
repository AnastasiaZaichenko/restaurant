import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearForm, save } from "../../store/actions/tableActions";
import { selectTableEdit } from "../../store/selectors";

export default function TableForm() {
  const tableEdit = useSelector(selectTableEdit);
  const [value, setValue] = useState("");

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

    // нужно setValue  i clearForm оба?
  }

  function onValueChange(e) {
    const tableNumber = e.target.value;
    if (!isNaN(Number(tableNumber))) {
      setValue(tableNumber);
    }
    return;
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
    </form>
  );
}
