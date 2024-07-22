import Footer from "./layouts/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
