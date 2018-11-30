import { Fragment } from 'react';
import { connect } from 'react-redux';

import { getLocations as getLocationsAction } from '../../redux/actions';
import LocationCard from '../../components/LocationCard/LocationCard';

import styles from './Home.scss';

class Home extends React.PureComponent {
	static propTypes = {
		getLocations: PropTypes.func.isRequired,
		locations: PropTypes.array.isRequired,
		error: PropTypes.string.isRequired,
		loading: PropTypes.bool.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			detailViewOpen: false
		}
	}

	componentWillMount() {
		const { getLocations } = this.props;

		getLocations();
	}

    openDetailView = () => {
        this.setState({ detailViewOpen: true });
    };

    closeDetailView = () => {
        this.setState({ detailViewOpen: false });
    };

	listLocations() {
		const { locations } = this.props;

		if (locations.length) {
			return locations.map((location, id) => (
				<LocationCard
					{...location}
					key={id}
                    onClick={this.openDetailView}
				/>
			));
		}

		return null;
	}

	render() {
		const { detailViewOpen } = this.state;
		const detailViewClass = detailViewOpen ? 'detail--show' : 'detail';

		return (
			<Fragment>
                <div styleName="locations">
                    <div styleName="list">
                        {this.listLocations()}
                        {this.listLocations()}
                        {this.listLocations()}
                        {this.listLocations()}
                    </div>
                </div>
				<div styleName={detailViewClass} onClick={this.closeDetailView}>
					map view here
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	locations: state.locations.list,
	error: state.locations.error,
	loading: state.locations.loading
});

const mapDispatchToProps = dispatch => ({
	getLocations: () => dispatch(getLocationsAction())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CSSModules(Home, styles));
