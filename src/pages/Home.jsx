import { Card } from "react-bootstrap";
import Input from "../components/Input";

const Home = () => {
  return (
    <div className="container">
      <div className="row mt-2">
        <h1 className="text-center">Activity Tracker</h1>
      </div>
      <div className="row">
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <Card.Body>
            <Input />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
