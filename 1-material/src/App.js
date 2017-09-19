import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: ['Finish this talk', 'Get a job', 'Get married',],
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
    let {tasks, currentTask} = this.state
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h2>All the To Dos!</h2>
          </div>
          <div className="App-content">
            <form onSubmit={this.handleSubmit}>
              <TextField
                floatingLabelText="Task Description"
                onChange={this.handleChange}
                value={currentTask}
              />
              <RaisedButton label="Add Task" onClick={this.handleSubmit} />
            </form>
            <hr/>
            <h3>Tasks</h3>
            <List className="list">
              {tasks.map((task, index) => (
                <ListItem
                leftCheckbox={<Checkbox />}
                primaryText={task}
                key={index}
              />
              ))
              }
            </List>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
