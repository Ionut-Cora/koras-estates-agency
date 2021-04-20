import React from 'react';
import './MortgageCalculator.css';

class MortgageCalculator extends React.Component {
    constructor() {
        super();
        this.state = {
            fullPrice: '',
            deposit: '',
            interest: '',
            years: '',
            total: ''
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
            <div className="mortgage-section container">
                <h2>Mortgage Calculator</h2>
                <form id="calculator-form">
                    <label htmlFor="full-price">Full price</label>
                    <input className="calculator-input" type="number" name="full-price" onChange={(event) => this.handleFullPrice(event)} />
                    <label htmlFor="deposit">Deposit</label>
                    <input className="calculator-input" type="number" name="deposit" onChange={(event) => this.handleDeposit(event)} />
                    <label htmlFor="interest">Interest</label>
                    <input className="calculator-input" type="number" name="interest" onChange={(event) => this.handleInterest(event)} />
                    <label htmlFor="years">Years</label>
                    <input className="calculator-input" type="number" name="years" onChange={(event) => this.handleYears(event)} />
                    <input id="calculator-submit" type="submit" onClick={(event) => this.handleTotal(event)} />
                </form>
                <div id="calculator-result">
                    <p>Total:</p>
                    <p>£{this.state.total}</p>
                </div>
            </div>
        )
    }
}

export default MortgageCalculator;
