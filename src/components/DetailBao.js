import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/detailbao.css'

function DetailBao(props) {
    const [loading, setLoading] = useState(true)
    const [listBao, setListBao] = useState([])
    const [onePost, setOnePost] = useState([])
    const [listBaoNB, setListBaoNB] = useState([])
    const { id } = useParams()

    useEffect(() => {
        loadData()
        loadDataNoiBat()
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const loadData = async () => {
        const res = await axios.get(`http://localhost:9191/baibao/${id}`)
        setOnePost(res.data)
        const res2 = await axios.get(`http://localhost:9191/listLienQuan?theloai=${res.data.theloai}&id=${res.data.id}`)
        const sliceData = res2.data.slice(0, 5)
        setListBao(sliceData)
    }
    const loadDataNoiBat = async () => {
        const res = await axios.get("http://localhost:9191/listNoiBat")
        const sliceData = res.data.slice(0, 9)
        setListBaoNB(sliceData)
    }
    return (
        <div className='container'>
            <div className="row mt-5 p-4 me-0 ms-0">
                <div className="col-md-7 image-container box-content-detail me-0 ms-0">
                    {
                        <div dangerouslySetInnerHTML={{ __html: onePost.noidung }} />
                    }
                </div>
                <div className="col-md-5 category " >
                    <div className='tieude'>
                        <h3><b>Tin liên quan</b></h3>
                    </div>
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
            </div>
            <div className='d-flex title me-0 ms-0'>
                <h3 className='ps-4 pe-3'><b>Tin nổi bật</b></h3>  <hr className='w-50' style={{ height: '5px', color: 'red', opacity: '0.6' }}></hr>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 p-4 me-0 ms-0">
                {
                    listBaoNB.map((item, index) => (
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

            {loading === true && (
                <div className="loaderbox">
                    <span className="loader"></span>
                </div>
            )}
        </div>
    );
}

export default DetailBao;