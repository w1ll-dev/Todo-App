import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

//REACT AND REACT-REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription } from './changeDescription'


const TodoForm = props => {
   const keyHandler = (e) => {
      switch (e.key){
         case 'Enter':
            props.handleAdd()
               break
         case 'Escape':
            props.handleClear()
               break
         default:
            return
      }
   }
   return (
      <div role='form' className="todoForm">
          <Grid cols="12 9 10">
              <input 
               type="text" 
               className='form-control' 
               placeholder='Add new task' 
               value = {props.description} 
               onChange = {props.changeDescription}
               onKeyUp={keyHandler}
               autoFocus
               />
           </Grid>
   
           <Grid cols="12 3 2">  
              <IconButton 
                  style='primary' 
                  icon='plus' 
                  onClick = {props.handleAdd}
               />
               <IconButton
                  style='info'
                  icon='search'
                  onClick={props.handleSearch}       
               />
               <IconButton
                  style='defalt'
                  icon='close'
                  onClick={props.handleClear}
               />
           </Grid> 
      </div>
   )
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)