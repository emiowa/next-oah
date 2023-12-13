import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactForm(){
	return (
		<form className="d-flex flex-column text-center" action="https://api.web3forms.com/submit" method="POST">
			<input type="hidden" name="access_key" value="9ee00361-87a3-45b6-8a5e-138f253c3bb8" />
			<input className='inputStyle' type="text" id="name" name="name" placeholder="Name" required />
			<input className='inputStyle' type="email" id="email" name="email" placeholder="Email address" required />
			<input className='inputStyle' type="text" id="subject" name="subject" placeholder="Subject" required />
			<textarea className='inputStyle' id="message" cols="50" rows="5" name="message" placeholder="How can I help you?" required></textarea>
			<button className='sendMessageButton' type="submit">Send</button>
	
			<script src="https://web3forms.com/client/script.js" async defer></script>
	  	</form>
	)
}