import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Header from './Header';

function ProductList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    async function deleteOperation(id){
        let result = await fetch("http://localhost:8000/api/delete/"+id,{
            method:'DELETE'
        })
        result = await result.json();
        getData();
    }

    async function getData(){
        let result = await fetch("http://localhost:8000/api/list");
        result = await result.json();
        setData(result);
    }

    return (
        <div>
            <Header />
            <h1>Product Listing</h1>
            <div className="col-sm-10 offset-sm-1">
                <Table>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                        <td>Oprations</td>
                    </tr>
                    {
                        data.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><img src={"http://localhost:8000/" + item.file_path} style={{ width: 100 }} /></td>
                                <td><span onClick={()=>deleteOperation(item.id)} className="delete">Delete</span></td>
                            </tr>
                        )
                    }
                </Table>
            </div>
        </div>
    );
}

export default ProductList;