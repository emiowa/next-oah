import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header(){
	const router = useRouter();
	return(
        <div>
			<nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
				<div className='container-fluid mx-lg-5'>
					<a className='navbar-brand mb-0 display-3' href='#'>OAH<br />Architecture</a>
					<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse navbarAlignLeft centerTextMenuMobile' id='navbarSupportedContent'>
						<ul className='navbar-nav mb-2 mb-lg-0 centerTextDropdownMobile'>
							<li className='nav-item ps-lg-4'>
								<a className={router.pathname === '/' ? 'nav-link text-body fw-bold active' : 'nav-link text-body'} aria-current='page' href='/'>HOME</a>
							</li>
							<li className='nav-item dropdown ps-lg-4'>
								<a className= {(router.pathname === '/about/about-me' || router.pathname === '/about/about-oah-architecture') ? 'dropdown-toggle nav-link text-body fw-bold active' : 'dropdown-toggle nav-link text-body'} href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>ABOUT</a>
								<ul className='dropdown-menu centerTextDropdownMobile' aria-labelledby='navbarDropdown'>
									<li><a className= {router.pathname === '/about/about-me' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href='/about/about-me'>About me</a></li>
									<li><a className={router.pathname === '/about/about-oah-architecture' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href='/about/about-oah-architecture'>About OAH Architecture</a></li>
								</ul>
							</li>
							<li className='nav-item dropdown ps-lg-4'>
								<a className={(router.pathname === '/blog/user-stories' || router.pathname === '/blog/lets-inhabit-architecture' || router.pathname === '/blog/lets-talk-about-architecture') ? 'dropdown-toggle nav-link text-body fw-bold active' : 'dropdown-toggle nav-link text-body'} href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>BLOG</a>
								<ul className='dropdown-menu centerTextDropdownMobile' aria-labelledby='navbarDropdown'>
									<li><a className={router.pathname === '/blog/user-stories' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href='/blog/user-stories'>User stories</a></li>
									<li><a className={router.pathname === '/blog/lets-inhabit-architecture' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href='/blog/lets-inhabit-architecture'>Let's inhabit architecture</a></li>
									<li><a className={router.pathname === '/blog/lets-talk-about-architecture' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href='/blog/lets-talk-about-architecture'>Let's talk about architecture</a></li>
								</ul>
							</li>
							<li className='nav-item ps-lg-4'>
								<a className= {router.pathname === '/contact' ? 'nav-link text-body fw-bold active' : 'nav-link text-body'} aria-current='page' href='/contact'>CONTACT</a>
							</li>
							<li className='nav-item dropdown ps-lg-4'>
								<a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe-americas" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/></svg>
								</a>
								<ul className='dropdown-menu centerTextDropdownMobile' aria-labelledby='navbarDropdown'>
									<li><a className='dropdown-item bg-light fw-bold text-body active' href='#'>English</a></li>
									<li><a className='dropdown-item' href='#'>Spanish</a></li>
									<li><a className='dropdown-item' href='#'>French</a></li>
									<li><a className='dropdown-item' href='#'>Japanese</a></li>
								</ul>
							</li>
						</ul>

					</div>
				</div>

			</nav>
			


			{/* <div className="container">
				<header className="d-flex flex-wrap justify-content-center py-3 my-0 mx-0 px-5 border-bottom fixed-top bg-body w-100">
					<Link href="/" className="d-flex align-items-center mb-0 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
						<span className="fs-5 text-body lh-sm">OAH<br />Architecture</span>
					</Link>


					<ul className="nav d-flex align-items-center">
						<li className="nav-item"><Link href="/" className={router.pathname === '/' ? 'nav-link text-body fw-bold active' : 'nav-link  text-body'}>HOME</Link></li>
						<div className="dropdown">
							<Link href="#" className={(router.pathname === '/about/about-me' || router.pathname === '/about/about-oah-architecture') ? 'dropdown-toggle nav-link text-body fw-bold active' : 'dropdown-toggle nav-link text-body'} data-bs-toggle="dropdown" aria-expanded="false">ABOUT</Link>
							<ul className="dropdown-menu text-small shadow">
								<li><Link className={router.pathname === '/about/about-me' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href="/about/about-me">About me</Link></li>
								<li><Link className={router.pathname === '/about/about-oah-architecture' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href="/about/about-oah-architecture">About OAH Architecture</Link></li>
							</ul>
						</div>
						<div className="dropdown">
							<Link href="#" className={(router.pathname === '/blog/user-stories' || router.pathname === '/blog/lets-inhabit-architecture' || router.pathname === '/blog/lets-talk-about-architecture') ? 'dropdown-toggle nav-link text-body fw-bold active' : 'dropdown-toggle nav-link text-body'} data-bs-toggle="dropdown" aria-expanded="false">BLOG</Link>
							<ul className="dropdown-menu text-small shadow">
							<li><Link className={router.pathname === '/blog/user-stories' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href="/blog/user-stories">User stories</Link></li>
							<li><Link className={router.pathname === '/blog/lets-inhabit-architecture' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href="/blog/lets-inhabit-architecture">Let's inhabit Architecture</Link></li>
							<li><Link className={router.pathname === '/blog/lets-talk-about-architecture' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href="/blog/lets-talk-about-architecture">Let's talk about Architecture</Link></li>
							</ul>
						</div>
						<li className="nav-item"><Link href="/contact" className={router.pathname === '/contact' ? 'nav-link text-body fw-bold active' : 'nav-link text-body'}>CONTACT</Link></li>
						<div className="dropdown">
							<Link href="#" className="dropdown-toggle nav-link text-body" data-bs-toggle="dropdown" aria-expanded="false">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe-americas" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/></svg>
							</Link>
							<ul className="dropdown-menu text-small shadow">
							<li><Link className="dropdown-item bg-light fw-bold text-body active" href="#" aria-current="page">English</Link></li>
							<li><Link className="dropdown-item" href="#">Spanish</Link></li>
							<li><Link className="dropdown-item" href="#">French</Link></li>
							<li><Link className="dropdown-item" href="#">Japanese</Link></li>
							</ul>
						</div>
					</ul>
				</header>
			</div> */}
		</div>
    )
}