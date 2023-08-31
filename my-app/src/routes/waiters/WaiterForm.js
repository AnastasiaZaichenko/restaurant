import { Formik } from "formik";
import { selectWaiterEdit } from "../../store/selectors";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_WAITER } from "../../store/reducers/waiterReducer";
import { save } from "../../store/actions/waiterActions";
import { validationSchemaWaiter } from "../../extra/form-rules/waiterRules";
import style from "./WaiterForm.module.css";

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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">Name :</label>
            <input
              value={values.firstName}
              type="text"
              id="firstName"
              onChange={handleChange}
            />
            {errors.firstName && touched.firstName ? (
              <span>{errors.firstName}</span>
            ) : null}
          </div>

          <div>
            <label htmlFor="phone">Phone :</label>
            <input
              id="phone"
              type="text"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && touched.phone ? <span>{errors.phone}</span> : null}
          </div>
          <button type="submit" className={style.button_submit}>
            Add a waiter
          </button>
          <button onClick={goBackBtn} className={style.button_back}>
            Back to previous page
          </button>
        </form>
      )}
    </Formik>
  );
}
