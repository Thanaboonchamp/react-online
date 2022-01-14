import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { Spinner,Card,CardDeck } from 'react-bootstrap'

const DetailPages = () => {

    const {id, title} = useParams()

    const [detail,setDetail] = React.useState([])
    const [loading,setLoading] = React.useState([false])
    const [error,setError] = React.useState()


    const getData = async(id) =>{
        try{
            setLoading(true)
            const resp = await axios.get('https://api.codingthailand.com/api/course/'+ id)
            setDetail(resp.data.data)
        } catch(error){
            setError(error)
            //console.log(error.response)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() =>{
        getData(id)
    },[id])

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
            <h2>Detail Page</h2>
            <p>
              {title} ({id})
            </p>

            <div className="row">
              <CardDeck>
                {detail.length > 0 ? (
                  detail.map((d, index) => {
                    return (
                        <div className="col-md-4" key={d.ch_id}>
                      <Card className='mb-4 shadow-sm'>
                        <Card.Body>
                          <Card.Title>{d.ch_title}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">
                            {d.ch_dateadd}
                          </small>
                        </Card.Footer>
                      </Card>
                      </div>
                    );
                  })
                ) : (
                  <h1> NO DATA </h1>
                )}
              </CardDeck>
            </div>
          </div>
        </div>
      </div>
    );
}

export default DetailPages
