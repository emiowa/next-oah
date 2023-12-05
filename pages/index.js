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
									<p className='fst-italic textConcept'>Let's build together friendlier and consciously designed spaces</p>
									<p className='textCreatedBy'>created by Emi Owashi</p>
								</div>
								<div className='vh-100 vw-auto d-flex flex-column justify-content-center'>
									<h2 className='fw-light display-3' id='titleH2Mobile'>User stories</h2>
									<p id='paragraphMobile'>When inhabiting a space becomes part of your daily routine, you begin to identify its virtues and defects, you begin to acquire a taste for spending more time in some areas than in others.</p>
									<div className='buttonMobile'>
										<button className='readMoreButton'>Read more</button>
									</div>
								</div>
								<div className='vh-100 vw-auto d-flex flex-column justify-content-center'>
									<h2 className='fw-light display-3' id='titleH2Mobile'>Let's inhabit<br /> Architecture</h2>
									<p id='paragraphMobile'>Architecture is much more than a building to be admired, Architecture is created to be inhabited.</p>
									<div className='buttonMobile'>
										<button className='readMoreButton'>Read more</button>
									</div>
								</div>
								<div className='vh-100 vw-auto d-flex flex-column justify-content-center'>
									<h2 className='fw-light display-3' id='titleH2Mobile'>Let's talk about<br /> Architecture</h2>
									<p id='paragraphMobile'>How are we designing our cities? Are we committed to improving or are we still making the same mistakes of the past?</p>
									<div className='buttonMobile'>
										<button className='readMoreButton'>Read more</button>
									</div>
								</div>
								
							</div>
						</div>
						
					</div>
				</Layout>
		</div>
		)
}