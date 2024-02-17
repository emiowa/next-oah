import Layout from "../components/Layout";
import Link from 'next/link';
import ContactForm from "../components/ContactForm"
import ComingSoonAnimation from "../components/ComingSoon";

export default function Contact(){
	return (<div>
					<Layout>
						<div className='container-fluid mt-5 mt-lg-4 mx-0 px-lg-5 heightBigScreen'>
							<div className='row d-flex justify-content-center align-items-center heightBigScreen'>
								<div className="col-sm-12 col-lg-6 d-flex justify-content-center align-items-center">
									<ComingSoonAnimation className='img-fluid mt-5 mt-lg-4 mb-lg-0 mb-3 formAnimationStyle'/>
								</div>
								<div className="col-sm-12 col-lg-6">
									<h1 className="display-lg-2 display-1 text-center mt-3 mb-3">Contáctame</h1>
									<ContactForm />
								</div>
							</div>
						</div>
					</Layout>
			</div>)
}