import { Alert } from "react-bootstrap";

const Notify = ({ variant = "danger", msg = "No msg set" }) => {
  return (
    <div>
      <Alert variant={variant} className="text-center">
        {msg}
      </Alert>
    </div>
  );
};

export default Notify;
