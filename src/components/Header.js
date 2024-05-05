import React from 'react';
import '../css/nav.css'
import Logo from '../image/24H_NOBG.png'
function Header(props) {
    return (
        <div>
            <div className="page-wrapper">
                <div className="nav-wrapper">
                    <div className="grad-bar"></div>
                    <nav className="navbar1">
                        <img src={Logo} alt="Company Logo" />
                        <div className='Box-search'>
                            <input className="search-input" type="text" placeholder="Nhập để tìm kiếm..." />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </div>
                        <ul className="nav no-search">
                            <li className="nav-item"><a href="#">Tin tức</a></li>
                            <li className="nav-item"><a href="#">Bóng đá</a></li>
                            <li className="nav-item"><a href="#">Kinh doanh</a></li>
                            <li className="nav-item"><a href="#">Giải trí</a></li>
                            <li className="nav-item"><a href="#">Thế giới</a></li>
                            <li className="nav-item">
                                <div className='login-user'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                    </svg>
                                </div>
                            </li>
                        </ul>
                        <div className="menu-toggle" id="mobile-menu">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </nav>
                </div>
                {/* <section className="headline">
                    <h1>Responsive Navigation</h1>
                    <p>Using CSS grid and flexbox to easily build navbars!</p>
                </section>
                <section className="features">
                    <div className="feature-container">
                        <img src="https://cdn-images-1.medium.com/max/2000/1*HFAEJvVOq4AwFuBivNu_OQ.png" alt="Flexbox Feature" />
                        <h2>Flexbox Featured</h2>
                        <p>This pen contains use of flexbox for the headline and feature section! We use it in our mobile navbar1 and show the power of mixing css grid and flexbox.</p>
                    </div>
                    <div className="feature-container">
                        <img src="https://blog.webix.com/wp-content/uploads/2017/06/20170621-CSS-Grid-Layout-710x355-tiny.png" alt="Flexbox Feature" />
                        <h2>CSS Grid Navigation</h2>
                        <p>While flexbox is used for the the mobile navbar1, CSS grid is used for the desktop navbar1 showing many ways we can use both.</p>
                    </div>
                    <div className="feature-container">
                        <img src="https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg" alt="Flexbox Feature" />
                        <h2>Basic HTML5</h2>
                        <p>This pen contains basic html to setup the page to display the responsive navbar1.</p>
                    </div>
                    <div className="feature-container">
                        <img src="https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg" alt="Flexbox Feature" />
                        <h2>Basic HTML5</h2>
                        <p>This pen contains basic html to setup the page to display the responsive navbar1.</p>
                    </div>
                    <div className="feature-container">
                        <img src="https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg" alt="Flexbox Feature" />
                        <h2>Basic HTML5</h2>
                        <p>This pen contains basic html to setup the page to display the responsive navbar1.</p>
                    </div>
                </section> */}
            </div>
        </div>
    );
}

export default Header;