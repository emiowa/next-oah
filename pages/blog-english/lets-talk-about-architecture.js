import Layout from "../../components/Layout";
import Link from 'next/link';
import PortaFiraAnimation from "../../components/PortaFiraAnimation";

export default function LetsTalkAboutArch(){
	function LetsTalkAboutArchitectureHomeLink(){}
	return (<div>
				<Layout>
					<div className='container-fluid mt-5 pt-4 mx-0 px-lg-5 vh-lg-100 mb-5'>
						<div className='row d-flex'>
							<div className="col-lg-6 ms-lg-5 textStyleResponsive">
								<h1 className="display-lg-2 display-1 text-center mt-5 mb-5">Let's talk about Architecture</h1>
								<p className="paragraphStyle">In my daily life, I have encountered situations that have made me question and reflect on the way we are designing our cities. Are we committed to improvement, or are we continuing to make the same mistakes of the past?<br /><br />
								Our goal as architects should be to achieve a balance between aesthetics and functionality. However, we have often erred by sacrificing one for the other, sometimes innocently and without being fully aware of the repercussions these decisions can have on the people who will inhabit these spaces.<br /><br />
								Welcome to LET’S TALK ABOUT ARCHITECTURE!</p>
								<div className="mt-5 text-center">
									<button className="goToButton" onClick={LetsTalkAboutArchitectureHomeLink}>
										<Link href="/blog/lets-talk-about-architecture-home" className="linkStyle">Let's Go!</Link>
									</button>
								</div>
							</div>
							<div className='styleBackgroundBlogAnimation'>
								<PortaFiraAnimation className='img-fluid portaFiraAnimationStyle'/>
							</div>
						</div>
					</div>
				</Layout>
			</div>)
}