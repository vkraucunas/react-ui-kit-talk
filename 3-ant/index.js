import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


class App extends React.Component {
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
    let {tasks, currentTask} = this.state
    return (
      <div style={{ margin: 100 }}>
        <h1>AntDesign Demo</h1>
        <hr /><br />
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Input placeholder="Task" value={currentTask} onChange={this.handleChange} />
          <Button type="primary" htmlType="submit" onClick={this.handleSubmit} >Add Task</Button>
        </Form>
        <ul>
          {
            tasks.map((task, index) => (
              <div>
                <Checkbox />
                {task}
              </div>
            ))
          }
        </ul>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
