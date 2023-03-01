import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from "react-hot-toast";
import { useRouter } from 'next/router'
import QtyForm from './QtyForm'


function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/questionaire/api/all')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <>
            <div className="cart-table table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Email</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Submission Date</th>
                            <th scope="col">General Info</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map(item =>  (
                            <tr key={item.id}>
                                <td className="product-thumbnail">
                                    <Link href="/product-details">
                                        <a>
                                            {item.email}
                                        </a>
                                    </Link>
                                </td>

                                <td className="product-name">
                                        {item.firstName}
                                </td>

                                <td className="product-price">
                                    <span className="unit-amount">{item.lastName}</span>
                                </td>

                                <td className="product-price">
                                    <span className="unit-amount">{item.creationDate}</span>
                                </td>
                                <td className="product-name">
                                    {item.generalInfo}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    );
}

export default Table
