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
                <button className="btn btn-primary" onClick={ this.props.onReset }>Reset Basket</button>
            </div>
        );
    };
}