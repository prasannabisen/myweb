import React from 'react'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
// import Paper from '@material-ui/core/Paper';
// import { makeStyles } from '@material-ui/core/styles';

export default class About extends React.Component{
    render(){         
        return(<div>
            <h1>Language</h1>
                <div>
                    <Chip avatar={<Avatar>C</Avatar>} label="C++" onClick={this.handleClick} color="primary" />
                    <Chip avatar={<Avatar>J</Avatar>} label="Java" onClick={this.handleClick }color="primary" />
                    <Chip avatar={<Avatar>Js</Avatar>} label="Java Script" onClick={this.handleClick}color="primary" />
                    <Chip avatar={<Avatar>C</Avatar>} label="C" onClick={this.handleClick} color="primary"/>
                </div>
                <div>
                    <Chip avatar={<Avatar>R</Avatar>} label="React" onClick={this.handleClick} />
                    <Chip avatar={<Avatar>M</Avatar>} label="MongoDb" onClick={this.handleClick} />
                    <Chip avatar={<Avatar>N</Avatar>} label="Node js" onClick={this.handleClick} />
                    <Chip avatar={<Avatar>S</Avatar>} label="Sql" onClick={this.handleClick} />
                </div> 
                <div>
                    <Chip avatar={<Avatar>FB</Avatar>} label="Fire Base" onClick={this.handleClick} />
                    <Chip avatar={<Avatar>A</Avatar>} label="Aws" onClick={this.handleClick} />
                </div>
                <div>
                    <Chip avatar={<Avatar>A</Avatar>} label="Audrino" onClick={this.handleClick} />
                    <Chip avatar={<Avatar>R</Avatar>} label="Raspberry Pie" onClick={this.handleClick} />   
                </div>

        </div>)
    }
}