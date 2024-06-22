import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './ForgotPassword.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [passwordChanged, setPasswordChanged] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setMessage('Xác nhận mật khẩu mới không đúng!');
            return;
        }

        try {
            const response = await axios.put('https://localhost:7158/api/UsersHandle/ForgotPassword', {
                Email: email,
                NewPassword: newPassword,
                ConfirmNewPassword: confirmPassword,
            });

            if (response.status === 200) {
                setMessage('Đổi mật khẩu thành công');
                setPasswordChanged(true);
            } else {
                setMessage('Đổi mật khẩu thất bại');
            }
        } catch (error) {
            setMessage('Email không đúng!');
            console.error('Error:', error);
        }
    };

    if (passwordChanged) {
        return (
            <div className={cx('container')}>
                <div className={cx('changepass')}>
                    <div className={cx('changepass__inner')}>
                        <div className={cx('changepass__box', 'success')}>
                            <div className={cx('success__icon')}></div>
                            <p className={cx('success__message')}>Mật khẩu đã được thay đổi thành công!</p>
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
            <div className={cx('changepass')}>
                <div className={cx('changepass__inner')}>
                    <div className={cx('changepass__box', 'textbox')}>
                        <h2>Đặt lại mật khẩu</h2>
                    </div>
                    {/* form changepass */}
                    <form className={cx('form__changepass', 'form')} action="" onSubmit={handleSubmit}>
                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Email</p>
                                <input
                                    type="email"
                                    name="email"
                                    className={cx('form__input')}
                                    placeholder="Nhập email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Mật khẩu mới</p>
                                <input
                                    type="password"
                                    name="newPassword"
                                    className={cx('form__input')}
                                    placeholder="Nhập mật khẩu mới"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Xác nhận mật khẩu</p>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className={cx('form__input')}
                                    placeholder="Nhập lại mật khẩu mới"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        {message && <p className={cx('form__message')}>{message}</p>}

                        <div className={cx('form__group')}>
                            <button type="submit" className={cx('changepass__btn', 'form__btn')}>
                                Đổi mật khẩu
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
