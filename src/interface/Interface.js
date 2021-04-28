import React, { Component } from "react";
import "./Interface.css";
import Input from "../input/Input"
import Output from "../output/Output"

class Interface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio_file: "",
      text: "",
      loading: false,
      recognitionOutput:[]
    };
    this.handleUpload = this.handleUpload.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.clearText = this.clearText.bind(this);
    this.renderRecognitionOutput = this.renderRecognitionOutput.bind(this);
  };

  handleUpload(audio, text) {
    this.setState(prevState => ({
      audio_file: audio,
      text: prevState.text + " " + text,
      loading: false,
    }))
  };

  clearText() {
    this.setState({
      audio_file: "",
      text: "",
      recognitionOutput:[]
    })
  }

  startLoading() {
    this.setState({
      audio_file: "",
      text: "",
      loading: true,
      recognitionOutput:[]
    })
  }
  renderRecognitionOutput(recognitionOutput) {
    this.setState(prevState =>
     ( {
        recognitionOutput: recognitionOutput,
        loading: false
      })
    )
		return (<ul>
			{recognitionOutput.map((r) => {
				return (<li key={r.id}>{r.text}</li>);
			})}
		</ul>)
	}
  render() {
    return (
      <div className="Interface">
        <div className="Card">
          <Input clearText={() => this.clearText()} 
          handleUpload={(audio, text) => this.handleUpload(audio, text)} 
          startLoading={() => this.startLoading()}
          renderRecognitionOutput={(recognitionOutput) => this.renderRecognitionOutput(recognitionOutput)}
          />
        </div>
        <div className="Card">
          <Output audio_file={this.state.audio_file} text={this.state.text} recognitionOutput={this.state.recognitionOutput} loading={this.state.loading}/>
        </div>
      </div>
    )
  }
}
export default Interface
