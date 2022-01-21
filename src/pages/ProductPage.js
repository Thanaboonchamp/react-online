import axios from "axios";
import React from "react";
import { Table,Image,Badge,Spinner,Button} from "react-bootstrap"
import {BsMouseFill} from'react-icons/bs'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductPage = () => {

    const [product, setProduct] = React.useState([])
    const [loading,setLoading] = React.useState(false)
    const [error,setError] = React.useState(null)

    const getData = async() =>{
        try{
            setLoading(true) //เริ่มหมุน
            const resp = await axios.get('https://api.codingthailand.com/api/course')
            //console.log(resp.data)
            setProduct(resp.data.data)
        }catch(error){
            setError(error)
            console.log(error.resp)
        }
        finally{
            setLoading(false)
        }
    }

    React.useEffect(()=>{
        getData()
    },[])
    if(loading === true){
        return(
            <div className="text-center mt-5">
                <Spinner animation="border" variant="warning" />
            </div>
            
        )
    }
    if(error){
        return(
            <div className="text-center mt-5 text-danger">
                <h4>Error from API, plese try again</h4>
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
                <th>Course Title</th>
                <th>Course Detail</th>
                <th>Created Date</th>
                <th>View</th>
                <th>Picture</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
                {
                    product.map((p,index)=>{
                        return(
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.detail}</td>
                                <td>{p.date}</td>
                                <td><Badge variant="success">{p.view}</Badge>{' '}</td>
                                <td><Image src={p.picture} rounded width={50}/></td>
                                
                                <td>
                                    <Link to={`/detail/${p.id}/title/${p.title}`}>
                                    <Button  variant="outline-primary">Click <BsMouseFill color='primary'/></Button>
                                    </Link>
                                    </td>
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
};

export default ProductPage;
