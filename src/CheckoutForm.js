import {useStripe} from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = () => {
  const stripe = useStripe();
  const handleGuestCheckout = async (e) => {
    e.preventDefault();
    // const response = await axios.post('http://localhost:3000/create-account-link', {
    //   email: 'sajjad.alam@fissionlabs.com',
    //   redirectUrl: 'http://localhost:3001/onboarding-success',
    // });
    // console.log({response})
    const { data } = await axios.post('http://localhost:3000/payment', {
      candidateSalary: 1000
    })
    console.log({data})
    const { error } = await stripe.redirectToCheckout({
      sessionId: "cs_test_a16gD0Uz4bCvf3QFVtUFZ2Ari7hexKEmYGpGsUYMyQE6ESK57kwdthhaP7"
    });
    
    if (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleGuestCheckout}>
      <button disabled={!stripe}>Submit</button>
    </form>
  )
};

export default CheckoutForm;