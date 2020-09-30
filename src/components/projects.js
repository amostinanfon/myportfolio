import React, { Component } from 'react'
import { Tabs ,Tab , Grid, Cell,Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText  } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0} ;
    }
toggleCategories() {
    if (this.state.activeTab === 0) {
        return (
            <div className="projects-Grid">
                <Card shadow={5} style={{minWidth: 450, margin: 'auto'}}>
                    <CardTitle style={{color : '#fff', height: '176px' , background:
                        'url(https://synbioz-website-attachments.s3.eu-west-1.amazonaws.com/articles/20160412/discover-react_thumb_450.png) center/cover'}}>
                        React Project #1 
                    </CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>   
                        <Button colored>Live Demo</Button>    
                    </CardActions>
                    <CardMenu>
                        <IconButton name="share"/>   
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: 450, margin: 'auto'}}>
                    <CardTitle style={{color : '#fff', height: '176px' , background:
                        'url(https://synbioz-website-attachments.s3.eu-west-1.amazonaws.com/articles/20160412/discover-react_thumb_450.png) center/cover'}}>
                        React Project #2
                    </CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>   
                        <Button colored>Live Demo</Button>    
                    </CardActions>
                    <CardMenu>
                        <IconButton name="share"/>   
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: 450, margin: 'auto'}}>
                    <CardTitle style={{color : '#fff', height: '176px' , background:
                        'url(https://synbioz-website-attachments.s3.eu-west-1.amazonaws.com/articles/20160412/discover-react_thumb_450.png) center/cover'}}>
                        React Project #3
                    </CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>   
                        <Button colored>Live Demo</Button>    
                    </CardActions>
                    <CardMenu>
                        <IconButton name="share"/>   
                    </CardMenu>
                </Card>
            </div>
        )
    } else if (this.state.activeTab === 1) {
        return (
            <div><h1>This is Express</h1></div>
        )
    }
}

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState ({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Express</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>VueJS</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;
