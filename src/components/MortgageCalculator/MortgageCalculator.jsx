import React from 'react';
import Button from 'react-bootstrap/Button';
import './MortgageCalculator.css';

class MortgageCalculator extends React.Component {
    constructor() {
        super();
        this.state = {
            fullPrice: '',
            deposit: '',
            interest: '',
            years: '',
            total: '0'
        }
    }

    handleFullPrice(event) {
        const fullPrice = event.target.value;
        console.log(fullPrice);
        this.setState({fullPrice: fullPrice});
    }

    handleDeposit(event) {
        const deposit = event.target.value;
        console.log(deposit);
        this.setState({deposit: deposit});
    }

    handleInterest(event) {
        const interest = event.target.value;
        console.log(interest);
        this.setState({interest: interest});
    }

    handleYears(event) {
        const years = event.target.value;
        console.log(years);
        this.setState({years: years});
    }

    handleTotal(event) {
        event.preventDefault();
        let principal = this.state.fullPrice - this.state.deposit;
        let monthlyInterest = this.state.interest / 100 / 12;
        let numberOfPayments = this.state.years * 12;
        const total = (principal * [monthlyInterest * (1 + monthlyInterest) ** numberOfPayments]) / [(1 + monthlyInterest) ** numberOfPayments - 1];
        console.log(total);
        const totalPrecision = total.toPrecision(5);
        this.setState({total: totalPrecision});
    }

    render() {
        return(
            <div className="mortgage-section container d-flex flex-column align-items-center py-5">
                <h2 className='text-capitalize mb-3'>
                    <strong>Mortgage calculator</strong>
                </h2>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore, saepe sit corporis ea enim pariatur nostrum debitis asperiores, quo facilis repellendus, quam iusto! Culpa illo nisi, eaque iusto ex odio, similique labore facilis molestias atque nemo qui. Obcaecati, libero.</p>
                <form className='bg-dark text-light d-flex flex-column align-items-center p-5' id="calculator-form" onSubmit={(event) => this.handleTotal(event)} >
                    <div className="mb-3 d-flex flex-column w-100">
                        <label className='text-capitalize' htmlFor="full-price">Full price</label>
                        <input className="w-100 border-0 px-3" type="number" name="full-price" placeholder='Ex: 470000' onChange={(event) => this.handleFullPrice(event)} required />
                    </div>
                    <div className="mb-3 d-flex flex-column w-100">
                        <label htmlFor="deposit">Deposit</label>
                        <input className="w-100 border-0 px-3" type="number" name="deposit" placeholder='Ex: 70500' onChange={(event) => this.handleDeposit(event)} required />
                    </div>
                    <div className="mb-3 d-flex flex-column w-100">
                        <label htmlFor="interest">Interest</label>
                        <input className="w-100 border-0 px-3" type="number" name="interest" placeholder='Ex: 3' onChange={(event) => this.handleInterest(event)} required />
                    </div>
                    <div className="mb-3 d-flex flex-column w-100">
                        <label htmlFor="years">Years</label>
                        <input className="w-100 border-0 px-3" type="number" name="years" placeholder='Ex: 35' onChange={(event) => this.handleYears(event)} required />
                    </div>

                    <Button id="calculator-submit" type="submit" className='rounded-0 border-0 text-uppercase mt-3 mb-4 shadow' variant='dark' size='lg'>Submit</Button>

                    <div className='w-100 d-flex flex-column flex-md-row justify-content-center align-items-center p-4 text-dark' id="calculator-result">
                        <p className='mx-1 mb-0'>Result:</p>
                        <p className='mx-1 mb-0'>
                            <strong>£{this.state.total}</strong> per month
                        </p>
                    </div>
                </form>              
            </div>
        )
    }
}

export default MortgageCalculator;
