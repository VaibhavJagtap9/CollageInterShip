// components/Sidebar.tsx

import Link from 'next/link';
import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles['sidebar-menu']}>
        <li className={styles['sidebar-menu-item']}>
          <Link href="/organization-admin" className={styles['sidebar-menu-link']}>
            Organization Admin
          </Link>
        </li>
        <li className={styles['sidebar-menu-item']}>
          <Link href="/dashboard" className={styles['sidebar-menu-link']}>
            Dashboard
          </Link>
        </li>
        <li className={styles['sidebar-menu-item']}>
          <Link href="/organization-details" className={styles['sidebar-menu-link']}>
            Organization Details
          </Link>
        </li>
        <li className={styles['sidebar-menu-item']}>
          <Link href="/post-details" className={styles['sidebar-menu-link']}>
            Post Details
          </Link>
        </li>
        <li className={styles['sidebar-menu-item']}>
          <Link href="/poster-banner-details" className={styles['sidebar-menu-link']}>
            Poster/Banner Details
          </Link>
        </li>
        <li className={styles['sidebar-menu-item']}>
          <Link href="/update-location-details" className={styles['sidebar-menu-link']}>
            Update Location Details
          </Link>
        </li>
        <li className={styles['sidebar-menu-item']}>
          <Link href="/logout" className={styles['sidebar-menu-link']}>
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
