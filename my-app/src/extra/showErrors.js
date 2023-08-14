import { Modal } from "antd";

export default function showError(e) {
  return Modal.error({
    title: e.message,
  });
}
