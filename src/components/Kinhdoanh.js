import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Kinhdoanh(props) {
    const [loading, setLoading] = useState(true)
    const [listBao, setListBao] = useState([])

    useEffect(()=>{
        loadData()
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    },[])

    const loadData = async () => {
        const res = await axios.get("http://localhost:9191/listTheLoai?theloai=kinh doanh")
        setListBao(res.data)
    }
    return (
        <div className="container pageDetail">
                <div className="row row-cols-1 row-cols-md-3 g-4 pb-3">
                    {
                        listBao.map((item, index) => (
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

export default Kinhdoanh;