export default function OrderItems({ order }) {
  function onEditBtnClick() {}
  function onDeleteBtnClick() {}
  return (
    <li>
      <span>{order.table.number}</span>

      <span>{order.waiter.firstName}</span>

      <span>счет</span>

      <button onClick={onEditBtnClick}>Edit</button>
      <button onClick={onDeleteBtnClick}>Delete</button>
    </li>
  );
}
