import React from 'react';
import '../css/login.css'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ResetPass(props) {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [loading, setLoading] = useState(true)
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const setTimeLoading = () => {
        setTimeout(() => {
            setLoading(true)
        }, 1000);
    }

    const handleResetPass = async () => {
        setLoading(false)
        const res = await axios.put(`http://localhost:9191/resetPassword?username=${username}&email=${email}`)
        if (res.data === 'Reset mật khẩu thành công') {
            toast.success('Lấy lại mật khẩu thành công. Mật khẩu mới đã được gửi vào email của bạn')
            navigate('/dangnhap')
        } else if (res.data === 'Email không đúng với email đã đăng ký') {
            setTimeLoading()
            toast.warning(res.data)

        }
        else {
            setTimeLoading()
            toast.warning('Tài khoản hoặc Email không đúng')

        }
    }

    return (
        <div className='body-wrapper'>
            <div class="wrapper">
                <div class="text-center mt-4 name">
                    <h3><b>Quên mật khẩu</b></h3>
                    <i>Nhập email và tài khoản của bạn để lấy lại mật khẩu</i>
                </div>
                <form class="mt-1" >
                    <div class="form-field d-flex align-items-center">
                        <span class="far fa-user">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                        </span>
                        <input type="text" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="form-field d-flex align-items-center">
                        <span class="far fa-user">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                        </span>
                        <input type="text" name="userName" id="userName" placeholder="Tài khoản" onChange={(e) => setUserName(e.target.value)} />
                    </div>
                </form>

                <button class="btn mt-3 mb-3" onClick={() => handleResetPass()} >Lấy lại mật khẩu</button>
            </div>
            {loading === false && (
                <div className="loaderbox">
                    <span className="loader"></span>
                </div>
            )}
        </div>
    );
}

export default ResetPass;