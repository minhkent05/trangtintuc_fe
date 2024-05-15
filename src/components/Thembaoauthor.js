import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Thembaoauthor(props) {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [tenbaibao, setTenbaibao] = useState('')
    const [anh, setAnh] = useState(null)
    const [noidung, setNoidung] = useState('')
    const [tacgia, setTacgia] = useState('')
    const [theloai, setTheloai] = useState('')
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()

    const baibao = {
        tenbaibao: tenbaibao,
        ngaydang: currentDateTime.toLocaleString(),
        anh: anh,
        noidung: noidung,
        tacgia: tacgia,
        theloai: theloai,
        luotxem: 0,
        user_id: localStorage.getItem('userID')
    }

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        },2000)
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    },[]);

    const themBao = async () => {
        await axios.post('http://localhost:9191/thembaibao', baibao
            , {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
        toast.success("Thêm báo mới thành công")
        navigate("/listbao")
    }
    return (
        <div className='col p-0 overflow-auto p-2'>
            <div className='col-md-12 text-start'>
                <h5>Thêm báo mới</h5>
            </div>
            <div className='row text-start'>
                <div class="col-md-6 mb-2">
                    <label for="inputEmail4" class="form-label">Tên bài báo</label>
                    <input type="text" class="form-control" id="inputEmail4" onChange={(e) => setTenbaibao(e.target.value)} />
                </div>
                <div class="col-md-6 mb-2">
                    <label for="inputPassword4" class="form-label">Ngày đăng</label>
                    <input type="text" class="form-control" id="inputPassword4" value={currentDateTime.toLocaleString()} readOnly />
                </div>
                <div class="col-md-6 mb-2">
                    <label for="inputEmail4" class="form-label">Thể loại</label>
                    <select class="form-select form-select-lg p-1" aria-label=".form-select-lg example"
                        value={theloai} onChange={(e) => setTheloai(e.target.value)}>
                        <option>--Chọn--</option>
                        <option>Tin tức</option>
                        <option>Bóng đá</option>
                        <option>Kinh doanh</option>
                        <option>Giải trí</option>
                        <option>Thế giới</option>
                    </select>
                </div>

                <div class="col-md-6 mb-2 " >
                    <div >
                        {anh && (
                            <img src={URL.createObjectURL(anh) } height = "100px"  />
                        )}
                    </div>
                    <div>
                        <label for="inputEmail4" class="form-label">Ảnh tiêu đề</label>
                        <input type="file" class="form-control" id="inputEmail4" onChange={(e) => setAnh(e.target.files[0])} />
                    </div>
                </div>
                <div class="col-md-6 mb-2">
                    <label for="inputPassword4" class="form-label" >Tác giả</label>
                    <input type="text" class="form-control" id="inputPassword4" onChange={(e) => setTacgia(e.target.value)} />
                </div>
                <div className='col-md-12'>
                    <label for="inputEmail4" class="form-label">Nội dung</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={noidung}
                        onChange={
                            (event, editor) => {
                                const data = editor.getData();
                                setNoidung(data);
                            }}
                    />
                </div>
                <div className='col-md-3 mt-2'>
                    <button className='btn btn-success' onClick={() => themBao()}><b><i class="bi bi-plus-circle" ></i> Thêm mới</b></button>
                </div>
            </div>
            {loading === true && (
                <div className="loaderbox">
                    <span className="loader"></span>
                </div>
            )}
        </div>
    );
}

export default Thembaoauthor;