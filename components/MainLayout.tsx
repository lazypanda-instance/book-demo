import Head from 'next/head';
import React, { ReactNode } from 'react'
import FooterLayout from './FooterLayout';
import HeaderLayout from './HeaderLayout';
import cx from 'classnames';
import styles from '../styles/Home.module.scss';

type Props = {
    children?: ReactNode
    title?: string
}

const MainLayout = ({ children, title = 'This is the default title' }: Props) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            
            <HeaderLayout></HeaderLayout>

            <main className={styles.appPageContainer}>
                {/* mobile view */}
                <div className="row m-0 d-flex d-sm-none">
                    <div className={cx("col p-0", styles.appMainContent)}>
                        {children}
                    </div>
                </div>

                {/* desktop iPad view */}
                <div className="row m-0 d-none d-md-flex d-sm-flex">
                    <div className={cx("col-sm-3 col-md-3 col-lg-2 p-0", styles.appSpecificContent)}>
                        Specific Conetnt
                    </div>
                    <div className={cx("col-sm-6 col-md-6 col-lg-8 p-0", styles.appMainContent)}>
                        {children}
                    </div>
                    <div className={cx("col-sm-3 col-md-3 col-lg-2 p-0", styles.appSpecificContent)}>
                        Specific Conetnt
                    </div>
                </div>
            </main>

            <FooterLayout></FooterLayout>
        </div>
    );
}

export default MainLayout;