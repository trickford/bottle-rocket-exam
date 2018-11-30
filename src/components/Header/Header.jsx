import { withRouter } from 'react-router';

import styles from './Header.scss';

class Header extends React.PureComponent {
	render() {
		return (
			<header styleName="header">
				<h1 styleName="title">Lunch Tyme</h1>
				<button styleName="back">back</button>
				<button styleName="map">map</button>
			</header>
		);
	}
}

export default withRouter(CSSModules(Header, styles));
