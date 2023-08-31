import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DEFAULT_DISH } from "../../store/reducers/dishReducer";
import { selectDishEdit } from "../../store/selectors";
import { save } from "../../store/actions/dishActions";
import { validationSchemaDish } from "../../extra/form-rules/dishRules";

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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Dish name :</label>
            <input
              id="name"
              value={values.name}
              type="text"
              onChange={handleChange}
            />
            {errors.name && touched.name ? <span>{errors.name}</span> : null}
          </div>
          <div>
            <label htmlFor="description">Dish description:</label>
            <input
              id="description"
              type="text"
              value={values.description}
              onChange={handleChange}
            />
            {errors.description && touched.description ? (
              <span>{errors.description}</span>
            ) : null}
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              id="price"
              type="text"
              value={values.price}
              onChange={handleChange}
            />
            {errors.price && touched.price ? <span>{errors.price}</span> : null}
          </div>
          <button type="submit">Add a dish</button>
          <button onClick={goBackBtn}>Back to previous page</button>
        </form>
      )}
    </Formik>
  );
}
