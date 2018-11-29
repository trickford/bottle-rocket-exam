import { Fragment } from 'react';
import { connect } from 'react-redux';
import { getLocations as getLocationsAction } from '../../redux/actions';

const env = process.env.NODE_ENV;

class Home extends React.PureComponent {
	static propTypes = {
		getLocations: PropTypes.func.isRequired,
	};

	componentWillMount() {
		const { getLocations } = this.props;

		getLocations();
	}

	render() {
		return (
			<Fragment>
				<div>Home!</div>
				<div>
					Environment:
					{env}
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	const { locations } = state;
	return { locations };
};

const mapDispatchToProps = dispatch => ({
	getLocations: () => dispatch(getLocationsAction()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home);
