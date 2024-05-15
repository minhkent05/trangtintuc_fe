import React, { Fragment } from 'react';
import Logo from '../../../image/24H_NOBG.png'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/offcanvas'
import { Link, useNavigate } from 'react-router-dom';



function HeaderDash(props) {
    const navigate = useNavigate()
    const handleSignOut = () => {
        localStorage.clear()
        navigate('/')
    }

    return (
        <div>
            <div className='headerdash'>
                <Link to={'/'}>
                    <img className='logo' src={Logo} alt="Company Logo" />
                </Link>
                <div>
                    {
                        localStorage.getItem("role") === null ?
                            <Link className="nav-link" to={'/dangnhap'}>
                                <div className='login-user'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                    </svg>
                                </div>
                            </Link> :
                            <div className="dropdown-box d-flex justify-content-center">
                                <div className="dropdown">
                                    <a href="" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle pe-3" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fs-4 bi bi-person-circle"></i>
                                        <span className=" d-sm-inline mx-1">{localStorage.getItem("taikhoan")}</span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                        {JSON.parse(localStorage.getItem("role")) === null ? '' : JSON.parse(localStorage.getItem("role")).map((item) => {
                                            if (item.namerole === 'admin') {
                                                return <li><a className="dropdown-item" href="/listbao">Quản lý</a></li>
                                            }
                                            if (item.namerole === 'author') {
                                                return <li><a className="dropdown-item" href="#">Quản lý bài</a></li>
                                            }
                                            return Fragment
                                        }
                                        )}

                                        <li><a className="dropdown-item" href="#">Đổi mật khẩu</a></li>

                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li ><a className="dropdown-item" href="/" onClick={() => handleSignOut()}>Đăng xuất</a></li>
                                    </ul>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default HeaderDash;