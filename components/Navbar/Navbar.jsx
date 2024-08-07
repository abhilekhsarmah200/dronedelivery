// components/Navbar.js
import { useEffect, useState } from 'react';
import styles from '../../src/styles/Navbar.module.css';
import SideBar from '../SideBar/SideBar';
import HomeIcon from '@mui/icons-material/Home';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import GradeIcon from '@mui/icons-material/Grade';
import CallIcon from '@mui/icons-material/Call';

const Navbar = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos < prevScrollPos) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }
      setPrevScrollPos(currentScrollPos);

      setAtTop(currentScrollPos === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const navItems = [
    { title: 'Home', url: '#', icons: <HomeIcon /> },
    { title: 'How It Works', url: '#intro', icons: <SettingsSuggestIcon /> },
    { title: 'Features', url: '#features', icons: <FeaturedPlayListIcon /> },
    { title: 'Testimonials', url: '#testimonials', icons: <GradeIcon /> },
    { title: 'Contact Us', url: '#contact', icons: <CallIcon /> },
  ];

  return (
    <nav
      className={`${styles.navbar} ${scrollingUp ? styles.show : styles.hide} ${
        atTop ? styles.transparent : styles.blackBackground
      }`}
    >
      <div className={styles.logo}>
        <img
          className='w-[auto] sm:h-[5rem] h-[3rem]'
          src='/images/logo.png'
          alt='Logo'
        />
      </div>
      <ul className={styles.navLinks}>
        <SideBar navItems={navItems} />
      </ul>
    </nav>
  );
};

export default Navbar;
