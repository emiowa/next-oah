import Layout from "../../components/Layout";
import Link from 'next/link';
import PlazaLibertadAnimation from "../../components/PlazaLibertadAnimation";

export default function LetsInhabitArch(){
	function ComingSoonLink(){}
	return (<div>
				<Layout>
					<div className='container-fluid mt-5 pt-4 mx-0 px-lg-5 vh-lg-100 mb-5'>
						<div className='row d-flex'>
							<div className="col-lg-6 ms-lg-5 textStyleResponsive">
								<h1 className="display-lg-2 display-1 text-center mt-5 mb-5">Let's inhabit Architecture</h1>
								<p className="paragraphStyle">The world is full of impressive architectural projects that, just by looking at photographs of them, are enough to marvel at. However, architecture is much more than a building to be admired; architecture is created to be inhabited.<br /><br />
								I had the opportunity to travel to different countries and visit various architectural projects. It's simply incredible how each of them has its own essence. It is the social and cultural component that makes them so unique. The context in which they are located.<br /><br />
								Welcome to LET’S INHABIT ARCHITECTURE!</p>
								<div className="mt-5 text-center">
									<button className="goToButtonUS" onClick={ComingSoonLink}>
										<Link href="/coming-soon" className="linkStyle">Let's Go!</Link>
									</button>
								</div>
							</div>
							<div className='styleBackgroundBlogAnimation'>
								<PlazaLibertadAnimation className='img-fluid plazaLibertadAnimationStyle'/>
							</div>
						</div>
					</div>
				</Layout>
			</div>)
}