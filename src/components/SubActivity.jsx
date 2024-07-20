import { Button, Form } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

const SubActivity = () => {
  return (
    <div className="row mb-2">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <Form.Check type="checkbox" />
          <div className="px-2">Sub Activity 1</div>
        </div>
        <div>
          <Button variant="danger" size="sm">
            <FaTrashAlt />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubActivity;
