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
        <li className={`menu-item ${checkCurrentMenuItem('/my-profil')}`}>
          <Link href="/my-profil">My Profil</Link>
        </li>

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
              className={`menu-item ${checkCurrentMenuItem('/submit-project')}`}
            >
              <Link href="/submit-project">Submit Project</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
