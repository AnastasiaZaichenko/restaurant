import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DEFAULT_DISH } from "../../store/reducers/dishReducer";
import { selectDishEdit } from "../../store/selectors";
import { save } from "../../store/actions/dishActions";
import { validationSchemaDish } from "../../extra/form-rules/dishRules";
import style from "../commonStyle.module.css";

export default function DishForm() {
  const dishEdit = useSelector(selectDishEdit);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSubmit(value, actions) {
    const dish = {
      ...dishEdit,
      name: value.name,
      description: value.description,
      price: Number(value.price),
    };
    actions.resetForm({
      values: DEFAULT_DISH,
    });

    dispatch(save(dish));
    navigate("/dish");
  }

  function goBackBtn() {
    navigate("/dish");
  }

  return (
    <Formik
      enableReinitialize
      initialValues={dishEdit}
      validationSchema={validationSchemaDish}
      onSubmit={onSubmit}
    >
      {({ values, handleSubmit, handleChange, errors, touched }) => (
        <form onSubmit={handleSubmit} className={style.form_box}>
          <div className={style.inputs}>
            <div className={style.form_error}>
              <label htmlFor="name">Dish name: </label>
              <input
                id="name"
                value={values.name}
                type="text"
                onChange={handleChange}
                className={style.input}
              />
              {errors.name && touched.name ? (
                <span className={style.form_error}>{errors.name}</span>
              ) : null}
            </div>
            <div className={style.input_box}>
              <label htmlFor="description">Dish description: </label>
              <input
                id="description"
                type="text"
                value={values.description}
                onChange={handleChange}
                className={style.input}
              />
              {errors.description && touched.description ? (
                <span className={style.form_error}>{errors.description}</span>
              ) : null}
            </div>
            <div className={style.input_box}>
              <label htmlFor="price">Price: </label>
              <input
                id="price"
                type="text"
                value={values.price}
                onChange={handleChange}
                className={style.input}
              />
              {errors.price && touched.price ? (
                <span className={style.form_error}>{errors.price}</span>
              ) : null}
            </div>
          </div>
          <div className={style.buttons_box}>
            <button type="submit" className={style.button_submit}>
              Add a dish
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
