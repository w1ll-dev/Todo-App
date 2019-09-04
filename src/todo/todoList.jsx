import React from 'react'
import IconButton from '../template/iconButton'
 
import { connect } from 'react-redux'
import { markAsDone, markAsPending, remove } from './todoActions'
import { bindActionCreators } from 'redux'

const TodoList = props => {

    const list = props.list || []
    
    const renderRows = () => {
        const { description } = props
        return list.map(todo => (
                <tr key={todo._id}>
                    <td className={todo.done ? 'markedAsDone' : 'markedAsPending'}>
                        {todo.description}
                    </td>
                    <td>
                        <IconButton
                            style='success'
                            icon='check'
                            onClick={() => props.markAsDone(todo, description)}
                            hide={todo.done}
                        />
                        <IconButton
                            style='warning'
                            icon='undo'
                            onClick={() => props.markAsPending(todo, description)}
                            hide={!todo.done}
                        />
                        <IconButton
                            style='danger'
                            icon='trash-o'
                            onClick={() => props.remove(todo, description)}
                        />
                    </td>
                </tr> 
            )
        )
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th className='tableActions'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list, description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)