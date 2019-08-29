import React from 'react'
import IconButton from '../template/iconButton'
 
import { connect } from 'react-redux'

const TodoList = props => {

    const list = props.list || []
    
    const renderRows = () => {
        return list.map(todo => (
                <tr key={todo._id}>
                    <td className={todo.done ? 'markedAsDone' : 'markedAsPending'}>
                        {todo.description}
                    </td>
                    <td>
                        <IconButton
                            style='success'
                            icon='check'
                            onClick={() => props.handleMakedAsDone(todo)}
                            hide={todo.done}
                        />
                        <IconButton
                            style='warning'
                            icon='undo'
                            onClick={() => props.handleMakedAsPending(todo)}
                            hide={!todo.done}
                        />
                        <IconButton
                            style='danger'
                            icon='trash-o'
                            onClick={() => props.handleRemove(todo)}
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

const mapStateToProps = state => ({ list: state.todo.list })

export default connect(mapStateToProps)(TodoList)