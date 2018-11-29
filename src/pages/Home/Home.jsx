import { Fragment } from 'react';
import { connect } from 'react-redux';
import { getLocations as getLocationsAction } from '../../redux/actions';

class Home extends React.PureComponent {
	static propTypes = {
		getLocations: PropTypes.func.isRequired,
		locations: PropTypes.array.isRequired,
		error: PropTypes.string.isRequired,
		loading: PropTypes.bool.isRequired,
	};

	componentWillMount() {
		const { getLocations } = this.props;

		getLocations();
	}

	listLocations() {
		const { locations } = this.props;

		if (locations.length) {
			return locations.map((location, id) => this.renderLocation({ location, id }));
		}

		return null;
	}

	renderLocation({ location, id }) {
		return (
			<div className="location" key={id}>
				{location.name}
			</div>
		);
	}

	render() {
		return (
			<Fragment>
				<div>Home!</div>
				{this.listLocations()}
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	locations: state.locations.list,
	error: state.locations.error,
	loading: state.locations.loading,
});

const mapDispatchToProps = dispatch => ({
	getLocations: () => dispatch(getLocationsAction()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home);
