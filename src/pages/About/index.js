import classNames from 'classnames/bind';
import styles from './About.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('container')}>
            <div className={cx('about')}>
                <h1 className={cx('about__heading')}>THÔNG TIN HOẠT ĐỘNG</h1>
                <div className={cx('about__inner')}>
                    <div className={cx('row')}>
                        <div className={cx('col-3')}>
                            <div className={cx('about__sidebar')}>
                                <ul className="about__list">
                                    <li>
                                        <Link to="" className={cx('about__link', 'about__link--active')}>
                                            Về chúng tôi
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/policy" className={cx('about__link')}>
                                            Chính sách
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/faq" className={cx('about__link')}>
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={cx('col-9')}>
                            <div className={cx('about__info')}>
                                <section className={cx('shopinfo')}>
                                    {shopinfoData.map((item, index) => (
                                        <div key={index} className={cx('shopinfo__text')}>
                                            <p className={cx('shopinfo__title')}>{item.title}</p>
                                            <p className={cx('shopinfo__desc')}>{item.desc}</p>
                                        </div>
                                    ))}
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

const shopinfoData = [
    {
        title: 'TÊN CÔNG TY',
        desc: 'CÔNG TY THHH 30 DAYS SHOP',
    },
    {
        title: 'THÀNH LẬP',
        desc: 'Từ ngày 6 tháng 6 năm 2024',
    },
    {
        title: 'VỊ TRÍ',
        desc: 'Địa chỉ đăng ký: 1 Lý Tự Trọng, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam',
    },
    {
        title: 'NGÀNH NGỀ KINH DOANH',
        desc: 'Bán lẻ thời trang dành cho Nam giới thiết nhãn hiệu 30 Days tại Việt Nam',
    },
    {
        title: 'SỐ CỬA HÀNG',
        desc: '1 cửa hàng (Tính đến tháng 7 năm 2024)',
    },
];
