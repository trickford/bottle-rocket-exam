import { withRouter } from 'react-router';

import Header from '../Header/Header';

import styles from './AppFrame.scss';

class AppFrame extends React.PureComponent {
	static propTypes = {
		children: PropTypes.node.isRequired,
	};

	render() {
		const { children: appContent } = this.props;

		return (
			<main styleName="content">
				<Header />
				{appContent}
			</main>
		);
	}
}

export default withRouter(CSSModules(AppFrame, styles));
