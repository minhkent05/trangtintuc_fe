import React, { Fragment } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/offcanvas'
import '../../../../css/header.css'
import Logo from '../../../../image/24H_NOBG.png'
function Header(props) {
    const handleSignOut = () => {
        localStorage.clear()
    }


    const renderRole = () => {
        const roles =  localStorage.getItem("role")  
        if (!roles) return null 
      
        const listRole = JSON.parse(roles) || []
        if(!listRole) return null
        if (listRole.some(item => item.namerole === 'admin')) return <li><a className="dropdown-item" href="/listbao">Quản lý</a></li>;
        if (listRole.some(item => item.namerole === 'author')) return <li><a className="dropdown-item" href="/listauthor">Quản lý bài</a></li>;
        return null
    }

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light `">
                <div className="container-fluid">
                    <Link to={'/'}>
                        <img className='logo' src={Logo} alt="Company Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="Box-search d-flex mx-auto ">
                            <input className="me-2" type="search" placeholder="Nhập nội dung để tìm kiếm" aria-label="Search" />
                            <svg style={{ margin: 'auto', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="black" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </form>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/Tintuc">Tin tức</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Bongda">Bóng đá</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Kinhdoanh">Kinh doanh</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Giaitri">Giải trí</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Thegioi">Thế giới</a>
                            </li>
                            <li className="nav-item">
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

                                                    { renderRole() }

                                                    <li><a className="dropdown-item" href="#">Đổi mật khẩu</a></li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li ><a className="dropdown-item" href="/" onClick={() => handleSignOut()}>Đăng xuất</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                }

                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;