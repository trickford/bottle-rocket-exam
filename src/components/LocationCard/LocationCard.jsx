import { withRouter } from 'react-router';

import styles from './LocationCard.scss';

class LocationCard extends React.PureComponent {
	static propTypes = {
		name: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		backgroundImageURL: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired
	};

	render() {
		const {
			name, category, backgroundImageURL, onClick
		} = this.props;
		const styleAttr = { style: { backgroundImage: `url(${backgroundImageURL})` } };

		return (
			<button styleName="card" onClick={onClick} {...styleAttr}>
				<div styleName="name">{name}</div>
				<div styleName="category">{category}</div>
			</button>
		);
	}
}

export default withRouter(CSSModules(LocationCard, styles));
