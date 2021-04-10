import React, { useState } from "react";
import Link from "next/link";
import styles from '../styles/Header.module.scss';
import Image from 'next/image'
import cx from 'classnames';

const HeaderLayout = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar navbar-expand-md fixed-top p-0">
            <div className={styles.header}>
                <div className={styles.logoNav}>
                    <div className={styles.logoContainer}>
                        <a className={styles.logo} href="#">
                            <Image src="/logo.png" alt="logo" priority={true} width={80} height={40} />
                        </a>
                    </div>

                    <div className={styles.navContainer}>
                        <div className={styles.push}>
                            <ul className={click ? `${styles.navOptions} ${styles.active}` : styles.navOptions}>
                                <li className={styles.option} onClick={closeMobileMenu}>
                                    <Link href="/">HOME</Link>
                                </li>
                                <li className={styles.option} onClick={closeMobileMenu}>
                                    <Link href="/books">BOOKS</Link>
                                </li>
                                <li className={styles.option} onClick={closeMobileMenu}>
                                    <Link href="/blogs">BLOG</Link>
                                </li>
                                <li className={styles.option} onClick={closeMobileMenu}>
                                    <Link href="/about">ABOUT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* mobile view */}
                <div className="d-flex d-sm-none">
                    <div className={styles.mobileMenu} onClick={handleClick}>
                        {click ? (
                            <div className="mt-2"><Image src="/cross.svg" priority={true} alt="close menu" className={styles.menuIcon} width={45} height={45} /></div>
                        ) : (
                            <div className="mt-2"><Image src="/menu.svg" priority={true} alt="menu" className={styles.menuIcon} width={45} height={45} /></div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default HeaderLayout;