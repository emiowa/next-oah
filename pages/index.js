import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout"
import Link from 'next/link';
import { useRouter } from 'next/router';
import WaterfallHouseAnimation from '../components/WaterfallHouseAnimation';

export default function Home(){
	const router = useRouter();
	return (
		<div>
				<Layout>
					<div className='container-fluid mt-5 pt-4 mx-0 px-0'>
						<div className='positionRelativeMobile'>
							<WaterfallHouseAnimation className='styleBackgroundAnimation styleBackgroundAnimationMobile' />
						</div>
						<div className='row'>
							<div className='col-6'></div>
							<div className='col text-white me-5 pe-5 ms-5' id='containerMobile'>
								<div className='vh-100 vw-auto d-flex flex-column justify-content-lg-center justify-content-start align-items-lg-start align-items-end initialTextMobile'>
									<h1 className='display-1' id='titleHomeMobile'>OAH<br />Architecture</h1>
									<p className='fst-italic textConcept'>Construyamos juntos espacios más amigables y conscientemente diseñados.</p>
									<p className='textCreatedBy'>creado por Emi Owashi</p>
								</div>
								<div className='vh-100 vw-auto d-flex flex-column justify-content-center'>
									<h2 className='fw-light display-3' id='titleH2Mobile'>Historias de usuarios</h2>
									<p id='paragraphMobile'>Cuando el habitar un espacio se convierte en parte de tu rutina diaria, empiezas a identificar sus virtudes y defectos, empiezas a adquirir un gusto por pasar más tiempo en un área que en otra.</p>
									<div className='mt-3 buttonMobile'>
										<Link href="/blog/historias-de-usuarios" className="readMoreButton readMoreLinkStyle">Cuéntame más!</Link>
									</div>
								</div>
								<div className='vh-100 vw-auto d-flex flex-column justify-content-center'>
									<h2 className='fw-light display-3' id='titleH2Mobile'>Habitemos la<br /> Arquitectura</h2>
									<p id='paragraphMobile'>La Arquitectura es mucho más que un edificio para ser admirado, la arquitectura es creada para ser habitada.</p>
									<div className='mt-3 buttonMobile'>
										<Link href="/blog/habitemos-la-arquitectura" className="readMoreButton readMoreLinkStyle">Cuéntame más!</Link>
									</div>
								</div>
								<div className='vh-100 vw-auto d-flex flex-column justify-content-center'>
									<h2 className='fw-light display-3' id='titleH2Mobile'>Hablemos de<br /> Arquitectura</h2>
									<p id='paragraphMobile'>¿Cómo estamos diseñando nuestras ciudades? ¿Estamos comprometidos con mejorar o seguimos cometiendo los mismos errores del pasado?</p>
									<div className='mt-3 buttonMobile'>
										<Link href="/blog/hablemos-de-arquitectura" className="readMoreButton readMoreLinkStyle">Cuéntame más!</Link>
									</div>
								</div>
								
							</div>
						</div>
						
					</div>
				</Layout>
		</div>
		)
}