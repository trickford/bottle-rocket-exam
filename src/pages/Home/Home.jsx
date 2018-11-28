import React, { Fragment } from 'react';

const env = process.env.NODE_ENV;

class Home extends React.PureComponent {
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

export default Home;
