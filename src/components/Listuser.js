import React from 'react';
import '../css/listuser.css'

function Listuser(props) {
    return (
        <div className='col p-0 overflow-auto'>
            <div className='d-flex justify-content-between p-3'>
                <h5 className='d-none d-sm-inline font-weight-boldx'>Danh sách người dùng</h5>
                <div className='search-user'>
                    <i class="bi bi-search p-1"></i>
                    <input type='text' placeholder='Nhập để tìm kiếm' />
                </div>
            </div>
            <div className='p-2'>
                <table class="table table-hover table-bordered text-start ">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Email</th>
                            <th>Chức Năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>
                                <i class="fs-3 bi bi-pencil-square text-warning me-4 "></i>
                                <i class="fs-3 bi bi-trash3-fill text-danger"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>
                                <i class="fs-3 bi bi-pencil-square text-warning me-4 "></i>
                                <i class="fs-3 bi bi-trash3-fill text-danger"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>
                                <i class="fs-3 bi bi-pencil-square text-warning me-4 "></i>
                                <i class="fs-3 bi bi-trash3-fill text-danger"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>
                                <i class="fs-3 bi bi-pencil-square text-warning me-4 "></i>
                                <i class="fs-3 bi bi-trash3-fill text-danger"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>
                                <i class="fs-3 bi bi-pencil-square text-warning me-4 "></i>
                                <i class="fs-3 bi bi-trash3-fill text-danger"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>
                                <i class="fs-3 bi bi-pencil-square text-warning me-4 "></i>
                                <i class="fs-3 bi bi-trash3-fill text-danger"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>
                                <i class="fs-3 bi bi-pencil-square text-warning me-4 "></i>
                                <i class="fs-3 bi bi-trash3-fill text-danger"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>
                                <i class="fs-3 bi bi-pencil-square text-warning me-4 "></i>
                                <i class="fs-3 bi bi-trash3-fill text-danger"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <nav aria-label="Page navigation example" className='d-flex justify-content-center'>
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Listuser;