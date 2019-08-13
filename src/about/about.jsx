import React from 'react'
import PageHeader from '../template/pageHeader'

export default props => (
    <div className='container'>
        <PageHeader name='About Us' small=' info'/>

        <h1>Our history:</h1>
            <h4>This is our history.</h4>
        <h1>Who we are?</h1>
            <h4>This is who we are.</h4>
        <h1>How to make contact?</h1>
            <h4>Social medias.</h4>
    </div>
)