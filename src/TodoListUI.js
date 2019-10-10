import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
    return (
        <div style={{ marginLeft: '10px', marginTop: '10px' }}>
            <div>
                <Input
                    value={props.inputValue}
                    placeholder='todo info'
                    style={{ width: '300px', marginRight: '10px' }}
                    onChange={props.handleInputChange}
                />
                <Button
                    type='primary'
                    onClick={props.handleButtonClick}
                >
                    Submit
            </Button>
            </div>
            <List
                style={{ width: '300px', marginTop: '10px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item
                    onClick={() => { props.handleItemDelete(index) }}
                >{item}</List.Item>)}
            >
            </List>
        </div>)
}
/* class TodoListUI extends Component {
    render() {
        return (
            <div style={{ marginLeft: '10px', marginTop: '10px' }}>
                <div>
                    <Input
                        value={this.props.inputValue}
                        placeholder='todo info'
                        style={{ width: '300px', marginRight: '10px' }}
                        onChange={this.props.handleInputChange}
                    />
                    <Button
                        type='primary'
                        onClick={this.props.handleButtonClick}
                    >
                        Submit
                        </Button>
                </div>
                <List
                    style={{ width: '300px', marginTop: '10px' }}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (<List.Item
                        onClick={(index) => { this.props.handleItemDelete(index) }}
                    >{item}</List.Item>)}
                >
                </List>
            </div>
        )
    }
} */

export default TodoListUI;