import React, { Component } from "react";
import "./Output.css";
import { BounceLoader } from 'react-spinners';

class Output extends Component {
  render() {
      return (
        <div className="cardWrapper">
        <span className="Title">Speech-to-text transcription</span>
        <div className="outputWrapper">

          <h4>{this.props.audio_file}</h4>
          <h6>{this.props.text}</h6>
          <div align="center" className='loading'>
            <BounceLoader
              sizeUnit={"px"}
              size={80}
              color={'rgba(103, 58, 183, 1)'}
              loading={this.props.loading}
            />
          </div>
          <div>{this.renderRecogniOutput()}</div>
        </div>
        </div>
      )
  }

	renderRecogniOutput() {
		return (<ul>
			{this.props.recognitionOutput.map((r) => {
				return (<li key={r.id}>{r.text}</li>);
			})}
		</ul>)
	}
}

export default Output
