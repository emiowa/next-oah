import Layout from "../../components/Layout";
import PlazaLibertadAnimation from "../../components/PlazaLibertadAnimation";

export default function LetsInhabitArch(){
	return (<div>
				<Layout>
					<div className='container-fluid mt-5 pt-4 mx-0 px-lg-5 vh-lg-100 mb-5'>
						<div className='row d-flex'>
							<div className="col-lg-6 ms-lg-5 textStyleResponsive">
								<h1 className="display-lg-2 display-1 text-center mt-5 mb-5">Let's inhabit Architecture</h1>
								<p className="paragraphStyle">Digital and technological tools development that we have at our disposal have allowed us to see the world through a screen. Even with the virtual reality advances, each time we get closer to living a real experience, feeling that we are in fact in a completely different place.<br /><br />
								The world is full of impressive architectural projects that just seeing photographs of them is enough to amaze us. Nevertheless, Architecture is much more than a building to be admired, Architecture is created to be inhabited.<br /><br />
								I had the chance to travel to different countries and be able to visit many architectural projects. It is just incredible how each one of them has its own essence despite making use of the same materials, constructive systems or structural systems as many other projects around the world. What makes them so unique is what provides the social and cultural component. The context where they are.<br /><br />
								As Architects, we can imagine and plan those social dynamics that we want to happen in our projects and design based on those imaginaries that we have created, however, what develops there can be completely different. Sociocultural dynamics, the way how people make use of the spaces and how they adapt them to respond properly to their real needs are some of the situations I will share in this section. Show the reality of how these projects look after years of construction.<br /><br />
								Welcome to LET’S INHABIT ARCHITECTURE!</p>
								<div className="mt-5 text-center">
									<button className="goToButtonLIA">Go to LET’S INHABIT ARCHITECTURE</button>
								</div>
							</div>
							<div className="styleBackgroundBlogAnimation">
								<PlazaLibertadAnimation className='img-fluid position-relative plazaLibertadAnimationStyle'/>
							</div>
						</div>
					</div>
				</Layout>
			</div>)
}