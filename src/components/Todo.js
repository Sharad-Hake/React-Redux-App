import React, { useEffect, useState } from "react";
import "./todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, remeoveTodo } from "../actions";

import { addNewTodo, deleteNewTodo, remeoveNewTodo } from "../actions/newIndex";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [newinputData, setnewInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const newDatalist = useSelector((state) => state.newtodoReducers.newlist);

  const dispatch = useDispatch();
  

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your list here</figcaption>
          </figure>

          <div className="addItem">
            
            <input
              type="text"
              placeholder="Add Items..."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className=" fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
             {/* <input
              type="text"
              placeholder="new data..."
              value={newinputData}
              onChange={(event) => setnewInputData(event.target.value)}
            />
            <i
              className=" fa fa-plus add-btn"
              onClick={() => dispatch(addNewTodo(newinputData), setnewInputData(""))}
            ></i> */}
          </div>
          {/* <div className="showItems">
            {newDatalist.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>new {elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className=" far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => dispatch(deleteNewTodo(elem.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div> */}
          {/* <div className="showItems">
            <button className="btn effect04" data-sm-link-text="remove All" onClick={()=> dispatch(remeoveNewTodo())}>
              <span> Check List</span>
            </button>
           
          </div> */}
          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3> {elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className=" far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="remove All" onClick={()=> dispatch(remeoveTodo())}>
              <span> Check List</span>
            </button>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
