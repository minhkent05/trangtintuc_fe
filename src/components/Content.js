import React, { useEffect, useState } from 'react';
import '../css/content.css'
import axios from 'axios';
function Content(props) {
    const [loading, setLoading] = useState(true)
    const [listBao, setListBao] = useState([])
    const [onePost, setOnePost] = useState([])
    const [listBongda, setListBongda] = useState([])
    const [listTinTuc, setListTinTuc] = useState([])
    useEffect(() => {
        loadData()
        loadOneData()
        loadDataBongDa()
        loadDataTinTuc()
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const loadData = async () => {
        const res = await axios.get("http://localhost:9191/listbaibao")
        const reversedData = res.data.reverse()
        const sliceData = reversedData.slice(1, 5)
        setListBao(sliceData)
        const res2 = await axios.get("http://localhost:9191/listTheLoai?theloai=bóng đá")
    }

    const loadOneData = async () => {
        const res = await axios.get("http://localhost:9191/listbaibao")
        const reversedData = res.data.reverse()
        reversedData.splice(1)
        setOnePost(reversedData)
    }

    const loadDataBongDa = async () => {
        const res = await axios.get("http://localhost:9191/listTheLoai?theloai=bóng đá")
        const sliceData = res.data.slice(0, 6)
        setListBongda(sliceData)
    }

    const loadDataTinTuc = async () => {
        const res = await axios.get("http://localhost:9191/listTheLoai?theloai=tin tức")
        const sliceData = res.data.slice(0, 6)
        setListTinTuc(sliceData)
    }


    return (
        <div className="row mt-5 p-4 me-0 ms-0">
            {
                onePost.map((item, index) => (
                    <a key={index} href={`/Detail/${item.id}`} className="col-md-7 image-container box-content">
                        {item.anh && (
                            <img src={`data:image/jpeg;base64,${item.anh}`} className="img-fluid rounded-start" alt="..." />
                        )}
                        <div className="content text-start pt-2">
                            <h3><b>{item.tenbaibao}</b></h3>
                            <p><i>Tác giả: {item.tacgia}<br />
                                Ngày đăng: {item.ngaydang}</i>
                            </p>
                        </div>
                    </a>

                ))
            }

            <div className="col-md-5 category " >
                {
                    listBao.map((item, index) => (
                        <a key={index} href={`/Detail/${item.id}`} className="row g-0 mb-2 pb-2 border-bottom ">
                            <div className="col-md-5">
                                {item.anh && (
                                    <img src={`data:image/jpeg;base64,${item.anh}`} className="img-fluid rounded-start" alt="..." />
                                )}
                            </div>
                            <div className="col-md-7">
                                <div className="card-body p-0 ps-2 text-start">
                                    <div>
                                        <h5>{item.tenbaibao}</h5>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p>
                                            <i>Tác giả: {item.tacgia}
                                                <br />
                                                {item.ngaydang}</i>
                                        </p>
                                        <p>
                                            <i class="bi bi-eye"></i> {item.luotxem}
                                        </p>
                                    </div>
                                    {/* <p dangerouslySetInnerHTML={{ __html: item.description }} /> */}
                                </div>
                            </div>
                        </a>
                    ))
                }

            </div>
            <div>
                <div className='d-flex title-content'>
                    <h3 className='ps-4 pe-3'><b>Tin tức</b></h3>  <hr className='w-50' style={{ height: '5px', color: 'red', opacity: '0.6' }}></hr>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 pb-3">
                    {
                        listTinTuc.map((item, index) => (
                            <a key={index} href={`/Detail/${item.id}`} className="col">
                                <div className="card h-100">
                                    {item.anh && (
                                        <img className="card-img-top" src={`data:image/jpeg;base64,${item.anh}`} />
                                    )}

                                    <div className="card-body text-start">
                                        <div>
                                            <h5 className="card-text">{item.tenbaibao}</h5>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p>
                                                <i>
                                                    Tác giả: {item.tacgia}
                                                    <br />
                                                    {item.ngaydang}
                                                </i>
                                            </p>
                                            <p>
                                                <i class="bi bi-eye"></i> {item.luotxem}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))

                    }

                </div>
                <div className='d-flex title-content'>
                    <h3 className='ps-4 pe-3'><b>Thể thao</b></h3>  <hr className='w-50' style={{ height: '5px', color: 'red', opacity: '0.6' }}></hr>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 pb-3">
                    {
                        listBongda.map((item, index) => (
                            <a key={index} href={`/Detail/${item.id}`} className="col">
                                <div className="card h-100">
                                    {item.anh && (
                                        <img className="card-img-top" src={`data:image/jpeg;base64,${item.anh}`} />
                                    )}

                                    <div className="card-body text-start">
                                        <div>
                                            <h5 className="card-text">{item.tenbaibao}</h5>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p>
                                                <i>
                                                    Tác giả: {item.tacgia}
                                                    <br />
                                                    {item.ngaydang}
                                                </i>
                                            </p>
                                            <p>
                                                <i class="bi bi-eye"></i> {item.luotxem}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))

                    }

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

export default Content;