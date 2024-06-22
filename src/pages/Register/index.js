import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [register, setRegister] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://localhost:7158/api/UsersHandle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message);
                setRegister(true);
            } else {
                const data = await response.json();
                setErrors({ ...errors, [data.field]: data.message });
            }
        } catch (error) {
            alert('Đăng ký thất bại, vui lòng thử lại sau.');
        }
    };

    if (register) {
        return (
            <div className={cx('container')}>
                <div className={cx('register')}>
                    <div className={cx('register__inner')}>
                        <div className={cx('register__box', 'success')}>
                            <div className={cx('success__icon')}></div>
                            <p className={cx('success__message')}>Bạn đã đăng ký thành viên thành công!</p>
                            <Link to="/login" className={cx('success__btn')}>
                                Quay lại trang &nbsp;Đăng nhập
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={cx('container')}>
            <div className={cx('register')}>
                <div className={cx('register__inner')}>
                    <h1 className={cx('register__heading')}>JOIN US</h1>
                    <div className={cx('register__box', 'textbox')}>
                        <h2>Đăng ký thành viên</h2>
                    </div>
                    {/* form register */}
                    <form className={cx('form__register', 'form')} onSubmit={handleSubmit}>
                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Tên người dùng</p>
                                <input
                                    type="text"
                                    name="username"
                                    className={cx('form__input')}
                                    placeholder="Nhập tên người dùng"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.username && <p className={cx('form__error')}>{errors.username}</p>}
                            </label>
                        </div>
                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Email</p>
                                <input
                                    type="email"
                                    name="email"
                                    className={cx('form__input')}
                                    placeholder="Nhập email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <p className={cx('form__error')}>{errors.email}</p>}
                            </label>
                        </div>
                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Mật khẩu</p>
                                <input
                                    type="password"
                                    name="password"
                                    className={cx('form__input')}
                                    placeholder="Nhập mật khẩu"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Số điện thoại</p>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    className={cx('form__input')}
                                    placeholder="Nhập số điện thoại"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.phoneNumber && <p className={cx('form__error')}>{errors.phoneNumber}</p>}
                            </label>
                        </div>
                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Địa chỉ</p>
                                <input
                                    type="text"
                                    name="address"
                                    className={cx('form__input')}
                                    placeholder="Nhập địa chỉ"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        {message && <p className={cx('form__message')}>{message}</p>}

                        <div className={cx('form__group')}>
                            <button type="submit" className={cx('form__btn')}>
                                Đăng ký
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
