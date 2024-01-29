import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import VillaSavoyeAnimation from './VillaSavoyeAnimation';

export default function Footer(){
	return (
			<div>
				<div classNameName="container-fluid">
					<div className="row py-5 bg-dark">
							<div className="col-12 col-sm-12 col-lg-6 text-light px-5 paddingFooter">
								<h5>OAH<br />Architecture</h5>
								<p>Design is more important and necessary than we thought, good design can affect people's lives, habits, routines and feelings in a positive way.</p>
								<div className="d-flex flex-column">
									<p className='text-center'>Let's enjoy Architecture! Follow me!</p>
									<div className='d-flex justify-content-center'>
										<Link href='https://www.tiktok.com/@oaharchitecture' target='_blank' className='px-2'><box-icon type='logo' name='tiktok' color='rgba(248,249,250,1)'></box-icon></Link>
										<Link href='https://www.instagram.com/oaharchitecture/' target='_blank' className='px-2'><box-icon type='logo' name='instagram-alt' color='rgba(248,249,250,1)'></box-icon></Link>
										<Link href='https://www.youtube.com/channel/UCcxIIl5MqzpWqK6YUnWVHuw' target='_blank' className='px-2'><box-icon type='logo' name='youtube' color='rgba(248,249,250,1)'></box-icon></Link>
										<Link href='https://www.pinterest.es/oaharchitecture/' target='_blank' className='px-2'><box-icon type='logo' name='pinterest' color='rgba(248,249,250,1)'></box-icon></Link>
									</div>
									<br />
									<div className='contactUsButtonMobile'>
										<button className='contactUsButton'>Contact me</button>
									</div>
								</div>
							</div>
							<div className='col-12 col-sm-12 col-lg-6 col-xxl-4 px-4 d-flex justify-content-center'>
								<VillaSavoyeAnimation width={550} height={250} className='img-fluid' />
							</div>

						<div className="text-center pt-2 my-1 text-light">
							<small>&copy; OAH Architecture. All rights reserved.</small>
						</div>
					</div>
				</div>
				<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
			</div>
	)
}