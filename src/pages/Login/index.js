import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '~/components/Layout/components/Footer';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `https://localhost:7137/api/UsersHandle/Login?email=${email}&password=${password}`,
            );
            if (!response.ok) {
                throw new Error('Tài khoản không chính xác');
            }
            const user = await response.json();

            if (user.typeAccount === 'ad') {
                navigate('/admin');
            } else if (user.typeAccount === 'cs') {
                navigate('/');
            } else {
                setError('Không tồn tại type');
            }
        } catch (err) {
            setError('Đăng nhập thất bại: ' + err.message);
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('login')}>
                <div className={cx('login__inner')}>
                    <h1 className={cx('login__heading')}>WELLCOME</h1>
                    <div className={cx('login__box', 'textbox')}>
                        <h2>Đăng nhập</h2>
                    </div>
                    {/* form login */}
                    <form className={cx('form__login', 'form')} action="" onSubmit={handleLogin}>
                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Email</p>
                                <input
                                    type="email"
                                    name="Email"
                                    id="Email"
                                    className={cx('form__input')}
                                    placeholder="Nhập email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className={cx('form__group')}>
                            <label>
                                <p className={cx('form__label')}>Mật khẩu</p>
                                <input
                                    type="password"
                                    name="Password"
                                    id="Password"
                                    className={cx('form__input')}
                                    placeholder="Nhập mật khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className={cx('form__group')}>
                            <button type="submit" className={cx('form__btn', 'textbox__btn')}>
                                Đăng nhập
                            </button>
                        </div>
                        {error && <p className={cx('login__error')}>{error}</p>}
                        <div className={cx('form__login--forgotpw')}>
                            <a href="#!">Quên mật khẩu?</a>
                        </div>
                    </form>

                    <div className={cx('form__separate')}></div>
                    {/* register */}
                    <div className={cx('register__box', 'textbox')}>
                        <h2>Đăng ký thành viên</h2>
                    </div>
                    <button className={cx('register__btn', 'textbox__btn')}>Thành viên mới (Miễn phí)</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
