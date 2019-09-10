import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[],
      inputValue:'',
      isFinishedList:[]
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleEnterKey = this.handleEnterKey.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
 
  //父组件通过属性的形式向子组件传递参数
  //子组件通过props接受父组件传递过来的参数
  handleInputChange(e) {
    this.setState({
      inputValue : e.target.value
    })
  }

  handleEnterKey(e) {
    if(e.nativeEvent.keyCode === 13) {
      if(this.state.inputValue !== '') {
        this.setState({
          list: [...this.state.list,this.state.inputValue],
          inputValue:''
        })
      }
    }
  }

  handleDelete(index) {
    const list = [...this.state.list]
    const isFinishedList = [...this.state.isFinishedList]
    isFinishedList.push(list.splice(index,1))
    //es6:如果对象键值相同,可以直接写｛list｝,优化后如下
    // this.setState({
    //   list: list
    // })
    this.setState({list,isFinishedList})
  }

  getTodoItems() {
    return (
      this.state.list.map((item,index) => {
        return (
          <TodoItem 
            delete={this.handleDelete} 
            key={index} 
            content={item} 
            index={index}
          />
        )
      })
    )
  }
  getFinishTodoItems() {
    return (
      this.state.isFinishedList.map((item,index) => {
        return (
          <TodoItem 
            delete={this.handleDelete} 
            key={index} 
            content={item} 
            index={index}
          />
        )
      })
    )

  }

  render() {
    return (
        <Fragment>
          <div className='add-wrap'>
              <span className='add-title title'>TodoList</span>
              <input 
                value={this.state.inputValue} 
                onChange={this.handleInputChange} 
                onKeyPress={this.handleEnterKey} 
                placeholder="添加Todo" 
                className='add-input'
              />
          </div>
          
            <div className='process-wrap'>
              <div className='cf'>
                <span className='title'>正在进行</span>
                <span className='span-right'>{this.state.list.length}</span>
              </div>
            <ul className='item-wrap'>{this.getTodoItems()}</ul>
            </div>

            <div className='finish-wrap'>
              <div className='cf'>
                <span className='title'>已经完成</span>
                <span className='span-right'>{this.state.isFinishedList.length}</span>
              </div>
          {/*     <ul className='item-wrap'>{this.getFinishTodoItems()}</ul> */}
            </div>
        </Fragment>
    );
  }
  
}

export default TodoList;
