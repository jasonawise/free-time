import React from "react";
import axios from "axios";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    axios
      .get("https://quotes.rest/qod.json")
      .then(response =>
        this.setState({ quotes: response.data.contents.quotes, isLoaded: true })
      );
  }

  render() {
    const { quotes, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading... </div>;
    } else {
      return (
        <div>
          <h2>Quote</h2>
          {quotes.map(quote => (
            <div>
              <p>{quote.quote}</p>
              <p>{quote.author}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Quote;
