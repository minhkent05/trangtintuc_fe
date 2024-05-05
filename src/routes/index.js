// import Header from '../components/Header';
// import Footer from '../components/Footer';
import Content from '../components/Content';
import Login from '../components/Login';
import Dangki from '../components/Dangki';
import Tintuc from '../components/Tintuc';
import Bongda from '../components/Bongda';
import Kinhdoanh from '../components/Kinhdoanh';
import Giaitri from '../components/Giaitri';
import Thegioi from '../components/Thegioi';
import ListBao from '../components/ListBao'
import Thembaomoi from '../components/Thembaomoi';
import Listuser from '../components/Listuser';
import DetailBao from '../components/DetailBao';
import UpdateBao from '../components/UpdateBao';

const publicRoutes = [
    {path:'/' , element: Content},
    {path:'/Tintuc' , element: Tintuc},
    {path:'/Bongda' , element: Bongda},
    {path:'/Kinhdoanh' , element: Kinhdoanh},
    {path:'/Giaitri' , element: Giaitri},
    {path:'/Thegioi' , element: Thegioi},
    {path:'/Detail/:id' , element: DetailBao},
    {path:'/dangnhap' , element: Login, layout : null},
    {path:'/dangky' , element: Dangki, layout : null}
]

const publicRoutesDash = [
    {path:'/listbao' , element: ListBao},
    {path:'/themmoi' , element: Thembaomoi},
    {path:'/listuser' , element: Listuser},
    {path:'/update/:id' , element: UpdateBao}
]

export {publicRoutes,publicRoutesDash};