import { Formik } from "formik";
import { selectWaiterEdit } from "../../store/selectors";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_WAITER } from "../../store/reducers/waiterReducer";
import { save } from "../../store/actions/waiterActions";
import { validationSchemaWaiter } from "../../extra/form-rules/waiterRules";
import style from "../commonStyle.module.css";

export default function WaiterForm() {
  const waiterEdit = useSelector(selectWaiterEdit);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSubmit(value, actions) {
    const waiter = {
      ...waiterEdit,
      firstName: value.firstName,
      phone: value.phone,
    };
    actions.resetForm({
      values: DEFAULT_WAITER,
    });

    dispatch(save(waiter));
    navigate("/waiter");
  }

  function goBackBtn() {
    navigate("/waiter");
  }

  return (
    <Formik
      enableReinitialize
      initialValues={waiterEdit}
      validationSchema={validationSchemaWaiter}
      onSubmit={onSubmit}
    >
      {({ values, handleSubmit, handleChange, errors, touched }) => (
        <form onSubmit={handleSubmit} className={style.form_box}>
          <div className={style.input_box}>
            <label htmlFor="firstName">Name: </label>
            <input
              value={values.firstName}
              type="text"
              id="firstName"
              onChange={handleChange}
              className={style.input}
            />
            {errors.firstName && touched.firstName ? (
              <span className={style.form_error}>{errors.firstName}</span>
            ) : null}
          </div>

          <div className={style.input_box}>
            <label htmlFor="phone">Phone: </label>
            <input
              id="phone"
              type="text"
              value={values.phone}
              onChange={handleChange}
              className={style.input}
            />
            {errors.phone && touched.phone ? (
              <span className={style.form_error}>{errors.phone}</span>
            ) : null}
          </div>
          <div className={style.buttons_box_form}>
            <button type="submit" className={style.button_submit}>
              Add a waiter
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
