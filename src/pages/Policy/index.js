import classNames from 'classnames/bind';
import styles from './Policy.module.scss';
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
                                        <Link to="/about" className={cx('about__link')}>
                                            Về chúng tôi
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/policy" className={cx('about__link', 'about__link--active')}>
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
                                <section className={cx('policy')}>
                                    <h2 className={cx('policy__heading')}>
                                        Thời Gian Giao Hàng (Cho Đơn Hàng Trực Tuyến)
                                    </h2>
                                    <div className={cx('policy__box')}>
                                        <h3 className={cx('policy__title')}>Thời gian giao hàng dự kiến</h3>

                                        <p className={cx('policy__desc')}>
                                            Thời gian giao hàng dự kiến 2 - 4 ngày được tính kể từ thời điểm đơn hàng
                                            được xác nhận thành công trên hệ thống của 30 Days.
                                        </p>
                                        <p className={cx('policy__desc')}>
                                            Vui lòng tham khảo thời gian cho từng khu vực theo thông tin bên dưới:
                                        </p>

                                        <p className={cx('policy__table--title')}>Giao Hàng Tận Nơi</p>
                                        <table className={cx('policy__table')}>
                                            <thead>
                                                <tr>
                                                    <th colSpan={'2'}>Khu Vực</th>
                                                    <th>Thời gian dự kiến</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td rowSpan={'2'}>Miền Nam</td>
                                                    <td>TP. Hồ Chí Minh</td>
                                                    <td>02 ngày</td>
                                                </tr>
                                                <tr>
                                                    <td>Các tỉnh miền Nam khác</td>
                                                    <td>03 ngày</td>
                                                </tr>
                                                <tr>
                                                    <td>Miền Trung</td>
                                                    <td>Các tỉnh miền Trung</td>
                                                    <td>04 ngày</td>
                                                </tr>
                                                <tr>
                                                    <td rowSpan={'3'}>Miền Bắc</td>
                                                    <td>Hà Nội</td>
                                                    <td>03 ngày</td>
                                                </tr>
                                                <tr>
                                                    <td>Hải Phòng</td>
                                                    <td>04 ngày</td>
                                                </tr>
                                                <tr>
                                                    <td>Các tỉnh miền Bắc khác</td>
                                                    <td>04 ngày</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p className={cx('policy__desc')}>
                                            <i>*Lưu ý: </i>Thời gian dự kiến được tính theo ngày làm việc và có thể thay
                                            đổi theo tình trạng hàng thực tế
                                        </p>
                                        <p className={cx('policy__table--title')}>Giao và Nhận tại Cửa Hàng</p>
                                        <table className={cx('policy__table')}>
                                            <thead>
                                                <tr>
                                                    <th>Cửa hàng tại khu vực</th>
                                                    <th>Thời gian dự kiến</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>TP. Hồ Chí Minh</td>
                                                    <td>01 - 03 ngày</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p className={cx('policy__desc')}>
                                            <i>*Lưu ý: </i>Sau khi đơn hàng được giao đến cửa hàng, quý khách sẽ nhận
                                            được 01 email thông báo để nhận hàng (Khách hàng sẽ chưa thể nhận đơn hàng
                                            nếu không có email này)
                                        </p>
                                    </div>

                                    <div className={cx('policy__box')}>
                                        <h3 className={cx('policy__title')}>Phí giao hàng</h3>
                                        <p className={cx('policy__desc')}>
                                            Quý khách tham khảo thông tin để có thể tận hưởng ưu đãi Miễn phí giao hàng
                                        </p>
                                        <table className={cx('policy__table')}>
                                            <thead>
                                                <tr>
                                                    <th>Phương thức giao hàng</th>
                                                    <th>Phí vận chuyển</th>
                                                    <th>Trị giá đơn hàng</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td rowSpan={'2'}>Giao hàng tận nơi</td>
                                                    <td>Miễn phí giao hàng</td>
                                                    <td>Trên 999,000 VND</td>
                                                </tr>
                                                <tr>
                                                    <td>50,000 VND</td>
                                                    <td>Dưới 999,000 VND</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p className={cx('policy__desc')}>
                                            Chân thành cảm ơn quý khách đã đồng hành cùng Uniqlo, kính chúc quý khách
                                            trải nghiệm mua sắm vui vẻ!
                                        </p>
                                    </div>
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
