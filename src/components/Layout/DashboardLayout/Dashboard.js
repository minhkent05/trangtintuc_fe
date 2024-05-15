import React from 'react';
import HeaderDash from './HeaderDash';
import Sidebar from './Sidebar';
import Conten from './Conten';

function Dashboard({children}) {
    return (
        <div>
            <HeaderDash />
            <div className="container-fluid p-0">
                <div className="row flex-nowrap">
                       <Sidebar />
                       {children}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;