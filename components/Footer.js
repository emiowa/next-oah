import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import VillaSavoyeAnimation from './VillaSavoyeAnimation';

export default function Footer(){
	const router = useRouter();

	return (
			<div>
				{/* <link href="https://getbootstrap.com/docs/5.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossOrigin="anonymous"/> */}

				<div classNameName="container">
					<div className="py-5 bg-dark">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 text-light px-5">
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
							<div className='col-12 col-sm-12 col-md-6 px-5 pt-3 d-flex justify-content-center'>
								<VillaSavoyeAnimation width={550} height={250} className='img-fluid' />
							</div>
						</div>

						<div className="text-center pt-2 my-1 text-light">
							<small>&copy; OAH Architecture. All rights reserved.</small>
						</div>
					</div>
				</div>
				{/* <script src="https://getbootstrap.com/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossOrigin="anonymous"></script> */}
				<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
			</div>
	)
}