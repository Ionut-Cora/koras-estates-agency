import React from 'react';
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
        newCustomer.appendChild(document.createTextNode(this.state.name + ' - ' + this.state.comment));
        list.appendChild(newCustomer);
    }

    render() {
        return(
            <div>
                <h3>Reviews</h3>
                <h4>What are our customers saying?</h4>
                <ul id="list">
                    <li>John Smith - The best estate agency in London !</li>
                    <li>Emma Bower - They helped me to buy my own property. I recommend them !</li>
                    <li>Mark Elbert - I rented a flat with their help and I'm very happy !</li>
                </ul>

                <form id="customer" onSubmit={(event) => this.handleSubmit(event)}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={(event) => this.handleName(event)} required />
                    <input type="submit"/>
                </form>
                <textarea name="comment" form="customer" placeholder="Enter your review" cols="40" rows="5" onChange={(event) => this.handleComment(event)} required ></textarea>
            </div>
        )
    }
}

export default ReviewForm;
