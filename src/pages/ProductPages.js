import React from 'react'
import { Table,Badge,Image,Spinner,Button} from 'react-bootstrap';
import axios from 'axios';
import {BiMessageSquareDetail} from "react-icons/bi"
import { NavLink } from 'react-router-dom';
const ProductPages = () => {

    const [product,setProduct] = React.useState([])
    const [loading,setLoading] = React.useState([false])
    const [error,setError] = React.useState()


    const getData = async() =>{
        try{
            setLoading(true)
            const resp = await axios.get('https://api.codingthailand.com/api/course')
            setProduct(resp.data.data)
        } catch(error){
            setError(error)
            //console.log(error.response)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() =>{
        getData()
    },[])

    if(loading === true){
        return(
            <div className='text-center mt-5'>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    if (error){
        return(
            <div className='text-center mt-5 text-danger'>
                <h4>Error from API,please try again</h4>
                <p>{error.response.data.message}</p>
            </div>
        )
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4">
            <h2>Product Page</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Detail</th>
                  <th>Create date</th>
                  <th>View</th>
                  <th>Picture</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {
                    product.map((p, index) =>{
                        return(
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.detail}</td>
                                <td>{p.date}</td>
                                <td><Badge variant="success"> {p.view}</Badge></td>
                                <td><Image src={p.picture} rounded width = {60} /></td>
                                <td><NavLink to={`/detail/${p.id}/title/${p.title}`}><Button variant="outline-success"> <BiMessageSquareDetail className='mr-1' color="green"/>Click</Button></NavLink></td>
                            </tr>
                        )
                    })
                }
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
}

export default ProductPages
