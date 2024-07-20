import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { update } from "../services/subActivities";

const SubActivity = ({ data }) => {
  const [isCheck, setIsChecked] = useState(null);
  const handleDelete = (id) => {
    // Call the subactivity delete API call using id
  };

  const handleUpdate = async (data) => {
    const { _id, isCompleted } = data;
    const payload = {
      isCompleted: !isCompleted,
    };
    const { data: newData } = await update(_id, payload);
    setIsChecked(newData?.data?.isCompleted);
  };

  return (
    <div className="row mb-2">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <Form.Check
            type="checkbox"
            checked={isCheck || data?.isCompleted}
            onChange={() => handleUpdate(data)}
          />
          <div className="px-2">{data?.name}</div>
        </div>
        <div>
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleDelete(data?._id)}
          >
            <FaTrashAlt />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubActivity;
