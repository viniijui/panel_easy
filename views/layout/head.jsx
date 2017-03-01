const React = require('react');
function testes(prop) {
  let title;
  if (prop  == 'teste') {
   	 	return 'hahahaha';
  } else {
   	 	return 'foda pra caralho';
  }
 }
 
let HeadComponent = React.createClass({
	render : function() {
		return (
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta name="description" content="Test"/>
				<meta name="author" content="Vinicius"/>
				<link rel="stylesheet" href="assets/font/css/font-awesome.min.css"/>
				<link rel="stylesheet" href="assets/materialize/dist/css/materialize.min.css"/>
				<link rel="stylesheet" href="//cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css"/>
				<link rel="stylesheet" href="assets/css/main.css"/>
				
				<title>{testes(this.props.name)}</title>
			</head>
		);	
	}
});

module.exports = HeadComponent;