import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 300,
  border: " rgb(1, 84, 95) solid 1px ",
  margin: 6,
  padding: 8
};

class Scroll extends React.Component {
  state = {
    items: Array.from({ length: 20 }),
    hasMore: true
  };

  fetchMoreData = () => {
    if (this.state.items.length >=20) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 500);
  };

  render() {
    return (
      <div className="scrollme">
        <h1 className="text2">Some Tools To Explore</h1>
        
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          height={400}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {this.state.items.map((i, index) => (
            <div style={style} className="infiniteDiv" key={index}>
              {index}
              <h2 style={{color:"white"}}>Tools Name Here</h2>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Scroll;