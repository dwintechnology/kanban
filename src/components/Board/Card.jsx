import React, { useRef } from "react";
import { useDrop, useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { fetches } from "../../store/tasks/changeStatus";
import { Delete } from "../../store/tasks/delete";

export const MovableItem = ({
  id,
  name,
  description,
  index,
  moveCardHandler,
  setItems,
}) => {
  let dispatch = useDispatch();
  const changeItemColumn = (currentItem, columnName) => {
    fetches({ id, description, columnName, name });
    setItems((prevState) => {
      return prevState.map((e) => {
        const description = JSON.parse(e?.description);

        if (currentItem.name === description.title) {
          return {
            ...e,
            description: JSON.stringify({ ...description, status: columnName }),
          };
        }
        return e;
      });
    });
  };

  const ref = useRef(null);

  const [, drop] = useDrop({
    type: "Our first type",
    accept: "Our first type",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCardHandler(dragIndex, hoverIndex, item.name);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "Our first type",
    item: { index, name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (dropResult) {
        const { name } = dropResult;

        switch (name) {
          case "To Do":
            changeItemColumn(item, "To Do");
            break;
          case "In Progress":
            changeItemColumn(item, "In Progress");
            break;
          case "Done":
            changeItemColumn(item, "Done");
            break;
          default:
            break;
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

  const onDelete = () => {
    console.log("deleted");
  };

  return (
    <div
      ref={ref}
      className="movable-item"
      style={{ opacity }}
      onClick={() => { }}
    >
      <div>
        <div className="deleteBtn">
          <button
            onClick={() => {
              Delete.onDelete((id = { id }), (dispatch = { dispatch }));
            }}
          >
            X
          </button>
        </div>
        <div className="movable-item2">
          <div>{name}</div>
          <div>{description}</div>
          <button onClick={onDelete}>Edit </button>
        </div>
      </div>


    </div>
  );
};
