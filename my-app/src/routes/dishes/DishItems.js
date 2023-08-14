export default function DishItems({ dish }) {
  function onEditBtnClick() {}

  function onDeleteBtnClick() {}
  return (
    <li>
      <span>{dish.name}</span>
      <span>{dish.description}</span>
      <span>{dish.price}</span>
      <button onClick={onEditBtnClick}>Edit</button>
      <button onClick={onDeleteBtnClick}>Delete</button>
    </li>
  );
}
