import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import FromContainer from "../components/FromContainer";
import { savePaymentMethod } from "../redux/actions/cartActions";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.asem);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("Paypal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(savePaymentMethod(paymentMethod));

    history.push("/placeorder");
  };

  return (
    <FromContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>

            <Form.Check
              type="radio"
              label="Stripe"
              id="Stripe"
              name="paymentMethod"
              value="Stripe"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FromContainer>
  );
};

export default PaymentScreen;
