import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { save } from "../../store/actions/tableActions";
import { selectTableEdit } from "../../store/selectors";
import { Formik } from "formik";
import { DEFAULT_TABLE } from "../../store/reducers/tableReducer";
import { validationSchemaTable } from "../../extra/form-rules/tableRules";
import style from "../commonStyle.module.css";

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
        <form onSubmit={handleSubmit} className={style.form_box}>
          <div class={style.input_box}>
            <label htmlFor="number">Table`s number: </label>
            <input
              value={values.number}
              type="text"
              id="number"
              onChange={handleChange}
              className={style.input}
            />
            {errors.number && touched.number ? (
              <span className={style.form_error}>{errors.number}</span>
            ) : null}
          </div>
          <div className={style.buttons_box_form}>
            <button type="submit" className={style.button_submit}>
              Add a table
            </button>
            <button onClick={goBackBtn} className={style.button_back}>
              Back to previous page
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}
