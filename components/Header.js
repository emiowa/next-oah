import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header(){
	const router = useRouter();
	return(
        <div>
			<nav classNameName='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
				<div classNameName='container-fluid mx-lg-5'>
					<Link classNameName='navbar-brand mb-0 display-3' href='/'>OAH<br />Architecture</Link>
					<button classNameName='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
						<span classNameName='navbar-toggler-icon'></span>
					</button>
					<div classNameName='collapse navbar-collapse navbarAlignLeft centerTextMenuMobile' id='navbarSupportedContent'>
						<ul classNameName='navbar-nav mb-2 mb-lg-0 centerTextDropdownMobile'>
							<li classNameName='nav-item ps-lg-4'>
								<Link classNameName={router.pathname === '/' ? 'nav-link text-body fw-bold active' : 'nav-link text-body'} aria-current='page' href='/'>HOME</Link>
							</li>
							<li classNameName='nav-item dropdown ps-lg-4'>
								<Link classNameName= {(router.pathname === '/about/sobre-mi' || router.pathname === '/about/sobre-oah-architecture') ? 'dropdown-toggle nav-link text-body fw-bold active' : 'dropdown-toggle nav-link text-body'} href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>ABOUT</Link>
								<ul classNameName='dropdown-menu centerTextDropdownMobile' aria-labelledby='navbarDropdown'>
									<li><Link classNameName= {router.pathname === '/about/sobre-mi' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href='/about/sobre-mi'>Sobre mí</Link></li>
									<li><Link classNameName={router.pathname === '/about/sobre-oah-architecture' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href='/about/sobre-oah-architecture'>Sobre OAH Architecture</Link></li>
								</ul>
							</li>
							<li classNameName='nav-item dropdown ps-lg-4'>
								<Link classNameName={(router.pathname === '/blog/historias-de-usuarios' || router.pathname === '/blog/habitemos-la-arquitectura' || router.pathname === '/blog/hablemos-de-arquitectura' || router.pathname === '/blog/hablemos-de-arquitectura-home' || router.pathname === '/blog/hablemos-de-arquitectura/[id]') ? 'dropdown-toggle nav-link text-body fw-bold active' : 'dropdown-toggle nav-link text-body'} href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>BLOG</Link>
								<ul classNameName='dropdown-menu centerTextDropdownMobile' aria-labelledby='navbarDropdown'>
									<li><Link classNameName={router.pathname === '/blog/historias-de-usuarios' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href='/blog/historias-de-usuarios'>Historias de usuarios</Link></li>
									<li><Link classNameName={router.pathname === '/blog/habitemos-la-arquitectura' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href='/blog/habitemos-la-arquitectura'>Habitemos la Arquitectura</Link></li>
									<li><Link classNameName={(router.pathname === '/blog/hablemos-de-arquitectura' || router.pathname === '/blog/hablemos-de-arquitectura-home' || router.pathname === '/blog/hablemos-de-arquitectura/[id]') ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href='/blog/hablemos-de-arquitectura'>Hablemos de Arquitectura</Link></li>
								</ul>
							</li>
							<li classNameName='nav-item ps-lg-4'>
								<Link classNameName= {router.pathname === '/contact' ? 'nav-link text-body fw-bold active' : 'nav-link text-body'} aria-current='page' href='/contact'>CONTACT</Link>
							</li>
							{/* <li classNameName='nav-item dropdown ps-lg-4'>
								<a classNameName='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classNameName="bi bi-globe-americas" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/></svg>
								</a>
								<ul classNameName='dropdown-menu centerTextDropdownMobile' aria-labelledby='navbarDropdown'>
									<li><a classNameName='dropdown-item bg-light fw-bold text-body active' href='#'>English</a></li>
									<li><a classNameName='dropdown-item' href='#'>Spanish</a></li>
									<li><a classNameName='dropdown-item' href='#'>French</a></li>
									<li><a classNameName='dropdown-item' href='#'>Japanese</a></li>
								</ul>
							</li> */}
						</ul>
					</div>
				</div>
			</nav>
		</div>
    )
}