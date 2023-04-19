import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ReviewForm.css';

class ReviewForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            comment: ""
        };
    }

    handleName(event) {
        const name = event.target.value;
        this.setState({name: name});
    }

    handleComment(event) {
        const comment = event.target.value;
        this.setState({comment: comment});
    }

    handleSubmit(event) {
        event.preventDefault();

        let list = document.getElementById('list');
        let newCustomer = document.createElement('li');
        // newCustomer.appendChild(document.createTextNode(this.state.name + ' - ' + this.state.comment));

        newCustomer.className += 'col-12 col-lg-6 my-3';
        newCustomer.innerHTML = `
            <div class="card h-100 rounded-0">
                <div class="card-body d-flex align-items-center justify-content-center">
                    <p class="card-text text-light">` + this.state.name + ` - ` + this.state.comment + `</p>
                </div>
            </div>
        `;
        list.appendChild(newCustomer);
    }

    render() {
        return(
            <div className='bg-dark py-5' id="review-section">
                <div className="container">
                    <h3 className='text-light text-capitalize mb-3'>
                        <strong>What are our customers saying?</strong>
                    </h3>
                    <p className='text-light mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste doloribus praesentium fugiat est quas sapiente voluptas neque cupiditate consequuntur ad, placeat commodi! Expedita a nobis doloremque praesentium possimus cumque.</p>
                    <ul className='row justify-content-center p-0 list-unstyled'>
                        <li className='col-12 col-lg-6 my-3'>
                            <Card className='h-100 rounded-0'>
                                <Card.Body className='d-flex align-items-center justify-content-center'>
                                    <Card.Text className='text-light'>John Smith - The best estate agency in London !</Card.Text>
                                </Card.Body>
                            </Card>                      
                        </li>
                        <li className='col-12 col-lg-6 my-3'>
                            <Card className='h-100 rounded-0'>
                                <Card.Body className='d-flex align-items-center justify-content-center'>
                                    <Card.Text className='text-light'>Emma Bower - They helped me to buy my own property. I recommend them !</Card.Text>
                                </Card.Body>
                            </Card>
                        </li>
                        <li className='col-12 col-lg-6 my-3'>
                            <Card className='h-100 rounded-0'>
                                <Card.Body className='d-flex align-items-center justify-content-center'>
                                    <Card.Text className='text-light'>Mark Elbert - I rented a flat with their help and I'm very happy !</Card.Text>
                                </Card.Body>
                            </Card>
                        </li>
                        <li className='col-12 col-lg-6 my-3'>
                            <Card className='h-100 rounded-0'>
                                <Card.Body className='d-flex align-items-center justify-content-center'>
                                    <Card.Text className='text-light'>Anna Gold - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, maxime.</Card.Text>
                                </Card.Body>
                            </Card>
                        </li>
                    </ul>

                    <div className='d-flex justify-content-center'>                  
                        <form className='bg-light py-4 px-5' id="customer-form" onSubmit={(event) => this.handleSubmit(event)}>
                            <div className='mb-3 d-flex flex-column'>
                                <label className='text-capitalize' id="name-text" htmlFor="name">Your name</label>
                                <input className='p-2' id="name" type="text" name="name" onChange={(event) => this.handleName(event)} required />
                            </div>
                            <div className='mb-3 d-flex flex-column'>
                                <label className='text-capitalize' htmlFor="customer-review">Your review</label>
                                <textarea className='p-2' id="customer-review" name="comment" form="customer" rows="3" onChange={(event) => this.handleComment(event)} required ></textarea>
                            </div>
                            <div>
                                <Button className='rounded-0 border-0 text-uppercase' id="name-submit" type="submit" variant='dark' size='lg'>Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewForm;
