import React ,{Component,Fragment}from 'react'

class TodoItem extends Component {
    //子组件如果想和父组件通信,子组件要调用父组件传递过来的方法
    constructor(props) {
        super(props);
        this.handleCheck = this.handleCheck.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleCheck() {
        // this.props.delete(this.props.index)
    }
    handleDelete() {
        this.props.delete(this.props.index)
    }
    render() {
        const {content} = this.props
        return (
            <Fragment>
                <div className='cf item'>
                    <input type='checkbox' onChange={this.handleCheck}/>
                    <span >{content}</span>
                    <span className='icon-del span-right' onClick={this.handleDelete}>x</span>
                </div>
            </Fragment>
        )
    }
}
export default TodoItem