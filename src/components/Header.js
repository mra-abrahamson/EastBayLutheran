import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Welcome to the <br />East Bay Lutheran Parish</h1>
                <p>We are a non-profit ELCA organization sponsored by congregations in the East Bay, San Francisco Bay Area, California. We provide pastoral care, mentoring and education, inspire volunteers, steward our resources responsibly and maintain a meaningful Lutheran presence through service in our community.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About Us</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Volunteer</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Donate</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Education</a></li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>EBLP</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>LMNH</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>EBLYP</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact Us</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
