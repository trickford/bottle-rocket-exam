import { Fragment } from 'react';
import { connect } from "react-redux";
import { getLocations } from "../../redux/actions";

const env = process.env.NODE_ENV;

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getLocations();
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

const mapStateToProps = state => {
    const { locations } = state;
    return { locations };
};

const mapDispatchToProps = dispatch => ({
    getLocations: () => dispatch(getLocations())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
