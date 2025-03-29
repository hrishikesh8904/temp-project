import "./LoginPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link } from "react-router";

function SignupPage() {
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
                    <h2 className="fw-bold mb-3 text-center">SIGNUP</h2>
                    <p className="text-white-50 text-center mb-4">
                      Register To Our Platform
                    </p>
                    <Form>
                      <Form.Group className="mb-2" controlId="formBasicText">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" />
                      </Form.Group>
                      <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email Address"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Create New Password"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group
                        className="mb-5"
                        controlId="formBasicConfirmPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Re enter password"
                        ></Form.Control>
                      </Form.Group>
                      <Container className="d-flex justify-content-center">
                        <Button variant="primary" type="submit">
                          Register
                        </Button>
                      </Container>
                      <p className="text-white-50 text-center mt-3">
                        Existing User?{" "}
                        <Button variant="link" as={Link} to="/">
                          Click Here
                        </Button>
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

export default SignupPage;
