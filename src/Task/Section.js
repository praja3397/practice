import React, { useState } from 'react'
import { Accordion,  Col,  Container, Row } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';


function Task3() {

    const [formdata, setFormdata] = useState({
        sectionName: '',
        sectionDetails: ''
    });
    const [data, setData] = useState([])

    const handleChange = (e) => {
        console.log(e.target.value);
        setFormdata((prev) => ({ ...prev, id: uuidv4(), [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, formdata])
    }
    return (
        <>
            <Container className='p-5 mt-5 border border-black'>
                <Row>
                    <Col xs={4} className='border border-black p-4'>
                        <form onSubmit={handleSubmit}>
                            <h3>Add Section</h3>
                            <div className="form-group ">
                                <label >Section Header</label>
                                <input className="form-control border border-black"
                                    type='text'name='sectionName'value={formdata.sectionName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group mt-3 mb-4">
                                <label >Section Details</label>
                                <textarea
                                    className="form-control border border-black" rows="3"
                                    type='text' name='sectionDetails' value={formdata.sectionDetails}
                                    onChange={handleChange}>
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 ">Add</button>
                        </form>
                    </Col>
                    <Col>
                        {data.map((ele,i) => {
                            return <Accordion key={i}>Section Information
                                <Accordion.Item eventKey={ele.id}>
                                    <Accordion.Header>{ele.sectionName}</Accordion.Header>
                                    <Accordion.Body>
                                        {ele.sectionDetails}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        })}
                    </Col>
                </Row>
            </Container>
        </>


    )
}

export default Task3

