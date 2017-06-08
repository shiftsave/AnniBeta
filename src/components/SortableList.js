import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import SortableItem from './SortableItem';
import ImageList from './ImageList';

class SortableList extends Component {
  constructor(props) {
    super(props);
    const { items } = props;
    this.state = { items };
  }

  moveItem(dragIndex, hoverIndex) {
    const { items } = this.state;
    this.setState(update(this.state, {
      items: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, items[dragIndex]]
        ]
      }
    }), () => {
      this.props.onReorder(this.state.items);
    });
  }

  render() {
    const { items } = this.state;
    if (!this.props.enableReorder) {
      return <ImageList content={this.props.items} />
    }
    return (
      <div className={this.props.containerClass}>
        {items.map((item, index) => {
          const { id } = item;
          const itemProps = {
            index,
            id,
            moveItem: this.moveItem.bind(this)
          };
          if (!id) {
            return null;
          }
          const childrenWithProps = React.Children.map(this.props.children,
           (child) => React.cloneElement(child, {...item, className: this.props.itemClass})
          );
          return (
            <SortableItem {...itemProps} key={id}>
              {childrenWithProps}</SortableItem>
          );
        })}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(SortableList);
