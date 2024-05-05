import React from 'react';
import Logo from '../../../image/24H_NOBG.png'
import 'bootstrap-icons/font/bootstrap-icons.css'

function HeaderDash(props) {
    return (
        <div>
            <div className='headerdash'>
                <img className='logo' src={Logo} alt="Company Logo" />
                <div className="dropdown">
                    <a href="" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle pt-2 pe-3" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fs-4 bi bi-person-circle"></i>
                        <span className=" d-sm-inline mx-1">loser</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderDash;