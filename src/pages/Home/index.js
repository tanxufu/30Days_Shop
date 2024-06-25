import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Banner from '~/components/Layout/components/Banner';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home')}>
            <div className={cx('container')}>
                <div className={cx('home__inner')}>
                    <Banner></Banner>
                </div>
            </div>
        </div>
    );
}

export default Home;
