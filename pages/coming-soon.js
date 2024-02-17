import Layout from "../components/Layout";
import ComingSoonAnimation from "../components/ComingSoon";

export default function ComingSoon(){
	return (<div>
				<Layout>
				<div className='container-fluid mt-5 mx-0 px-lg-5 px-0 vh-100'>
					<div className='row'>
						<div>
							<h1 className="display-4 text-center mt-5">¡Muy pronto!</h1>
							<p className="text-center fs-4 mt-4 mt-lg-0 fw-light" id="subtitleMobile">Emi está trabajando para ofrecerte la mejor experiencia</p>
						</div>
						<div className="d-flex justify-content-center align-items-center mt-4 mt-lg-2">
							<ComingSoonAnimation className='img-fluid comingSoonAnimationStyle'/>
						</div>
					</div>
				</div>
				</Layout>
			</div>)
}