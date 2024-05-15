import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import '../css/listuser.css'

function Listuser(props) {
    const [showModal, setShowModal] = useState(false)
    const [showModalRole, setShowModalRole] = useState(false);
    const [loading, setLoading] = useState(true)
    const [listUser, setListUser] = useState([])
    const [search, setSeacrh] = useState('')
    const [totalPage, setTotalPage] = useState(0)
    const [pageNumber, setPageNumber] = useState(0)
    const [idToDelete, setIdToDelete] = useState(null);
    const [listRole, setListRole] = useState([])
    const [saveID, setSaveID] = useState('')

    const loadData = async () => {
        const res = await axios.get(`http://localhost:9191/listUserPaging?search=${search}&pageNumber=${pageNumber}&pageSize=10`)
        setListUser(res.data.content)
        setTotalPage(res.data.totalPages)
    }

    useEffect(() => {
        loadData()
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [pageNumber, search])

    const handlePageClick = (event) => {
        setPageNumber(+event.selected)
    }

    const handleDeleteUser = (id) => {
        axios.delete(`http://localhost:9191/xoaUser?id=${id}`)
        setListUser(listUser.filter((item) => item.id !== id))
        setShowModal(false)
        toast.success('Xóa tài khoản thành công')
    }

    const handleShowModal = (id) => {
        setIdToDelete(id)
        setShowModal(true)
    }
    const handleCloseModal = () => setShowModal(false)

    const handleCloseModalRole = () => setShowModalRole(false)

    const handleGetListRole = async (id) => {
        const res = await axios.get(`http://localhost:9191/listRole?idUser=${id}`)
        setListRole(res.data)

    }

    const saveIDUser = (id) =>{
        setSaveID(id)
    }

    const handleAddRole = async (id) =>{
        await axios.post(`http://localhost:9191/inserRoleinUser?idUser=${saveID}&idRole=${id}`)
        loadData()
        toast.success('Thêm quyền thành công')
    }

    return (
        <div className='col p-0 overflow-auto'>
            <div className='d-flex justify-content-between p-3'>
                <h5 className='d-none d-sm-inline font-weight-boldx'>Danh sách người dùng</h5>
                <div className='search-user'>
                    <i class="bi bi-search p-1"></i>
                    <input type='text' placeholder='Nhập để tìm kiếm' onChange={(e) => setSeacrh(e.target.value)} />
                </div>
            </div>
            <div className='p-2'>
                <table class="table table-hover table-bordered align-middle">
                    <thead>
                        <tr className='text-center'>
                            <th>STT</th>
                            <th>Tài khoản</th>
                            <th>Email</th>
                            <th>Quyền</th>
                            <th colSpan={3}>Chức Năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listUser.map((item, index) => (
                                <>
                                    <tr key={index}>
                                        <td className='text-center'>{index + 1}</td>
                                        <td>{item.taikhoan}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            {
                                                item.role.map((item) => (
                                                    <> {item.namerole}</>
                                                ))
                                            }
                                        </td>
                                        <td className='text-center'>
                                            <i class="fs-3 bi bi-plus-circle-fill text-success" onClick={() => { handleGetListRole(item.id);saveIDUser(item.id); setShowModalRole(true) }}></i>
                                        </td>
                                        <td className='text-center'>
                                            <i class="fs-3 bi bi-pencil-square text-warning"></i>
                                        </td>
                                        <td className='text-center'>
                                            <i class="fs-3 bi bi-trash3-fill text-danger" onClick={() => handleShowModal(item.id)}></i>
                                        </td>
                                    </tr>
                                    {showModal === true && (
                                        <div className='modal-delete bg-white'>
                                            <div className='title-modal mb-4 text-center'>
                                                <h5>Xóa người dùng</h5>
                                                <p>Bạn có chắc chắn muốn xóa người dùng</p>
                                            </div>
                                            <div className='d-flex justify-content-around'>
                                                <button className='btn btn-outline-secondary' onClick={handleCloseModal}>Đóng</button>
                                                <button className='btn btn-outline-danger' onClick={() => handleDeleteUser(idToDelete)}>Xóa</button>
                                            </div>
                                        </div>
                                    )}
                                    {showModalRole === true && (
                                        <div className='modal-delete bg-white'>
                                            <div className='title-modal mb-4'>
                                                <h5>Danh sách quyền</h5>
                                                <table className='table'>
                                                    <tbody>
                                                        {listRole && listRole.map((item, i) => (

                                                            <tr>
                                                                <td><p><b>{item[1]}</b></p></td>
                                                                <td> <button className='btn btn-success'onClick={()=>{handleAddRole(item[0],handleCloseModalRole())}}>Thêm</button></td>
                                                            </tr>

                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className='d-flex justify-content-around '>
                                                <button className='btn btn-outline-secondary' onClick={handleCloseModalRole}>Đóng</button>
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
                        nextLabel=">>"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={totalPage}
                        previousLabel="<<"
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
            {loading === true && (
                <div className="loaderbox">
                    <span className="loader"></span>
                </div>
            )}

        </div>
    );
}

export default Listuser;