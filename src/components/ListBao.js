import axios from 'axios';
import '../css/listbao.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function ListBao(props) {
    const [showModal, setShowModal] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);
    const [listBao, setListBao] = useState([])
    const [search, setSeacrh] = useState('')
    const [totalPage, setTotalPage] = useState(0)
    const [pageNumber, setPageNumber] = useState(0)
    const loadData = async () => {
        const res = await axios.get(`http://localhost:9191/listBaoPaging?search=${search}&pageNumber=${pageNumber}&pageSize=5`)
        // const reversedData = res.data.content.reverse()
        setListBao(res.data.content)
        setTotalPage(res.data.totalPages)
    }
    useEffect(() => {
        loadData()
    }, [pageNumber, search])

    const handleShowModal = (id) => {
        setIdToDelete(id)
        setShowModal(true)
    }
    const handleCloseModal = () => setShowModal(false)
    const handlePageClick = (event) => {
        setPageNumber(+event.selected)
    }
    console.log('listBao000000', listBao);

    const xoaBaiBao = async (id) => {
        await axios.delete(`http://localhost:9191/xoabaibao/${id}`)
        handleCloseModal()
        setListBao(listBao.filter((item) => item.id !== id))
        toast.success('Xóa thành công')
    }

    return (
        <div className='col p-0 overflow-auto'>
            <div className='d-flex justify-content-between p-3'>
                <h5 className='d-none d-sm-inline font-weight-boldx'>Danh sách bài báo</h5>
                <div className='search-user'>
                    <i class="bi bi-search p-1"></i>
                    <input type='text' placeholder='Nhập để tìm kiếm' onChange={(e) => setSeacrh(e.target.value)} />
                </div>
            </div>
            <div className='p-2'>
                <table class="table table-bordered text-center align-middle">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Ảnh</th>
                            <th>Tên bài báo</th>
                            <th>Ngày đăng</th>
                            <th>Tác giả</th>
                            <th>Thể loại</th>
                            <th colSpan={2}>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listBao.map((item, index) => (
                            <>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.anh && (
                                        <img className='img-listbao' src={`data:image/jpeg;base64,${item.anh}`} />
                                    )}
                                    </td>
                                    <td>{item.tenbaibao}</td>
                                    <td>{item.ngaydang}</td>
                                    <td>{item.tacgia}</td>
                                    <td>{item.theloai}</td>
                                    <td>
                                        <Link className='nav-link' to={`/update/${item.id}`}>
                                            <i className="fs-3 bi bi-pencil-square text-warning cursor-pointer" ></i>
                                        </Link>
                                    </td>
                                    <td>
                                        <i className="fs-3 bi bi-trash3-fill text-danger cursor-pointer" onClick={() => handleShowModal(item.id)}></i>
                                    </td>
                                    {/* <!-- Modal --> */}
                                </tr>
                                {showModal === true && (
                                    <div className='modal-delete bg-white'>
                                        <div className='title-modal mb-4'>
                                            <h5>Bạn có chắc chắn muốn xóa</h5>
                                        </div>
                                        <div className='d-flex justify-content-around '>
                                            <button className='btn btn-outline-secondary' onClick={handleCloseModal}>Đóng</button>
                                            <button className='btn btn-outline-danger' onClick={() => xoaBaiBao(idToDelete)}>Xóa</button>
                                        </div>
                                    </div>

                                )}
                            </>
                        ))
                        }
                    </tbody>
                </table>
                <div className='d-flex justify-content-center'>
                    <ReactPaginate
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={totalPage}
                        previousLabel="<"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>


        </div>
    );
}

export default ListBao;