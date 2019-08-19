import { Component, render, h } from '/web_modules/preact.js';
class App extends Component {
    addTodo() {
        const { todo = [] } = this.state;
        this.setState({ todo: todo.concat(`Item ${todo.length}`) });
    }
    render({ page = '' }, { todo = [] }) {
        return (h("div", { class: "app" },
            h(Header, { name: `ToDo ${page}` }),
            h("ul", null, todo.map((todo, i) => h("li", { key: i }, todo))),
            h("button", { class: "btn", onClick: () => this.addTodo() }, "\u2728 Add Item"),
            h(Footer, null, "footer content here")));
    }
}
const Header = ({ name = "" }) => h("header", null,
    h("h2", null,
        name,
        " List"));
const Footer = (props) => h("footer", Object.assign({}, props));
render(h(App, { page: "List" }), document.querySelector('#app'));
