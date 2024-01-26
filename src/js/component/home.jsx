import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Simple Counter</h1>
			<div className="container box">
				<div className="row">
					<div className="col conter"><i className="far fa-clock"></i></div>
					<div className="col conter">{props.seis}</div>
					<div className="col conter">{props.cinco}</div>
					<div className="col conter">{props.cuatro}</div>
					<div className="col conter">{props.tree}</div>
					<div className="col conter">{props.dos}</div>
					<div className="col conter">{props.uno}</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
