import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { save } from "../../store/actions/tableActions";
import { selectTableEdit } from "../../store/selectors";
import { Formik } from "formik";
import { DEFAULT_TABLE } from "../../store/reducers/tableReducer";
import { validationSchemaTable } from "../../extra/form-rules/tableRules";

export default function TableForm() {
  const tableEdit = useSelector(selectTableEdit);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          <label htmlFor="number">Put table`s number</label>
          <input
            value={values.number}
            type="text"
            id="number"
            onChange={handleChange}
          />
          {errors.number && touched.number ? (
            <span>{errors.number}</span>
          ) : null}

          <button type="submit">Add a table</button>
          <button onClick={goBackBtn}>Back to previous page</button>
        </form>
      )}
    </Formik>
  );
}
