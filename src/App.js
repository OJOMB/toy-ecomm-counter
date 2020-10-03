import React from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters'

export default class App extends React.Component {
    state = {
        counters: [
            { id: 1, item: "Door Key", value: 0 },
            { id: 2, item: "Trebuchet", value: 0 },
            { id: 3, item: "Potato Peeler", value: 0 },
            { id: 4, item: "Tinned Fish", value: 4 },
            { id: 5, item: "Cloth", value: 3}
        ]
    };
    render() {
        return (
        <div className="App">
            <NavBar 
                className="App-NavBar"
                totalItems={this.handleTotalItems}
            >
            </NavBar>
            <main className="App-main">
            <Counters 
                className="App-Counters"
                counters={this.state.counters}
                onDelete={this.handleDelete}
                onReset={this.handleReset}
                onIncrementCounterValue={this.handleIncrementCounterValue}
                onSetCounterValue={this.handleSetCounterValue}
            >
            </Counters>
            </main>
        </div>
        );
    };
    handleDelete = counter => {
        console.log("handleDelete event handler called with itemId: ", counter.id);
        if (window.confirm("Are you sure you want to delete the item: " + counter.item + "?")) {
            const counters = this.state.counters.filter(c => c.id !== counter.id);
            this.setState({ counters: counters });
        }
    };
    handleReset = () => {
        console.log("handleReset event handler called")
        this.state.counters.forEach(c => c.value = 0)
        this.setState({ counters: this.state.counters })
    };
    handleIncrementCounterValue = (counterId, increment) => {
        var newCounters = [...this.state.counters]
        for (let i = 0; i < newCounters.length; i++) {
            if (counterId === newCounters[i].id) {
                if (increment > 0 || (increment < 0 && newCounters[i].value > 0)) {
                    newCounters[i].value += increment;
                }
                break
            }
        }
        this.setState({ counters: newCounters })
    };
    handleSetCounterValue = (counterId, newValue) => {
        var newCounters = [...this.state.counters]
        for (let i = 0; i < newCounters.length; i++) {
            if (counterId === newCounters[i].id) {
                if (newValue < 1) {
                    newCounters[i].value = 0
                } else {
                    newCounters[i].value = newValue
                }
                break
            }
        }
        this.setState({ counters: newCounters })
    };
    handleTotalItems = () => {
        return this.state.counters.length
    };
}