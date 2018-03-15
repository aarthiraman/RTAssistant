import React, { Component } from 'react';
import { connect } from 'react-redux';

import './home.css';
import Interests from '../../components/Interests/Interests';
import Login from '../../components/Login/Login';
import Loaders from '../../components/Loaders/Loaders';
import Steps from '../../components/Steps/Steps';
import RecommendationList from '../../components/Recommendations/RecommendationList';
import { checkLogin } from '../../components/Login/Actions';
import { 
	onRecommendationsSelect,
	onRecommendationsSubmit
} from '../../components/Recommendations/Actions';
import { 
	onInterestsSubmit
} from '../../components/Interests/Action';

export class HomePage extends Component {
	constructor(props) {
		super(props); 
	}

	componentDidMount() {
		this.props.dispatchCheckLogin();
	}

	render() {
		const { 
			login, 
			recommendations,
			interests,
			dispatchCheckLogin,
			dispatchOnRecommendationsSelect,
			dispatchOnRecommendationsSubmit,
			dispatchOnInterestsSubmit
		} =this.props;

		const gotConfigs = login.loggedIn && recommendations.done && interests.done;
		return <div className='app'>
			<h1>Indian Wanderer</h1>

			<Login login={login} checkLogin={dispatchCheckLogin}/>

			{ !gotConfigs && <Steps 
				stepsStatus ={[login.loggedIn, recommendations.done, interests.done]}
				statusText = {['Login', 'Recommendations', 'Locations']}
			/> }
			
			{ login.loggedIn &&  !recommendations.done && <RecommendationList 
				recommendations={recommendations} 
				onSelect={dispatchOnRecommendationsSelect}
				onDone={dispatchOnRecommendationsSubmit}		 /> }
			
			{ login.loggedIn &&  recommendations.done &&  !interests.done && <Interests onDone={dispatchOnInterestsSubmit} /> }


			{ gotConfigs && 
				<Loaders >
					<h2>Great. All done</h2>
					<p>Loading search results</p>
				</Loaders>}

		</div>;
	}
} 

const mapStateToProps = (state) => ({
	i18n: state.i18n,
	info: state.info,
	weather: state.weather, 
	login: state.login,
	interests: state.interests,
	recommendations: state.recommendations
});

export default connect(
	mapStateToProps, {
		dispatchCheckLogin: checkLogin,
		dispatchOnRecommendationsSelect: onRecommendationsSelect,
		dispatchOnRecommendationsSubmit: onRecommendationsSubmit,
		dispatchOnInterestsSubmit: onInterestsSubmit
	}
)(HomePage);