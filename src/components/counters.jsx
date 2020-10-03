import React from 'react'
import Counter from './counter'

export default class Counters extends React.Component {
    render() {
        return (
            <div>
                { 
                    this.props.counters.map(
                        counter => (
                            <div key={counter.id}>
                                    <div style={{"borderStyle": "rounded"}}>
                                        <Counter 
                                            key={counter.id}
                                            counter={counter}
                                            onDelete={this.props.onDelete}
                                            onIncrementCounterValue={this.props.onIncrementCounterValue}
                                            onSetCounterValue={this.props.onSetCounterValue}
                                        />
                                    </div>
                                <br />
                            </div>
                        )
                    ) 
                }
                <span class="border border-light">Total Cost: {this.totalCost()}</span>
                <br />
                <br />
                <button className="btn btn-primary" onClick={ this.props.onReset }>Reset Basket</button>
            </div>
        );
    };
    totalCost() {
        var cost = this.props.counters.reduce(
            (accumulator, counter) => accumulator + counter.unitPrice * counter.value,
            0
        );
        cost /= 100
        return "$" + cost;
    }
}