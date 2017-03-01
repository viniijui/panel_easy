const React = require('react');
const spanStyle = {
  display: 'none',
};

let HeaderComponent = React.createClass({
	render : function() {
		return (
			<header>
				<nav className="background-color-easy top-nav">
					<div className="nav-wrapper nav-wrapper-easy">
						<a href="#" id="btn-navside" data-activates="navside-menu" className="button-collapse">
							<i className="fa fa-bars icon-menu"></i>
						</a>
						<h1>{this.props.name}</h1>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<a className="dropdown-button dropdown-button-menu" data-activates='dropdown1'>
									User name
									<i className="fa fa-fw fa-sort-desc"></i>
								</a>
								<ul id='dropdown1' className='dropdown-content'>
								    <li><a href="#!">Configurações de conta</a></li>
								    <li className="divider"></li>
								    <li><a href="#!">Sair</a></li>
							  	</ul>
							</li>
						</ul>
					</div>
				</nav>
				<ul className="side-nav fixed" id="navside-menu">
				   	<li className="top-sidebar">
				   	 	<a href="#!">
				   	 		<img className="img-logo-painel" src={'assets/img/logo-white.png'} />
				   	 	</a>
			   	 	</li>
					<li>
						<a className="waves-effect waves-teal collapsible-header" href="#!">
							<span className="fa fa-fw fa-dashboard"></span>Dashboard
						</a>
					</li>
					<li>
						<ul className="collapsible collapsible-accordion">
							<li>
								<a className="waves-effect collapsible-header waves-teal btn-dropdown" href="#!">
									<span className="fa fa-fw fa-file-text-o"></span>Dados de Acesso
									<span className="span-dropdown"><i className="fa fa-angle-left"></i></span>
									<span className="span-dropdown" style={spanStyle}>
										<i className="fa fa-angle-down"></i>
									</span>
								</a>
								<div className="collapsible-body collapsible-body-easy">
									<ul>
										<li><a href="color.html">Color</a></li>
										<li><a href="grid.html">Grid</a></li>
										<li><a href="helpers.html">Helpers</a></li>
									</ul>
								</div>
							</li>
						</ul>
					</li>
					<li>
						<a className="waves-effect waves-teal collapsible-header" href="#!">
							<span className="fa fa-fw fa-server"></span>Configurações do Hotspot
						</a>
					</li>
				 </ul>
			</header>
		);	
	}
});

module.exports = HeaderComponent;