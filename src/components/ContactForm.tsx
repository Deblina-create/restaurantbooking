import { useState } from "react";
// import { useHistory } from "react-router";
import "./contactForm.css";
import restaurantApi from "../api/restaurantApi";

const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, messageSent]= useState(false);
  //const history = useHistory();

  function handleNameChange(event: any) {

    setName (event.target.value);
  
  }
  
  function handleEmailChange (event: any) {
    
    setEmail (event.target.value);
  
  }
  
  function handleMessageChange (event: any) {
    
    setMessage (event.target.value);
  
  }
  
  function changeMessageStatus () {

    messageSent(true);

  }

  async function handleSubmit() {

    const payload = {
      name,
      email,
      message,
    }
    
   
    await restaurantApi.post("/contact", payload)
      .catch((error) => console.log(error))
      .then((response) => {

      
        if (response) {
          // history.push("/confirmation");
          changeMessageStatus();
          console.log(response);
        
        }
      });

  }

  return (

    //IF WWILL COME HERE

    //if (messageSent) {
    //  return
    //  ( <div id="contact-container-succes">
    //      <p>Dear {name},Your Message was Recieved!</p>
    //      </div>)
    //   } else {
    //create an if and if all is good print out if conditional rendering /react
    <div id="contact-container">
      <p>Please Contact Us Using the Form Below</p>
      <form>
        <div><input type="text" value={name} placeholder="Name" onChange={handleNameChange}/></div>
        
        <div><input type="text" value={email} placeholder="Email" onChange={handleEmailChange}/></div>
        
        <div><input type="text" value={message} placeholder="Message" onChange={handleMessageChange}/></div>

        <button type="submit" onSubmit={handleSubmit}>Send</button>

      </form>
    </div>
    //}
  );
}
 
export default ContactForm