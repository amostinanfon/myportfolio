import React, { Component } from 'react'
import { Grid , Cell} from 'react-mdl'

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
               <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                            //src="https://www.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
                            src= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHYOGRp82_r_ji6qvWf-3VwEG1Ju-KaJtIFQ&usqp=CAU"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML / CSS | Bootstrap | Javascript | React | React Native | NodeJS | Express | MongoDB</p>
                         
                                <div className="social-links">

                                    {/*LinkedIn*/}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" area-hidden="true"/>
                                    </a>                           
                                

                                    {/*Github*/}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" area-hidden="true"/>
                                    </a> 

                                    {/*Freecodecamp*/}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-free-code-camp" area-hidden="true"/>
                                    </a>    

                                    {/*Youtube*/}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-youtube-square" area-hidden="true"/>
                                    </a>                              
                            </div>
                        </div> 
                    </Cell>
               </Grid>
            </div>
        )
    }
}

export default Landing;

