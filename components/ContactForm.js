import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactForm(){
	return (
		<form className="d-flex flex-column text-center" action="https://api.web3forms.com/submit" method="POST">
			<input type="hidden" name="access_key" value="9ee00361-87a3-45b6-8a5e-138f253c3bb8" />
			<input className='inputStyle fw-light' type="text" id="name" name="name" placeholder="¿Cómo te llamas?" required />
			<input className='inputStyle fw-light' type="email" id="email" name="email" placeholder="¿Cuál es tu correo electrónico?" required />
			<input className='inputStyle fw-light' type="text" id="subject" name="subject" placeholder="Dame una pista, ¿de qué quieres hablar?" required />
			<textarea className='inputStyle fw-light' id="message" cols="50" rows="5" name="message" placeholder="Ahora sí, cuéntamelo todo, ¿en qué te puedo ayudar?" required></textarea>
			<button className='sendMessageButton' type="submit">Enviar!</button>
			<input type="hidden" name="redirect" value="https://oaharchitecture.com"></input>
			<script src="https://web3forms.com/client/script.js" async defer></script>
	  	</form>
	)
}