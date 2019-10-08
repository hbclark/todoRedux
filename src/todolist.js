import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();

    }
    render() {
        return (
            <div style={{ marginLeft: '10px', marginTop: '10px' }}>
                <div>
                    <Input value={this.state.inputValue} style={{ width: '300px', marginRight: '10px' }} />
                    <Button type='primary'>Submit</Button>
                </div>
                <List
                    style={{ width: '300px', marginTop: '10px' }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                >

                </List>
            </div>
        )
    }
}

export default TodoList;