import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { IconButton } from 'react-toolbox/lib/button';

import Scroll from 'react-scroll';
var Element = Scroll.Element;

class Top extends Component {
  render() {
		return (
			<Element name="top">
				<header>
					<Grid>
						<Row>
							<Col xs={8} xsOffset={2} sm={4} smOffset={4} >
								<Image src="public/jonathan_compressed.jpg" circle responsive/><br></br>
							</Col>
						</Row>
						<Row>
							<Col sm={6} smOffset={3}>
								<p className="top-title">Jonathan Grangien</p>
								<p>I am a MSc. student of Computer Science in Media Technology at Linköping University, Sweden. I like programming, mainly websites, applications and graphics.</p>
							</Col>
						</Row>
					</Grid>

					<IconButton 
						icon="keyboard_arrow_down" 
						className="top-arrow" 
						onClick={this.handleButtonClick}
						accent
					/>
				</header>
			</Element>
		);
	}
}

export default Top