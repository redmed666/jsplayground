import React from "react";
import {render} from "react-dom";

const myBook = {
    name: "Poor Johny",
    author: "Johny Begood"
};

function formatBookName(book) {
    return book.name + " by " + book.author;
}

class Books extends React.Component {
    render() {
        return <p> {formatBookName(this.props.book)} </p>;
    }
}

render(<Books book={myBook}/>, document.getElementById("app"));
