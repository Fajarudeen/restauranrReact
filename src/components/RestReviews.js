import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


function RestReviews({reviews}) {
    console.log(reviews);
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button variant="dark" className='my-3'
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                show reviews
            </Button>
            <div style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                   <div className='my-3' id='example-collapse-text'>
                    {
                        reviews.map(item=>(
                            <div>
                                <h6> {item.name} : <span>{item.data}</span> </h6>
                                <p>
                                    Ratings: {item.rating}
                                </p>
                                <p>
                                    Comments: {item.comments}
                                </p>
                            </div>
                        ))
                    }
                   </div>
                </Collapse>
            </div>
        </>
    )
}

export default RestReviews
