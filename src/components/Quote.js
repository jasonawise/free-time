import React from "react";
import axios from "axios";
import styles from "../css/quote.module.css";

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
      return <div className={styles.loading}>Loading... </div>;
    } else {
      return (
        <div>
          <h2 className={styles.heading}>Quote</h2>
          {quotes.map(quote => (
            <div className={styles.container}>
              <p>{quote.quote}</p>
              <p>
                <b>{quote.author}</b>
              </p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Quote;
