import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    imageUrl: null,
    imageAlt: null,
  };

  render() {
    const { imageUrl, imageAlt } = this.state;

    return (
      <main className="App">
        <section className="left-side">
          <form>
            <div className="form-group">
              <input type="file" />
            </div>

            <button
              type="button"
              className="btn"
              onClick={this.handleImageUpload}
            >
              Submit
            </button>
            <button type="button" className="btn widget-btn">
              Upload Via Widget
            </button>
          </form>
        </section>
        <section className="right-side">
          <p>The resulting image will be displayed here</p>
          {imageUrl && (
            <img src={imageUrl} alt={imageAlt} className="displayed-image" />
          )}
        </section>
      </main>
    );
  }
}

export default App;
