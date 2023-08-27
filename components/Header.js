import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header(){

	// const router = useRouter();
	// console.log(router.asPath);

	// const data = [
	// 	{label: "Home", path: "/"},
	// 	{label: "About", path: "/about"},
	// 	{label: "Blog", path: "/blog"},
	// 	{label: "Contact", path: "/contact"}
	// ]
	const router = useRouter();
	return(
        <div>
			<link href="https://getbootstrap.com/docs/5.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossOrigin="anonymous"/>

		
			<div className="container">
				<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
				<Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
					<span className="fs-6">OAH<br />Architecture</span>
				</Link>

					{/* <ul>
						{data.map((menuTab) => {
								const isHome = router.asPath === "/";
								const isActive = isHome ? menuTab.path === "/" : router.asPath.includes(menuTab.path); // Is the path of menuTab includes in the current Path?
								// IsActive return true or false
								return (<li key={menuTab.label}>
											<a href={menuTab.path} className={isActive ? "bold" : "regular"}> {menuTab.label}</a>
										</li>);
						})}
					</ul> */}
					{/* aria-current={router.pathname === '/' ? 'page' : ''} */}


					<ul className="nav nav-pills">
						<li className="nav-item"><Link href="/" className={router.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link></li>
						<div className="dropdown">
							<Link href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown" aria-expanded="false">About</Link>
							<ul className="dropdown-menu text-small shadow">
							<li><Link className="dropdown-item" href="/about/about-me">About me</Link></li>
							<li><Link className="dropdown-item" href="/about/about-oah-architecture">About OAH Architecture</Link></li>
							</ul>
						</div>
						<div className="dropdown">
							<Link href="#" className=" dropdown-toggle nav-link" data-bs-toggle="dropdown" aria-expanded="false">Blog</Link>
							<ul className="dropdown-menu text-small shadow">
							<li><Link className="dropdown-item" href="/blog/user-stories">User stories</Link></li>
							<li><Link className="dropdown-item" href="/blog/lets-inhabit-architecture">Let's inhabit Architecture</Link></li>
							<li><Link className="dropdown-item" href="/blog/lets-talk-about-architecture">Let's talk about Architecture</Link></li>
							</ul>
						</div>
						<li className="nav-item"><Link href="/contact" className={router.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link></li>
						<div className="dropdown">
							<Link href="#" className=" dropdown-toggle nav-link" data-bs-toggle="dropdown" aria-expanded="false">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe-americas" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/></svg>
							</Link>
							<ul className="dropdown-menu text-small shadow">
							<li><Link className="dropdown-item active" href="#" aria-current="page">English</Link></li>
							<li><Link className="dropdown-item" href="#">Spanish</Link></li>
							<li><Link className="dropdown-item" href="#">French</Link></li>
							<li><Link className="dropdown-item" href="#">Japanese</Link></li>
							</ul>
						</div>
					</ul>
				</header>
			</div>

			<style jsx>{`
				.active{
					font-weight: bold;
				}
				.nav-link{
					color: #333;
					font-family: 'Lato', sans-serif;
				}
				span{
					font-family: 'Lato', sans-serif;
					color: #333;
					line-height: 1;
				}
			`}</style>
			<script src="https://getbootstrap.com/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossOrigin="anonymous"></script>
		</div>
    )
}