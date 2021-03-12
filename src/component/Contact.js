import React from 'react'
import { dom } from '@fortawesome/fontawesome-svg-core'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHub from '@material-ui/icons/GitHub'
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

dom.watch()

export default class About extends React.Component{
    componentDidMount(){
    }
    render(){
        return(<div>
            <h1>Contact Page</h1>
            <FacebookIcon fontsize="large"/>
            <GitHub/>
            <PhoneIcon/>
            <LinkedInIcon/>
            <p>8085149997</p>
            <InstagramIcon/>
        </div>)
    }
}