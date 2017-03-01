const React = require('react');
const Head = require('../layout/head');
const Header = require('../layout/header');
const Foot = require('../layout/foot');
const Footer = require('../layout/footer');

let TemplateComponent = React.createClass({
	render : function() {
		return (
			<html lang="en">
				<Head name={this.props.name}>
				
				</Head>
				<body>
					<Header name={this.props.name}>
					</Header>
						{this.props.children}
					<Footer>
					</Footer>
					<Foot>
					</Foot>
				</body>
			</html>
		);	
	}
});

module.exports = TemplateComponent;