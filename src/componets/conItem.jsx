import React, {Component} from "react";
import style from '../assats/css/conItem.module.css';



export class ConItem extends Component {
    render () {
        return (
            <div className={style.item}>
                <img src={'./img_nav/' + this.props.item.img} alt="" />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}тг</b>
                <button className={style.add_to_cart}>В корзину</button>
            </div>
        );
    };
};

export default ConItem;

