import React from "react";

import ConHeader from "./conHeader";
import ConItems from  './ConItems';
import ConNav from "./conNav";


class Content extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        items: [
          {
            id: 1,
            title: 'Стол',
            img: 'table.webp',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, amet!',
            price: '15.500',
          },{
            id: 2,
            title: 'Диван',
            img: 'umcher.webp',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, amet!',
            price: '13.500',
          },{
            id: 3,
            title: 'Кресло',
            img: 'bad.jpeg',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, amet!',
            price: '7.500',
          },{
            id: 4,
            title: 'Стол',
            img: 'table.webp',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, amet!',
            price: '15.500',
          },{
            id: 5,
            title: 'Диван',
            img: 'umcher.webp',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, amet!',
            price: '13.500',
          },{
            id: 6,
            title: 'Кресло',
            img: 'bad.jpeg',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, amet!',
            price: '7.500',
          },
        ] 
      }
    }
  
    render () {
      return (
        <div>
            <ConHeader />
            <ConNav />
            <ConItems items={this.state.items}/>
        </div>
      );
    }
  }
  
export default Content;