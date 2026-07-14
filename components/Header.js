import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header(){
	const router = useRouter();
	return(
        <div>
			<nav className='navbar navbar-expand-lg fixed-top bg-white'>
				<div className='container-fluid mx-lg-5'>
					<Link className='navbar-brand mb-0' href='/'>
						<Image src='/logo.svg' alt='OAH Architecture logo' width={120} height={60} priority />
					</Link>
					<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse navbarAlignLeft centerTextMenuMobile' id='navbarSupportedContent'>
						<ul className='navbar-nav mb-2 mb-lg-0 centerTextDropdownMobile'>
							<li className='nav-item ps-lg-4'>
								<Link className={router.pathname === '/' ? 'nav-link text-body fw-bold active' : 'nav-link text-body'} aria-current='page' href='/'>HOME</Link>
							</li>
							<li className='nav-item dropdown ps-lg-4'>
								<Link className={(router.pathname === '/about/sobre-mi' || router.pathname === '/about/sobre-oah-architecture') ? 'dropdown-toggle nav-link text-body fw-bold active' : 'dropdown-toggle nav-link text-body'} href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>ABOUT</Link>
								<ul className='dropdown-menu centerTextDropdownMobile' aria-labelledby='navbarDropdown'>
									<li><Link className={router.pathname === '/about/sobre-mi' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href='/about/sobre-mi'>Sobre mí</Link></li>
									<li><Link className={router.pathname === '/about/sobre-oah-architecture' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href='/about/sobre-oah-architecture'>Sobre OAH Architecture</Link></li>
								</ul>
							</li>
							<li className='nav-item dropdown ps-lg-4'>
								<Link className={(router.pathname === '/blog/historias-de-usuarios' || router.pathname === '/blog/habitemos-la-arquitectura' || router.pathname === '/blog/hablemos-de-arquitectura' || router.pathname === '/blog/hablemos-de-arquitectura-home' || router.pathname === '/blog/hablemos-de-arquitectura/[id]') ? 'dropdown-toggle nav-link text-body fw-bold active' : 'dropdown-toggle nav-link text-body'} href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>BLOG</Link>
								<ul className='dropdown-menu centerTextDropdownMobile' aria-labelledby='navbarDropdown'>
									<li><Link className={router.pathname === '/blog/historias-de-usuarios' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href='/blog/historias-de-usuarios'>Historias de usuarios</Link></li>
									<li><Link className={router.pathname === '/blog/habitemos-la-arquitectura' ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href='/blog/habitemos-la-arquitectura'>Habitemos la Arquitectura</Link></li>
									<li><Link className={(router.pathname === '/blog/hablemos-de-arquitectura' || router.pathname === '/blog/hablemos-de-arquitectura-home' || router.pathname === '/blog/hablemos-de-arquitectura/[id]') ? 'dropdown-item bg-light fw-bold text-body active' : 'dropdown-item'} href='/blog/hablemos-de-arquitectura'>Hablemos de Arquitectura</Link></li>
								</ul>
							</li>
							<li className='nav-item ps-lg-4'>
								<Link className={router.pathname === '/contact' ? 'nav-link text-body fw-bold active' : 'nav-link text-body'} aria-current='page' href='/contact'>CONTACT</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
    )
}