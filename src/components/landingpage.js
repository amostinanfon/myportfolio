import React, { Component } from 'react'
import { Grid , Cell} from 'react-mdl'

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
               <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            style={{height: '200px', margin: '30px 0 20px 0', padding: '20px 0 15px 0'}}
                        />
                        <div className="banner-text">
                            <h1>Développeur Full Stack</h1>
                            <hr/>
                            <p>HTML / CSS | Bootstrap | Javascript | React | React Native | NodeJS | Express | MongoDB</p>
                         
                                <div className="social-links">

                                    {/* Lien LinkedIn*/}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" area-hidden="true"/>
                                    </a>                           
                                

                                    {/*Lien Github*/}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" area-hidden="true"/>
                                    </a> 

                                    {/*Lien Freecodecamp*/}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-free-code-camp" area-hidden="true"/>
                                    </a>    

                                    {/*Lien Youtube*/}
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

