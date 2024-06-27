'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Menu() {
  const pathname = usePathname();
  const [currentMenuItem, setCurrentMenuItem] = useState('');

  useEffect(() => {
    setCurrentMenuItem(pathname);
  }, [pathname]);

  const checkCurrentMenuItem = (path) =>
    currentMenuItem === path ? 'current-menu-item' : '';
  const checkParentActive = (paths) =>
    paths.some((path) => currentMenuItem.startsWith(path))
      ? 'current-menu-item'
      : '';

  return (
    <nav id="main-nav" className="main-nav">
      <ul id="menu-primary-menu" className="menu">
        <li
          className={`menu-item menu-item-has-children ${checkParentActive([
            '/primary-market',
            '/secondary-market',
            '/project-grid-3',
            '/project-grid-4',
            '/project-grid-5',
            '/project-list',
            '/project-details',
            '/submit-project',
          ])}`}
        >
          <Link href="#">Markets</Link>
          <ul className="sub-menu">
            <li
              className={`menu-item ${checkCurrentMenuItem('/primary-market')}`}
            >
              <Link href="/primary-market">Primary</Link>
            </li>
            <li
              className={`menu-item ${checkCurrentMenuItem(
                '/secondary-market'
              )}`}
            >
              <Link href="/secondary-market">Secondary</Link>
            </li>
            <li
              className={`menu-item ${checkCurrentMenuItem(
                '/project-details'
              )}`}
            >
              <Link href="/project-details">Project Details</Link>
            </li>
            <li
              className={`menu-item ${checkCurrentMenuItem('/submit-project')}`}
            >
              <Link href="/submit-project">Submit Project</Link>
            </li>
          </ul>
        </li>

        {/* <li
          className={`menu-item menu-item-has-children ${checkParentActive([
            '/token',
            '/connect-wallet',
            '/team-details',
            '/submit-IGO-on-chain',
            '/faq',
            '/login',
            '/register',
            '/forget-password',
          ])}`}
        >
          <Link href="#">Register/Connect</Link>
          <ul className="sub-menu">
            <li className={`menu-item ${checkCurrentMenuItem('/token')}`}>
              <Link href="/token">Token</Link>
            </li>
            <li
              className={`menu-item ${checkCurrentMenuItem('/connect-wallet')}`}
            >
              <Link href="/connect-wallet">Connect Wallet</Link>
            </li>
            <li
              className={`menu-item ${checkCurrentMenuItem('/team-details')}`}
            >
              <Link href="/team-details">Team Details</Link>
            </li>
            <li
              className={`menu-item ${checkCurrentMenuItem(
                '/submit-IGO-on-chain'
              )}`}
            >
              <Link href="/submit-IGO-on-chain">Submit IGO on chain</Link>
            </li>
            <li className={`menu-item ${checkCurrentMenuItem('/faq')}`}>
              <Link href="/faq">FAQs</Link>
            </li>
            <li className={`menu-item ${checkCurrentMenuItem('/login')}`}>
              <Link href="/login">Login</Link>
            </li>
            <li className={`menu-item ${checkCurrentMenuItem('/register')}`}>
              <Link href="/register">Register</Link>
            </li>
            <li
              className={`menu-item ${checkCurrentMenuItem(
                '/forget-password'
              )}`}
            >
              <Link href="/forget-password">Forget Password</Link>
            </li>
          </ul>
        </li> */}

        <li className={`menu-item ${checkCurrentMenuItem('/my-movies')}`}>
          <Link href="/my-movies">My Profil</Link>
        </li>

        <li
          className={`menu-item menu-item-has-children ${checkParentActive([
            '/blog',
            '/blog',
          ])}`}
        >
          <Link href="#">Services</Link>
          <ul className="sub-menu">
            <li className={`menu-item ${checkCurrentMenuItem('/blog-grid')}`}>
              <Link href="/expedition">Expédier media</Link>
            </li>
            <li className={`menu-item ${checkCurrentMenuItem('/blog-grid')}`}>
              <Link href="/provider">Stockage</Link>
            </li>
            {/* <li
              className={`menu-item ${checkCurrentMenuItem('/blog-details')}`}
            >
              <Link href="/blog-details">Blog Detail</Link>
            </li> */}
          </ul>
        </li>
        <li
          className={`menu-item ${
            pathname === '/roadmap' ? 'current-menu-item' : ''
          }`}
        >
          <Link href="/blog">Blog</Link>
        </li>
        {/* <li
          className={`menu-item ${
            pathname === '/contact' ? 'current-menu-item' : ''
          }`}
        >
          <Link href="/contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
}
