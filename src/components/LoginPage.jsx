import "./LoginPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function LoginPage() {
  return (
    <div className="home-body container-fluid vh-100 d-flex">
      <div className="col-6 d-flex align-items-center justify-content-center text-white">
        <div>
          <h1>Slack</h1>
        </div>
      </div>
      <div className="col-6 blurred-section d-flex align-items-center justify-content-center">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5">
                  <div className="pb-2">
                    <h2 className="fw-bold mb-3 text-center">LOGIN</h2>
                    <p className="text-white-50 text-center mb-4">
                      Please enter your login details
                    </p>
                    <Form>
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                      </Form.Group>
                      <Form.Group
                        className="mb-5"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter Password"
                        ></Form.Control>
                      </Form.Group>
                      <Container className="d-flex justify-content-center">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Container>
                      <p className="text-white-50 text-center mt-3">
                        New here? <Button variant="link">Click Here</Button>
                      </p>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
