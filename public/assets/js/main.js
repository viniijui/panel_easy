
$(document).ready(function(){
	$("#btn-navside").sideNav({
		menuWidth: 300, // Default is 300
	    edge: 'left', // Choose the horizontal origin
	    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
	    draggable: true // Choose whether you can drag to open on touch screens
	});

    $('.collapsible').collapsible();

	$(".btn-dropdown").click(function() {
	   $( ".span-dropdown" ).toggle();
	});

	$('.dropdown-button-menu').dropdown({
		constrainWidth: false, // Does not change width of dropdown to that of the activator
		hover: true, // Activate on hover
		gutter: 0, // Spacing from edge
		belowOrigin: true, // Displays dropdown below the button
		alignment: 'left', // Displays dropdown with edge aligned to the left of button
		stopPropagation: false // Stops event propagation
	});

	//datatables
	var table = $('#tableDash').DataTable({});
});

$(function(){
	let pieChartCanvas = $("#piechartGenre").get(0).getContext("2d");
	let pieChartCanvas2 = $("#piechartConnection").get(0).getContext("2d");
	let PieData = {
	    labels: [
	        "Homens",
	        "Mulheres",
	    ],
	    datasets: [
	        {
	            data: [14, 6],
	            backgroundColor: [
	                "#f39c12",
	                "#00958c"
	            ],
	            hoverBackgroundColor: [
	                "#f39c12",
	                "#00958c"
	            ]
	        }]
	};

	let PieDataConnection = {
	    labels: [
	        "Facebook",
	        "Formulário",
	    ],
	    datasets: [
	        {
	            data: [16, 4],
	            backgroundColor: [
	                "#f39c12",
	                "#00958c"
	            ],
	            hoverBackgroundColor: [
	                "#f39c12",
	                "#00958c"
	            ]
	        }]
	};

	let pieOptions = {
		//Boolean - Whether we should show a stroke on each segment
		segmentShowStroke: true,
		//String - The colour of each segment stroke
		segmentStrokeColor: "#fff",
		//Number - The width of each segment stroke
		segmentStrokeWidth: 2,
		//Number - The percentage of the chart that we cut out of the middle
		percentageInnerCutout: 20, // This is 0 for Pie charts
		//Number - Amount of animation steps
		animationSteps: 100,
		//String - Animation easing effect
		animationEasing: "easeOutBounce",
		//Boolean - Whether we animate the rotation of the Doughnut
		animateRotate: true,
		//Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale: false,
		//Boolean - whether to make the chart responsive to window resizing
		responsive: true,
		// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
		maintainAspectRatio: false,
		//String - A legend template
		legend: {
            position: 'bottom'
        }
	};

	let GenreChart = new Chart(pieChartCanvas, {
	    type: 'doughnut',
	    data: PieData,
	    options: pieOptions
	});

	let ConnectionChart = new Chart(pieChartCanvas2, {
		type: 'doughnut',
		data: PieDataConnection,
		options: pieOptions
	});

});
