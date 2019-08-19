import { Component, render, h } from '/web_modules/preact.js';

class App extends Component<{ page: string }, { todo: any[] }> {
  addTodo() {
    const { todo = [] } = this.state;
    this.setState({ todo: todo.concat(`Item ${todo.length}`) });
  }

  render({ page = '' }, { todo = [] }) {
    return (
      <div class="app">
        <Header name={`ToDo ${page}`} />
        <ul>
          {todo.map((todo, i) => <li key={i}>{todo}</li>)}
        </ul>
        <button class="btn" onClick={() => this.addTodo()}>✨ Add Item</button>
        <Footer>footer content here</Footer>
      </div>
    );
  }
}

const Header = ({ name = "" }) => <header><h2>{name} List</h2></header>

const Footer = (props) => <footer {...props} />

render(<App page="List" />, document.querySelector('#app'));