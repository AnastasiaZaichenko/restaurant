import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTableList } from "../../store/selectors";
import TableItems from "./TableItems";
import { fetchTableList } from "../../store/actions/tableActions";

export default function TableList() {
  const dispatch = useDispatch();
  const list = useSelector(selectTableList);
  const tableList = list.map((table) => (
    <TableItems key={table.id} table={table} />
  ));

  useEffect(() => {
    dispatch(fetchTableList());
  }, [dispatch]);

  return (
    <div>
      <ul>{tableList}</ul>
      <button>
        <Link to="/table/create">Create a new table</Link>
      </button>
    </div>
  );
}
