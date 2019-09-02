import React, { Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

//REACT AND REACT-REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search, add } from './todoActions'


class TodoForm extends Component {
   constructor (props){
      super(props)
      this.keyHandler = this.keyHandler.bind(this)
   }
   keyHandler (e){
      const { add, search, description } = this.props
      switch (e.key){
         case 'Enter':
            e.shiftKey ? search() : add(description)
               break
         case 'Escape':
            props.handleClear()
               break
         default:
            return
      }
   }

   componentWillMount(){
      this.props.search()
   }
   
   render (){
      const { add, search, description } = this.props   
      return (
         <div role='form' className="todoForm">
            <Grid cols="12 9 10">
               <input 
                  type="text" 
                  className='form-control' 
                  placeholder='Add new task' 
                  value = {this.props.description} 
                  onChange = {this.props.changeDescription}
                  onKeyUp={this.keyHandler}
                  autoFocus
                  />
            </Grid>

            <Grid cols="12 3 2">  
               <IconButton 
                     style='primary' 
                     icon='plus' 
                     onClick = {() => add(description)}
                  />
                  <IconButton
                     style='info'
                     icon='search'
                     onClick={() => search()}       
                  />
                  <IconButton
                     style='defalt'
                     icon='close'
                     onClick={this.props.handleClear}
                  />
            </Grid> 
         </div>
      )
   }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)