import React, {Component} from "react";
import ConItem from "./conItem";

export class ConItems extends Component {
    render () {
        return (
            <main>
                {this.props.items.map(el => (
                    <ConItem key={el.id} item={el} />
                ))}
            </main>
        );
    };
};

export default ConItems;

