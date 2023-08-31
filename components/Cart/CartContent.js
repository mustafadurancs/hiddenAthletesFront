import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from "react-hot-toast";
import { useRouter } from 'next/router'
import QtyForm from './QtyForm'

import configData from  '../../jsconfig.json';

function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${configData.SERVER_URL}/questionaire/api/all`)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const handleDetailsClick = (email) => {
        fetch(`${configData.SERVER_URL}/questionaire/api/id/${email}`)
            .then(response => response.json())
            .then(data => {
                // Assuming the user-detail.js file exports an object with properties
                const { firstName, lastName, city, state, gpa } = data;
                // Display the details in some way, for example:
                console.log(`${firstName} ${lastName}, ${city}, ${state}, ${gpa}`);
            })
            .catch(error => {
                console.error(error);
                toast.error("Failed to fetch user details");
            });
    };

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
                        <th scope="col">Paid?</th>
                        <th scope="col">Details</th>
                    </tr>
                    </thead>

                    <tbody>
                    {data.map(item =>  (
                        <tr key={item.id}>
                            <td className="product-thumbnail">
                                <Link href={`/user-detail?id=${encodeURIComponent(item.id)}`}>
                                    <a onClick={() => handleDetailsClick(item.id)}>
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
                                {item.id}
                            </td>
                            <td>
                                <Link href={`/user-detail?id=${encodeURIComponent(item.id)}`}>
                                    <a onClick={() => handleDetailsClick(item.id)}>
                                <button onClick={() => handleDetailsClick(item.id)}>
                                    View Details
                                </button>
                                    </a>
                                </Link>
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
