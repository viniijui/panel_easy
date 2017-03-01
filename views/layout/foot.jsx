const React = require('react');

let FootComponent = React.createClass({
	render : function() {
		return (
			<div>
				<script src="assets/jquery/dist/jquery.js" type="text/javascript"></script>
				<script src="assets/chartjs/dist/Chart.bundle.min.js" type="text/javascript"></script>
				<script src="assets/chartjs/dist/Chart.min.js" type="text/javascript"></script>
				<script src="assets/materialize/dist/js/materialize.min.js" type="text/javascript"></script>
				<script src="assets/datatables/dist/js/jquery.dataTables.min.js" type="text/javascript"></script>
				<script src="assets/js/main.js" type="text/javascript"></script>
			</div>
		);	
	}
});

module.exports = FootComponent;