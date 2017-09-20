import React, { Component } from 'react';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Input from 'react-toolbox/lib/input';
import Button from 'react-toolbox/lib/button';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: ['Finish this talk', 'Get a job', 'Get married', 'Crush Patriarchy'],
      currentTask: ''
    }
  }


  handleChange = (event) => {
    this.setState({
      currentTask: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let {currentTask} = this.state
    if (currentTask) {
      this.setState({
        tasks: [...this.state.tasks, currentTask],
        currentTask: ''
      })
    }
  }

  render() {
    let {tasks, currentTask} = this.state;
    return (
      <ThemeProvider>
        <div className="App">
          <div className="App-header">
            <h2>All the To Dos!</h2>
          </div>
          <div className="App-content">
            <form onSubmit={this.handleSubmit}>
              <Input type='text'
                    label='Task'
                    name='name'
                    value={currentTask}
                    onChange={this.handleChange}
                    />
              <Button icon='add' label='Add this' />
            </form>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
