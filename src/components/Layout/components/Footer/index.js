import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer__inner')}>
                <div className={cx('container')}>
                    <a className={cx('logo')}>
                        <h2 className={cx('logo__title')}>30 Days Shop</h2>
                    </a>
                    <div className={cx('footer__info')}>
                        <div className={cx('row row-cols-3')}>
                            <div className={cx('col')}>
                                <ul className={cx('footer__list')}>
                                    <li>
                                        <Link to="#!" className={cx('footer__link')}>
                                            <span>Về chúng tôi</span>
                                            <img src={images.arrowRight} alt="arrowRight" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/products" className={cx('footer__link')}>
                                            <span>Sản phẩm</span>
                                            <img src={images.arrowRight} alt="arrowRight" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('col')}>
                                <ul className={cx('footer__list')}>
                                    <li>
                                        <Link to="#!" className={cx('footer__link')}>
                                            <span>Chính sách</span>
                                            <img src={images.arrowRight} alt="arrowRight" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#!" className={cx('footer__link')}>
                                            <span>Hồ sơ</span>
                                            <img src={images.arrowRight} alt="arrowRight" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('col')}>
                                <ul className={cx('footer__list')}>
                                    <li>
                                        <Link to="#!" className={cx('footer__link')}>
                                            <span>FAQ</span>
                                            <img src={images.arrowRight} alt="arrowRight" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer__license')}>© 30 DAYS SHOP, Inc.</div>
        </footer>
    );
}

export default Footer;
