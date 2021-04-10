import styles from '../styles/Footer.module.scss';
import cx from 'classnames';

const FooterLayout = () => {
    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.position}>&copy; 2021 Lazy Panda Tech Books. All rights reserved.</div>
            </div>
        </div>
    );
}

export default FooterLayout;