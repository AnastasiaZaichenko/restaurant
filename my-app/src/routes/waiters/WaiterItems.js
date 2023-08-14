export default function WaiterItems({ waiter }) {
  function onEditBtnClick() {}
  function onDeleteBtnClick() {}

  return (
    <li>
      <span>{waiter.firstName}</span>
      <span>{waiter.phone}</span>
      <button onClick={onEditBtnClick}>Edit</button>
      <button onClick={onDeleteBtnClick}>Delete</button>
    </li>
  );
}
