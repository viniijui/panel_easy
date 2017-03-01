const React = require('react');
const DefaultTemplate = require('./layout/main');
const chartStyle = {
  height: 200+'px',
};

let DashboardComponent = React.createClass({
	render: function() {
		return (
			<DefaultTemplate name={this.props.title}>
				<main>
					<div className="row">
						<div className="col s12 m6 l3">
							<div className="card card-easy background-color-easy z-depth-3">
								<div className="card-content white-text">
									<div className="card-title-div">
										<span className="card-title">Usuários Online</span>
									</div>
									<div className="card-description-div">
										<p className="p-card-description"><i className="fa fa-users fa-fw icon-card-easy"></i> 20 Usuários</p>
									</div>
								</div>
								<div className="card-action">
								  <a href="#" className="activator">Saiba mais</a>
								</div>
								<div className="background-color-easy card-reveal">
									<div className="card-title-reveal">
										<span className="card-title title-reveal grey-text text-darken-4">Usuários<i className="fa fa-times right"></i></span>
									</div>
									<div className="card-content-reveal">
										<p><i className="fa fa-fw fa-user-plus"></i> Novos usuários: <strong>12</strong></p>
										<p><i className="fa fa-fw fa-users"></i> Usuários retornantes: <strong>8</strong></p>
									</div>
								</div>
							 </div>
						</div>
						<div className="col s12 m6 l3">
							<div className="card card-easy bg-yellow z-depth-3">
								<div className="card-content white-text">
									<div className="card-title-div">
										<span className="card-title">Tempo médio de conexão</span>
									</div>
									<div className="card-description-div">
										<p className="p-card-description"><i className="fa fa-clock-o fa-fw icon-card-easy"></i> 20 Minutos</p>
									</div>
								</div>
								<div className="card-action">
								  <a href="#" className="activator">Saiba mais</a>
								</div>
								<div className="bg-yellow card-reveal">
									<div className="card-title-reveal">
										<span className="card-title title-reveal grey-text text-darken-4">Tempo médio de Conexão<i className="fa fa-times right"></i></span>
									</div>
									<div className="card-content-reveal">
										<p><i className="fa fa-fw fa-clock-o"></i> De hoje: <strong>12 min</strong></p>
										<p><i className="fa fa-fw fa-clock-o"></i> Da semana: <strong>17 min</strong></p>
									</div>
								</div>
							 </div>
						</div>
						<div className="col s12 m6 l3">
							<div className="card card-easy bg-green z-depth-3">
								<div className="card-content white-text">
									<div className="card-title-div">
										<span className="card-title">Download</span>
									</div>
									<div className="card-description-div">
										<p className="p-card-description"><i className="fa fa-download fa-fw icon-card-easy"></i> 60 Gb</p>
									</div>
								</div>
								<div className="card-action">
								  <a href="#" className="activator">Saiba mais</a>
								</div>
								<div className="bg-green card-reveal">
									<div className="card-title-reveal">
										<span className="card-title title-reveal grey-text text-darken-4">Consumo de download<i className="fa fa-times right"></i></span>
									</div>
									<div className="card-content-reveal">
										<p><i className="fa fa-fw fa-download"></i> De hoje: <strong>120 Mb</strong></p>
										<p><i className="fa fa-fw fa-download"></i> Da semana: <strong>1 Gb</strong></p>
									</div>
								</div>
							 </div>
						</div>
						<div className="col s12 m6 l3">
							<div className="card card-easy bg-red z-depth-3">
								<div className="card-content white-text">
									<div className="card-title-div">
										<span className="card-title">Upload</span>
									</div>
									<div className="card-description-div">
										<p className="p-card-description"><i className="fa fa-upload fa-fw icon-card-easy"></i> 20 Gb</p>
									</div>
								</div>
								<div className="card-action">
								  <a href="#" className="activator">Saiba mais</a>
								</div>
								<div className="bg-red card-reveal">
									<div className="card-title-reveal">
										<span className="card-title title-reveal grey-text text-darken-4">Consumo de upload<i className="fa fa-times right"></i></span>
									</div>
									<div className="card-content-reveal">
										<p><i className="fa fa-fw fa-upload"></i> De hoje: <strong>120 Mb</strong></p>
										<p><i className="fa fa-fw fa-upload"></i> Da semana: <strong>800 Mb</strong></p>
									</div>
								</div>
							 </div>
						</div>
					</div>
					<div className="row">
						<div className="col s12 m6 l6">
							<ul className="collection with-header collection-easy z-depth-3">
								<li className="collection-header"><h2><i className="fa fa-fw fa-pie-chart"></i> Genero dos usuários conectados </h2></li>
								<li className="collection-item"><div><canvas id="piechartGenre" style={chartStyle}></canvas></div></li>
							</ul>
						</div>
						<div className="col s12 m6 l6">
							<ul className="collection with-header collection-easy z-depth-3">
								<li className="collection-header"><h2><i className="fa fa-fw fa-pie-chart"></i> Conexões por tipo </h2></li>
								<li className="collection-item"><div><canvas id="piechartConnection" style={chartStyle}></canvas></div></li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col s12 m6 l4">
							<ul className="collection with-header collection-easy z-depth-3">
								<li className="collection-header"><h2><i className="fa fa-fw fa-line-chart"></i> Dispositívos conectados</h2></li>
								<li className="collection-item"><div><i className="fa fa-fw fa-mobile"></i> Smartphones <strong className="right">97%</strong></div></li>
								<li className="collection-item"><div><i className="fa fa-fw fa-tablet"></i> Tablets <strong className="right">1%</strong></div></li>
								<li className="collection-item"><div><i className="fa fa-fw fa-laptop"></i> Desktops <strong className="right">2%</strong></div></li>
							</ul>
						</div>
						<div className="col s12 m6 l4">
							<ul className="collection with-header collection-easy z-depth-3">
								<li className="collection-header"><h2><i className="fa fa-fw fa-lightbulb-o"></i> Uma dica!</h2></li>
								<li className="collection-item"><div><p className="center-align p-idea">Notamos que o dia em que você mais tem acessos é na <strong>Quinta-Feira!</strong> <i className="fa fa-fw fa-smile-o"></i></p></div></li>
							</ul>
						</div>
						<div className="col s12 m6 l4">
							<ul className="collection with-header collection-easy z-depth-3">
								<li className="collection-header"><h2><i className="fa fa-fw fa-lightbulb-o"></i> Olha só!</h2></li>
								<li className="collection-item"><div><p className="center-align p-idea">Notamos que o <strong>João da Silva</strong> aparece sequigo por ai, só esta semana ele veio <strong>7 vezes</strong>. Oque acha de dar um desconto no produto preferido? <i className="fa fa-fw fa-smile-o"></i></p></div></li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<div className="z-depth-3">
								<table className="striped" id="tableDash">
									<thead>
										<tr>
											<th data-field="img">Foto</th>
											<th data-field="name">Nome</th>
											<th data-field="ip">IP</th>
											<th data-field="connection_type">Tempo de Conexão</th>
											<th data-field="device">Dispositívo</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><img src="assets/img/logo-h.png" className="circle responsive-img" alt="name user" width="53" /></td>
											<td>Chikere Tumelo</td>
											<td>192.168.2.20</td>
											<td>8 minutos</td>
											<td><i className="fa fa-fw fa-mobile fs-30"></i></td>
										</tr>
										<tr>
											<td><img src="assets/img/logo-h.png" className="circle responsive-img" alt="name user" width="53" /></td>
											<td>Golshan Dechen</td>
											<td>192.168.2.21</td>
											<td>20 minutos</td>
											<td><i className="fa fa-fw fa-tablet fs-30"></i></td>
										</tr>
										<tr>
											<td><img src="assets/img/logo-h.png" className="circle responsive-img" alt="name user" width="53" /></td>	
											<td>Jaylen Mavuto</td>
											<td>192.168.2.22</td>
											<td>30 Minutos</td>
											<td><i className="fa fa-fw fa-laptop fs-30"></i></td>
										</tr>
										<tr>
											<td><img src="assets/img/logo-h.png" className="circle responsive-img" alt="name user" width="53" /></td>	
											<td>Nollaig Cam</td>
											<td>192.168.2.23</td>
											<td>40 Minutos</td>
											<td><i className="fa fa-fw fa-mobile fs-30"></i></td>
										</tr>
										<tr>
											<td><img src="assets/img/logo-h.png" className="circle responsive-img" alt="name user" width="53" /></td>	
											<td>Prudence Ainsley</td>
											<td>192.168.2.24</td>
											<td>5 Minutos</td>
											<td><i className="fa fa-fw fa-mobile fs-30"></i></td>
										</tr>
										<tr>
											<td><img src="assets/img/logo-h.png" className="circle responsive-img" alt="name user" width="53" /></td>	
											<td>Chandra Raz</td>
											<td>192.168.2.25</td>
											<td>3 Minutos</td>
											<td><i className="fa fa-fw fa-laptop fs-30"></i></td>
										</tr>
										<tr>
											<td><img src="assets/img/logo-h.png" className="circle responsive-img" alt="name user" width="53" /></td>	
											<td>Radha Kaulana</td>
											<td>192.168.2.26</td>
											<td>6 Minutos</td>
											<td><i className="fa fa-fw fa-mobile fs-30"></i></td>
										</tr>
										<tr>
											<td><img src="assets/img/logo-h.png" className="circle responsive-img" alt="name user" width="53" /></td>	
											<td>Camille Shyama</td>
											<td>192.168.2.27</td>
											<td>20 Minutos</td>
											<td><i className="fa fa-fw fa-mobile fs-30"></i></td>
										</tr>
										<tr>
											<td><img src="assets/img/logo-h.png" className="circle responsive-img" alt="name user" width="53" /></td>	
											<td>Evelyn Laxmi</td>
											<td>192.168.2.28</td>
											<td>25Minutos</td>
											<td><i className="fa fa-fw fa-tablet fs-30"></i></td>
										</tr>
										<tr>
											<td><img src="assets/img/logo-h.png" className="circle responsive-img" alt="name user" width="53" /></td>	
											<td>Lindsey Zhenya</td>
											<td>192.168.2.29</td>
											<td>10 Minutos</td>
											<td><i className="fa fa-fw fa-mobile fs-30"></i></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>  
				</main>
			</DefaultTemplate>
		);
	}
});

module.exports = DashboardComponent;