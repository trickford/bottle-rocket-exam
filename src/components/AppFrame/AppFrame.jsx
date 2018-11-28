import { withRouter } from 'react-router';

import styles from './AppFrame.scss';

class AppFrame extends React.PureComponent {
	static propTypes = {
		children: PropTypes.node.isRequired,
	};

	render() {
		const { children: appContent } = this.props;

		return (
			<main styleName="content">
				{appContent}
			</main>
		);
	}
}

export default withRouter(CSSModules(AppFrame, styles));
