import {useState} from "react";
import emailjs from '@emailjs/browser';

/**
 * This is a custom hook that can be used to submit a form and send an email
 * It uses EmailJS to send emails directly from the frontend
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      // Send email using EmailJS
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,  
        process.env.REACT_APP_TEMPLATE_ID, 
        {
          from_name: data.firstName,
          from_email: data.email,
          enquiry_type: data.type,
          message: data.comment,
        },
        process.env.REACT_APP_PUBLIC_KEY 
      );

      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      });
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
