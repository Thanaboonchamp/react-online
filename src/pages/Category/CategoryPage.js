import React, { useState, useEffect } from 'react'
import { Table, Image, Badge, Spinner, Button } from 'react-bootstrap'
import { FiEdit3,FiDelete } from 'react-icons/fi'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CategoryPage = () => {
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  useEffect(async () => {
    try {
      setLoading(true)
      const res = await axios.get('https://api.codingthailand.com/api/category')
      setCategory(res.data)
    } catch (error) {
      setError(error.response.data.message)
      console.error(error.response)
    } finally {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    )
  }
  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>Error from API, please try again</h4>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Category Page</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {category.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <Link to='#'>
                        <Button variant="outline-info">
                          Edit
                          <FiEdit3 />
                        </Button>
                      </Link>
                      &nbsp;&nbsp;
                      <Link to='#'>
                        <Button variant="outline-danger">
                          Delete
                          <FiDelete />
                        </Button>
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage