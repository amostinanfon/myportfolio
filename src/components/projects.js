import React, { Component } from 'react'
import { Tabs ,Tab , Grid, Cell,Card, CardTitle, CardActions, Button, CardMenu, IconButton, 
    CardText , List , ListItem, ListItemAction, ListItemContent, Icon  } from 'react-mdl';

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
                        <Button colored ><a style={{textDecoration: 'none' , color:'blue'}} href='https://github.com/amostinanfon/kxk_project' target='_blank' rel='noopener noreferrer'>Github</a></Button>
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
                        <Button colored><a style={{textDecoration: 'none', color: 'blue'}} href='https://github.com/amostinanfon/myportfolio' target='_blank' rel='noopener noreferrer'>GITHUB</a></Button>
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
                        <Button colored><a href="https://github.com/amostinanfon/mern-ecommerce-app-01>Github">GITUHUB</a></Button>
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
            <div className="projects-Grid">
            <Card shadow={5} style={{minWidth: 450, margin: 'auto'}}>
            <CardTitle style={{color : '#fff', height: '176px' , background:
                'url(https://codecondo.com/wp-content/uploads/2015/07/15-Websites-built-with-Express_785.png) center/cover'}}>
              Express Project #1
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
                'url(https://codecondo.com/wp-content/uploads/2015/07/15-Websites-built-with-Express_785.png) center/cover'}}>
                Express Project #2
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
                'url(https://codecondo.com/wp-content/uploads/2015/07/15-Websites-built-with-Express_785.png) center/cover'}}>
                Express Project #3
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
    } else if (this.state.activeTab === 2) {
        return (
            <div className="projects-Grid">
                <Card shadow={5} style={{minWidth: 450, margin: 'auto'}}>
                    <CardTitle style={{color : '#fff', height: '176px' , background:
                        'url(https://besthqwallpapers.com/Uploads/6-4-2020/127480/thumb2-javascript-black-logo-programming-language-grid-metal-background-javascript-artwork.jpg) center/cover'}}>
                        JS Project #1 
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
                        'url(https://besthqwallpapers.com/Uploads/6-4-2020/127480/thumb2-javascript-black-logo-programming-language-grid-metal-background-javascript-artwork.jpg) center/cover'}}>
                       JS Project #2
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
                        'url(https://besthqwallpapers.com/Uploads/6-4-2020/127480/thumb2-javascript-black-logo-programming-language-grid-metal-background-javascript-artwork.jpg) center/cover'}}>
                        JS Project #3
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
    } else if (this.state.activeTab === 3) {
        return (
            <div className="projects-Grid">
                <Card shadow={5} style={{minWidth: 450, margin: 'auto'}}>
                    <CardTitle style={{color : '#fff', height: '176px' , background:
                        'url(https://stayrelevant.globant.com/wp-content/uploads/2015/01/mongblog.png) center/cover'}}>
                        MongoDB Project #1 
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
                        'url(https://stayrelevant.globant.com/wp-content/uploads/2015/01/mongblog.png) center/cover'}}>
                       MongoDB Project #2
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
                        'url(https://stayrelevant.globant.com/wp-content/uploads/2015/01/mongblog.png) center/cover'}}>
                      MongoDB Project #3
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
    }
    else if (this.state.activeTab === 4) {
        return (
            
            <div className="projects-Grid">
                <Card shadow={5} style={{minWidth: 450, margin: 'auto'}}>
                    <CardTitle style={{color : '#fff', height: '176px' , background:
                        'url(https://www.log2e.com/wp-content/uploads/2019/01/vuejs_tutorial.png) center/cover'}}>
                        VueJS Project #1 
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
                        'url(https://www.log2e.com/wp-content/uploads/2019/01/vuejs_tutorial.png) center/cover'}}>
                       VueJS Project #2
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
                        'url(https://www.log2e.com/wp-content/uploads/2019/01/vuejs_tutorial.png) center/cover'}}>
                      VueJS Project #3
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
    }
}

toggleList() {
    return (
        <List style={{width: '500px'}}>
            <ListItem twoLine>
                <ListItemContent avatar="person" subtitle="lorem xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">nfon nfon thomas</ListItemContent>
                    <ListItemAction>
                    <a href="/"><Icon name="star" /></a>
                    </ListItemAction>
            </ListItem>
            <ListItem twoLine>
                <ListItemContent avatar="person" subtitle="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">tina nfon amos</ListItemContent>
                    <ListItemAction>
                    <a href="/"><Icon name="star" /></a>
                    </ListItemAction>
            </ListItem>
        </List>
    )
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
                <section className="projects-grid">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleList()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;
