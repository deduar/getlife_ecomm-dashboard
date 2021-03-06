import Header from './Header';
import {useState} from 'react'

function AddProduct(){
    const [name,setName]=useState("");
    const [file,setFile]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");

    async function addProduct(){
        const formData = new FormData();
        formData.append('file',file);
        formData.append('price',price);
        formData.append('name',name);
        formData.append('description',description);

        let result = await fetch("http://localhost:8000/api/addproduct",{
            method:'POST',
            body:formData
        });
        alert("Data has been saved");
    }

    return(
        <div>
            <Header />
            <h1>Add Product</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="name"/><br />
                <input type="file" className="form-control" onChange={(e)=>setFile(e.target.files[0])} placeholder="file"/><br />
                <input type="price" className="form-control" onChange={(e)=>setPrice(e.target.value)} placeholder="price"/><br />
                <input type="description" className="form-control" onChange={(e)=>setDescription(e.target.value)} placeholder="description"/><br />
                <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct