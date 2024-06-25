import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import icon from '~/assets/icon';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('topbar')}>
            <div className={cx('container')}>
                <div className={cx('topbar__inner')}>
                    <Link to="/" className={cx('logo')}>
                        <h1 className={cx('logo__title')}>30 Days Shop</h1>
                    </Link>

                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm sản phẩm" className={cx('search__input')} />
                        <button className={cx('search__btn')}>
                            <img src={icon.search} alt="search" className={cx('search__icon')} />
                        </button>
                    </div>

                    <div className={cx('topbar__act')}>
                        <Link to="/cart" className={cx('topbar__act--link')}>
                            <img src={icon.cart} alt="cart" className={cx('topbar__act--icon')} />
                        </Link>
                        <Link to="/favourites" className={cx('topbar__act--link')}>
                            <img src={icon.favourite} alt="favourites" className={cx('topbar__act--icon')} />
                        </Link>
                        <Link to="/login" className={cx('log-in__btn')}>
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
