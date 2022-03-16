import React, { useEffect, useState } from "react";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { MovableItem } from "./Card";
import "./styles.css";

const Column = ({ children, className, title }) => {
  const [, drop] = useDrop({
    accept: "Our first type",
    drop: () => ({ name: title }),
  });

  return (
    <div ref={drop} className={className}>
      <p>{title}</p>
      {children}
    </div>
  );
};

export const Wrapper = (props) => {
  const { status, tasks } = props;
  const [items, setItems] = useState(tasks);
  const isMobile = window.innerWidth < 600;

  useEffect(() => {
    setItems(tasks);
  }, [tasks]);

  const moveCardHandler = (dragIndex, hoverIndex, itemName) => {
    const column = items.find(
      (i) => JSON.parse(i.description).title === itemName
    );
    const columnItems = items?.filter(
      (i) =>
        JSON.parse(i.description).status ===
        JSON.parse(column.description).status
    );

    const restItems = items.filter(
      (i) =>
        JSON.parse(i.description).status !==
        JSON.parse(column.description).status
    );

    const dragItem = columnItems[dragIndex];

    if (dragItem) {
      setItems((prevState) => {
        const coppiedStateArray = [...columnItems];

        // remove item by "hoverIndex" and put "dragItem" instead
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

        // remove item by "dragIndex" and put "prevItem" instead
        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return [...restItems, ...coppiedStateArray];
      });
    }
  };

  const returnItemsForColumn = (columnName) => {
    return items?.filter(Boolean)
      .filter(
        (item) =>
          JSON.parse(item.description).status?.toLocaleLowerCase() ===
          columnName.toLocaleLowerCase()
      )
      .map((item, index) => (
        <MovableItem
          key={item._id}
          id={item._id}
          name={JSON.parse(item.description).title}
          description={JSON.parse(item.description).description}
          status={JSON.parse(item.description).status}
          setItems={setItems}
          index={index}
          moveCardHandler={moveCardHandler}
        />
      ));
  };

  return (
    <div className="container">
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        {status.map((item, index) => {
          return (
            <Column
              key={item}
              title={item}
              className={`column ${item.toLowerCase()}`}
            >
              {returnItemsForColumn(item)}
            </Column>
          );
        })}
      </DndProvider>
    </div>
  );
};
