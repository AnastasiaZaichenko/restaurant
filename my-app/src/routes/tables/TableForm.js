import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { save } from "../../store/actions/tableActions";
import { selectTableEdit } from "../../store/selectors";
import { Formik } from "formik";
import { DEFAULT_TABLE } from "../../store/reducers/tableReducer";
import { validationSchemaTable } from "../../extra/form-rules/tableRules";

export default function TableForm() {
  const tableEdit = useSelector(selectTableEdit);
  // const [value, setValue] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (tableEdit?.id) {
  //     setValue(tableEdit.number);
  //   }
  // }, [tableEdit.number, tableEdit?.id]);

  function onSubmit(value, actions) {
    const table = {
      ...tableEdit,
      number: Number(value.number),
    };

    actions.resetForm({
      values: DEFAULT_TABLE,
    });

    dispatch(save(table));
    navigate("/table");
  }

  // function onAddBtnClick(e) {
  //   e.preventDefault();
  //   if (value) {
  //     const table = {
  //       ...tableEdit,
  //       number: value,
  //     };
  //     dispatch(save(table));
  //     dispatch(clearForm());

  //     setValue("");
  //   }
  // }

  // function onValueChange(e) {
  //   const tableNumber = Number(e.target.value);

  //   if (isNaN(tableNumber)) return null;

  //   setValue(tableNumber);
  // }

  function goBackBtn() {
    navigate("/table");
  }

  return (
    <Formik
      enableReinitialize
      initialValues={tableEdit}
      validationSchema={validationSchemaTable}
      onSubmit={onSubmit}
    >
      {({ values, handleSubmit, handleChange, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="number">Чтобы создать новый стол введите цифру</label>
          <input
            value={values.number}
            type="text"
            id="number"
            onChange={handleChange}
          />
          {errors.number && touched.number ? (
            <span>{errors.number}</span>
          ) : null}

          <button type="submit">Создать </button>
          <button onClick={goBackBtn}>Назад</button>
        </form>
      )}
    </Formik>
  );
}
