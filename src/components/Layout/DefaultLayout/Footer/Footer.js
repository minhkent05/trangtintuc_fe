import React from 'react';
import { Facebook } from 'react-bootstrap-icons'
import { Youtube } from 'react-bootstrap-icons'
import { Twitter } from 'react-bootstrap-icons'
import { BuildingFill } from 'react-bootstrap-icons';
import { EnvelopeFill } from 'react-bootstrap-icons';
import { TelephoneFill } from 'react-bootstrap-icons';
import Logo from '../../../../image/24H_NOBG.png'
import '../../../../css/footer.css'
function Footer(props) {
    return (
        <div>
            <div className='title_footer row'>
                <div className='logo_footer col-md-9'>
                    <img alt='' src={Logo} />
                </div>
                <div className='col-md-3 icon'>
                    <Facebook />
                    <Youtube />
                    <Twitter />
                </div>
            </div>
            <div className='row contact pb-4'>
                <div className='col-md-6 lienhe text-start'>
                    <h4>LIÊN HỆ</h4>
                    <p>
                        <BuildingFill /> LandMark 72, đường Phạm Hùng, quận Mễ Trì, Hà Nội
                    </p>
                    <p>
                        <EnvelopeFill /> Minhvt16@fpt.com
                    </p>
                    <p>
                        <TelephoneFill /> 0397635357
                    </p>
                </div>
                <div className='col-md-6 map'>
                    <h4>BẢN ĐỒ</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3657515742298!2d105.7816215397205!3d21.018046510516708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ab43c0c4db%3A0xdb6effebd6991106!2sKeangnam%20Landmark%20Tower%2072!5e0!3m2!1sen!2s!4v1683712543122!5m2!1sen!2s"></iframe>
                </div>
                
            </div>
            <div className='row Copyright'>
                    <div className='col-md-12 text-center'>
                    <i>Copyright by minhvt16</i>
                    </div>
                </div>
        </div>
    );
}

export default Footer;