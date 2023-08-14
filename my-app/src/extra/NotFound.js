import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      This page does not exist. <Link to="/order">Let`s try again</Link>
    </div>
  );
}
