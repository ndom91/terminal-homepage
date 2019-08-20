import { Component } from 'preact';
export interface Props {
    value?: string;
}
export interface State {
    useOptional?: boolean;
}
export default class App extends Component<any, any> {
    render(): JSX.Element;
}
