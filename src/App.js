import React, { Component } from "react";
import "./App.css";
import Interface from "./interface/Interface";

class App extends Component {
  getLocalStream() {
    console.log("localStr")
		navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
      console.log("stream",stream)
			window.localStream = stream;
			window.localAudio.srcObject = stream;
			window.localAudio.autoplay = true;
		}).catch( err => {
			console.log("u got an error:" + err)
		});
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
    })
    .catch(function(err) {
      if (err.message === "Requested device not found") alert('The microphone cannot be found, please install microphone!')
      if (err.message === "Permission denied") alert('Your microphone has been blocked from browser, Please click on the lock icon in the upper left then select allow and reload page to use microphone!')
      console.log(err.message)
    });
	}
	
  render() {
    console.log("abcas")
    this.	getLocalStream()
    return (
      <Interface />
    );
  }
}

export default App;
