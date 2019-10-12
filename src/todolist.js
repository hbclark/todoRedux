import React from 'react';
import { connect } from 'react-redux';
import {changeValue,addItem,deleteItem} from './store/actionCreators';
import {Input,List,Button} from 'antd';

const TodoList = (props)=> {
    const {inputValue,changeInputValue,handleDelete,handleClick,list}  =props;
    return (
            <div>
                <div>
                    <Input 
                    value={inputValue}
                    onChange  = {changeInputValue}
                    style={{width:'300px',marginRight:'10px'}}
                    />
                    
                    <Button
                        onClick ={handleClick}
                    >
                        Submit
                    </Button>
                </div>
                <ul>
                    
                    {
                        list.map((item,index)=>{
                            return <li key={index}
                            onClick = {()=>{handleDelete(index)}}
                            >{item}</li>
                        })
                    }
                    
                </ul>
            </div>   
    )
    
}


const mapStateToProps = (state) =>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
            changeInputValue(e){
                const action = changeValue(e);
                dispatch(action);
            },
            handleClick(){
                const action=addItem();
                dispatch(action);
            },
            handleDelete(index){
                const action=deleteItem(index);
                dispatch(action);

            }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);