import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function UpdateBao(props) {
    const { id } = useParams()
    const [baiBao, setBaibao] = useState({
        tenbaibao: '',
        ngaydang: '',
        anh: '',
        noidung: '',
        tacgia: '',
        theloai: '',
        luotxem: 0
    })

    const { tenbaibao, ngaydang, anh, noidung, tacgia, theloai, luotxem } = baiBao

    // const onInputChange = (e) => {
    //     setBaibao({ ...baiBao, [e.target.name]: e.target.value })
    // }

    const onInputChange = (fieldName, value) => {
        const temp = { ...baiBao }
        temp[fieldName] = value
        setBaibao(temp)
    }



    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const res = await axios.get(`http://localhost:9191/baibao/${id}`)
        setBaibao(res.data)
    }

    return (
        <div className='col p-0 overflow-auto p-2'>
            <div className='col-md-12 text-start'>
                <h5>Sửa bài viết</h5>
            </div>
            <div className='row text-start'>
                <div class="col-md-6 mb-2">
                    <label for="inputEmail4" class="form-label">Tên bài báo</label>
                    <input type="text" class="form-control" id="inputEmail4" name='tenbaibao' value={tenbaibao} onChange={(e) => onInputChange('tenbaibao', e.target.value)} />
                </div>
                <div class="col-md-6 mb-2">
                    <label for="inputPassword4" class="form-label">Ngày đăng</label>
                    <input type="text" class="form-control" id="inputPassword4" name='ngaydang' value={ngaydang} readOnly />
                </div>
                <div class="col-md-6 mb-2">
                    <label for="inputEmail4" class="form-label">Thể loại</label>
                    <select class="form-select form-select-lg p-1" aria-label=".form-select-lg example"
                        name='theloai' value={theloai} 
                    >
                        <option>--Chọn--</option>
                        <option>Tin tức</option>
                        <option>Bóng đá</option>
                        <option>Kinh doanh</option>
                        <option>Giải trí</option>
                        <option>Thế giới</option>
                    </select>
                </div>
                <div class="col-md-6 mb-2">
                    <label for="inputEmail4" class="form-label">Ảnh tiêu đề</label>
                    <input type="file" class="form-control" id="inputEmail4" name='anh'/>
                    {/* onChange={(e) => setAnh(e.target.files[0])} */}
                </div>
                <div class="col-md-6 mb-2">
                    <label for="inputPassword4" class="form-label" >Tác giả</label>
                    <input type="text" class="form-control" id="inputPassword4" value={tacgia} readOnly/>
                </div>
                <div className='col-md-12'>
                    <label for="inputEmail4" class="form-label">Nội dung</label>
                    <CKEditor
                    editor={ClassicEditor}
                    data={noidung}
                    onChange={
                        (event, editor) => {
                            const data = editor.getData();
                            // setNoidung(data)
                        }}
                />
                </div>
                <div className='col-md-3 mt-2'>
                    <button className='btn btn-success' ><b><i class="bi bi-plus-circle" ></i> Sửa bài viết</b></button>
                </div>
            </div>
        </div>
    );
}

export default UpdateBao;