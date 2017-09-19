import React, { Component } from 'react';
import { Button, List, Checkbox, Form } from 'semantic-ui-react'
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
      <div className="App">
          <div className="App-header">
            <h2>All the To Dos!</h2>
          </div>
          <div className="App-content">
            <Form onSubmit={this.handleSubmit} as="form">
              <Form.Field>
                <label className="margin">Task</label>
                <input value={currentTask} onChange={this.handleChange} />
              </Form.Field>
              <Button as="button" type='submit' onClick={this.handleSubmit}>Submit</Button>
            </Form>
            <hr/>
            <h3>Tasks</h3>
            <List className="list" as="ul">
              {tasks.map((task, index) => (
                <div key={index}>
                  <Checkbox className="inline margin"/>
                  <List.Item
                    className="inline"
                    content={task}
                  />
                </div>
              ))
              }
            </List>
          </div>
        </div>
    );
  }
}

export default App;
