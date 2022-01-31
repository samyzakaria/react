import React, { Component } from "react";
import './item.css'

class Items extends Component {
  render() {
    const { items } = this.props;

    const theitems = items.map((item) => {
      return item.count > 0? (
        <div className="class1" key={item.id}>
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.age}</div>
          <div>_____________</div>
        </div>
      ) : null;
    });

    return <div>{theitems}</div>;
  }
}

export default Items;
