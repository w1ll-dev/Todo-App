import React from 'react'
import Grid from '../template/grid'

export default props => (
   <div role='form' className="todoForm">
       <Grid cols="12 9 10">
           <input type="text" className='form-control' placeholder='Add new task'></input>
        </Grid>

        <Grid cols="12 3 2">  
            <button className='btn btn-primary'>
                 <i className='fa fa-plus'></i>
            </button>
        </Grid> 
   </div>
)