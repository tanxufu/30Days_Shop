import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './FAQ.module.scss';
import icon from '~/assets/icon';

const cx = classNames.bind(styles);

function About() {
    const [activeIndex, setActiveIndex] = useState(null);
    const panelRefs = useRef([]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        if (activeIndex !== null && panelRefs.current[activeIndex]) {
            panelRefs.current[activeIndex].style.height = `${panelRefs.current[activeIndex].scrollHeight}px`;
        }
    }, [activeIndex]);

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
                                        <Link to="/policy" className={cx('about__link')}>
                                            Chính sách
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/faq" className={cx('about__link', 'about__link--active')}>
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={cx('col-9')}>
                            <div className={cx('about__info')}>
                                <div className={cx('faq')}>
                                    {faqData.map((item, index) => (
                                        <div key={index}>
                                            <button
                                                className={cx('faq__accordion', { active: activeIndex === index })}
                                                onClick={() => toggleAccordion(index)}
                                            >
                                                {item.question}
                                                <img
                                                    src={icon.arrowDown}
                                                    alt="arrowDown"
                                                    className={cx('faq__accordion--icon', {
                                                        'faq__accordion--icon--active': activeIndex === index,
                                                    })}
                                                />
                                            </button>
                                            <div
                                                ref={(el) => (panelRefs.current[index] = el)}
                                                className={cx('faq__panel', {
                                                    'faq__panel--active': activeIndex === index,
                                                })}
                                                style={{
                                                    height:
                                                        activeIndex === index
                                                            ? `${panelRefs.current[index]?.scrollHeight}px`
                                                            : '0',
                                                }}
                                            >
                                                <p className={cx('faq__desc')}>{item.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const faqData = [
    {
        question: 'Nếu tôi có việc bận và không nhận được bưu kiện thì 30 Days có giao lại được không?',
        answer: 'Trong trường hợp không liên lạc được với khách hàng, đơn hàng sẽ được giao liên tục tối đa 3 lần trong vòng 3 ngày. Nếu bưu kiện vẫn giao không thành công, đơn hàng sẽ được hoàn về kho của chúng tôi và quý khách sẽ được hoàn tiền toàn bộ (đối với phương thức thanh toán thẻ).',
    },
    {
        question: 'Tôi muốn thay đổi thông tin người nhận hàng/thay đổi địa chỉ giao hàng.',
        answer: 'Quý khách có thể thay đổi trong Hồ sơ. Với trường hợp đã đặt và muốn thay đổi vui lòng liên hệ trực tiếp với Cửa hàng.',
    },
    {
        question: 'Đơn hàng của tôi bị hư/thất lạc/thiếu sản phẩm.',
        answer: (
            <ul>
                30 Days thành thật xin lỗi về trải nghiệm chưa tốt. Quý khách vui lòng thực hiện các bước sau:
                <li>1. Chụp ảnh/quay video thùng hàng và khi mở thùng hàng.</li>
                <li>2. Liên hệ trực tiếp với Trung Tâm Khách Hàng để được hỗ trợ.</li>
            </ul>
        ),
    },
    {
        question: 'Tôi muốn hẹn thời gian giao hàng.',
        answer: 'Quý khách vui lòng trao đổi trực tiếp với nhân viên giao hàng để sắp xếp thời gian giao hàng phù hợp.',
    },
    {
        question: 'Tôi muốn đổi Giao về địa chỉ sang Nhận tại cửa hàng hoặc ngược lại.',
        answer: '30 Days rất tiếc khi chưa thể hỗ trợ đổi phương thức giao hàng. Quý khách có thể cân nhắc hủy đơn (không nhận đơn hàng đã đặt) và đặt lại đơn hàng mới. Quý khách sẽ được hoàn tiền toàn bộ khi hủy đơn (đối với phương thức thanh toán thẻ).',
    },
    {
        question: 'Thời gian giữ đơn hàng của phương thức Nhận tại cửa hàng',
        answer: 'Đơn hàng sẽ được lưu tại cửa hàng 14 ngày sau, và được hủy sau đó nếu không có khách hàng đến nhận. Quý khách sẽ được hoàn tiền toàn bộ khi hủy đơn (đối với phương thức thanh toán thẻ).',
    },
    {
        question: 'Đơn vị vận chuyển của 30 Days là gì?',
        answer: '30 Days hiện đang hợp tác với 02 đơn vị vận chuyển: Giao Hàng Nhanh và Ninja Vans.',
    },
    {
        question: 'Tôi muốn biết cách chăm sóc sản phẩm của mình',
        answer: 'Khi giặt, bạn vui lòng kiểm tra các hình ảnh xử lý và các lưu ý trên nhãn giặt (nhãn chăm sóc). Hoàn tan kỹ bột giặt trước khi cho quần áo vào. (Nếu bạn cho quần áo vào trước và rắc bột giặt từ trên xuống, bột giặt có thể làm cho quần áo bị đổi màu) Xin lưu ý, nếu quần áo sẫm màu bị ướt, bạn nên tách riêng để tránh trường hợp màu bị lem sang sản phẩm khác. Giặt riêng quần áo sẫm màu, xả nước ngay và phơi khô. Đối với sản phẩm dễ mất hình dạng, bạn vui lòng sử dụng lưới giặt. Tránh sử dụng chất tẩy có chứa chất làm sáng quang học cho các sản phẩm được sản xuất hoặc có màu sáng.',
    },
    {
        question: 'Tôi muốn hỏi về dịch vụ chỉnh sửa sản phẩm',
        answer: '30 Days cung cấp dịch vụ chỉnh sửa quần áo, khách hàng vui lòng liên hệ trực tiếp tại Cửa hàng để được hỗ trợ tốt nhất.',
    },
];

export default About;
