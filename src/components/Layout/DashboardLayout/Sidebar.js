import React from 'react';
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/offcanvas'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../../../css/sidebar.css'
function Sidebar(props) {
    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    {/* <li>
                                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                                    </a>
                                </li> */}
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i class="fs-4 bi bi-receipt-cutoff"></i>
                            <span className="ms-1 d-none d-sm-inline">Bài báo</span>
                        </a>
                        <ul className="collapse nav flex-column ms-1 text-start" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="/listbao" className="nav-link px-0"> <span className=" d-sm-inline">Danh sách</span></a>
                            </li>
                            <li>
                                <a href="/themmoi" className="nav-link px-0"> <span className="d-sm-inline">Thêm mới</span></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/listuser" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i>
                            <span className="ms-1 d-none d-sm-inline">Người dùng</span>
                        </a>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    );
}

export default Sidebar;