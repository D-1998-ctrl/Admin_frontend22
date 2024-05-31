import React, { useState } from "react";
import Select from "react-select";
import TextEditor from "./Texteditor";
import Switch from "react-switch";

import DatePicker from "react-datepicker"; // Import date picker
import "react-datepicker/dist/react-datepicker.css"; // Import date picker stylesheet
import { SlQuestion } from "react-icons/sl";
import { FiPlusCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiDotsSixVerticalBold } from "react-icons/pi";

import "./task.css";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const Tasks = () => {
  const statusOptions = [
    { value: "No_Status", label: "No Status" },
    { value: "On_hold", label: "On Hold" },
    { value: "planned", label: "Planned" },
  ];

  const priorityOptions = [
    { value: "urgent", label: "Urgent" },
    { value: "high", label: "High" },
    { value: "medium", label: "Medium" },
    { value: "low", label: "Low" },
  ];



  const [startDate, setStartDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [absoluteDate, setAbsoluteDates] = useState(false);
  const [startsin, setstartsin] = useState("");
  const [startsinduration, setstartsinduration] = useState("");
  const [duein, setduein] = useState("");
  const [dueinduration, setdueinduration] = useState("");

  const handleAbsolutesDates = (checked) => {
    setAbsoluteDates(checked);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleDueDateChange = (date) => {
    setDueDate(date);
  };

  const dayoptions = [
    { label: "Days", value: "Days" },
    { label: "Months", value: "Months" },
    { label: "Years", value: "Years" },
  ];
  const handlestartindateChange = (selectedOption) => {
    setstartsinduration(selectedOption.value);
  };

  const handledueindateChange = (selectedOption) => {
    setdueinduration(selectedOption.value);
  };

  // subtasks
  const [subtasks, setSubtasks] = useState([]);

  const handleAddSubtask = () => {
    const newId = String(subtasks.length + 1);
    setSubtasks([...subtasks, { id: newId, text: "" }]);
  };

  const handleInputChange = (id, value) => {
    setSubtasks(subtasks.map((subtask) => (subtask.id === id ? { ...subtask, text: value } : subtask)));
  };

  const handleDeleteSubtask = (id) => {
    setSubtasks(subtasks.filter((subtask) => subtask.id !== id));
  };

  const [SubtaskSwitch, setSubtaskSwitch] = useState(false);
  const handleSubtaskSwitch = (checked) => {
    setSubtaskSwitch(checked);
  };



  const handleDragEnd = (result) => {
    // Ensure a valid drop location
    if (!result.destination) return;

    // Reorder subtasks based on the drag-and-drop result
    const newSubtasks = Array.from(subtasks);
    const [reorderedItem] = newSubtasks.splice(result.source.index, 1);
    newSubtasks.splice(result.destination.index, 0, reorderedItem);

    // Update the state with the new order of subtasks
    setSubtasks(newSubtasks);
  };


  return (
    <div className="Admin-task-container">
      <div className="Admin-task-tittle">
        <h2>Create task template</h2>
      </div>

      <div className="task-container-all">
        <>
          <div className="A">
            {/* <div className="contact-temp">
              <div>
                <label>Template Name</label>
                <input type="text" placeholder="template name" />
              </div>
              <div>
                <label>Status</label>
                <Select options={statusOptions} styles={statusStyles} defaultValue={statusOptions[0]} />
              </div>
            </div>

            <div className="task_assignee">
              <div>
                <label>Task Assignee</label>
                <Select placeholder="Task Assignee" styles={customTempStyles} />
              </div>
              <div>
                <label>Priority</label>
                <Select options={priorityOptions} styles={statusStyles} defaultValue={statusOptions[0]} />
              </div>
            </div> */}



            <div className='input-box-task'>
              <div>
                <label>Template Name</label>
                <input type='text' placeholder='Template Name' />
              </div>
              <div>
                <label style={{ marginBottom: '8px' }}>Status</label>
                {/* <Select placeholder='Rate Type' /> */}
                <Select className='status'
                  placeholder="Status"
                  options={statusOptions}
                  defaultValue={statusOptions[0]}
                  isSearchable // Enable search
                />
              </div>
            </div>




            <div className='input-box-task_assignee'>

              <div>
                <label style={{ marginBottom: '8px' }}>Task Assignee</label>
                {/* <Select placeholder='Rate Type' /> */}
                <Select className='Task Assignee'
                  placeholder="Task Assignee"
                  // options={statusOptions}
                  // defaultValue={statusOptions[0]}
                  isSearchable // Enable search
                />
              </div>


              <div>
                <label style={{ marginBottom: '8px' }}>Priority</label>
                {/* <Select placeholder='Rate Type' /> */}
                <Select className='Priority'
                  placeholder="Priority"
                  options={priorityOptions}
                  // defaultValue={statusOptions[0]}
                  isSearchable // Enable search
                />
              </div>

            </div>

            <div style={{ marginTop: "20px", borderRadius: "12px", background: "white" }}>
              <TextEditor />
            </div>

            <div style={{ marginTop: "50px" }} className="task-temp-tag">
              <label>Tags</label>
              <Select />
            </div>

            <div className="task-template-dates-switches col-12" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "50px" }}>
              <h3>Start and Due Date</h3>
              <div className="job-template-switch-container" style={{ marginTop: "10px" }}>
                <Switch onChange={handleAbsolutesDates} checked={absoluteDate} onColor="#3A91F5" onHandleColor="#FFF" handleDiameter={10} uncheckedIcon={false} checkedIcon={false} height={20} width={32} className="job-template-react-switch" />
                <span className="job-template-switch-label" style={{ cursor: "pointer" }}>
                  Absolutes Dates
                </span>
              </div>
            </div>

            {absoluteDate && (
              <div className="col-12 task-template-absoluteDate " style={{ display: "flex", gap: "5px" }}>
                <div className="col-6">
                  <label style={{ fontSize: "14px" }}>Start Date</label>
                  <div>
                    <DatePicker selected={startDate} onChange={handleStartDateChange} className="date-picker-input" placeholderText="Start Date" />
                  </div>
                </div>
                <div className="col-6">
                  <label style={{ fontSize: "14px" }}>Due Date</label>
                  <div>
                    <DatePicker selected={dueDate} onChange={handleDueDateChange} className="date-picker-input" placeholderText="Due Date" />
                  </div>
                </div>
              </div>
            )}

            {!absoluteDate && (
              <div className="task-select-dates-container" style={{ marginTop: "20%", margin: "20px" }}>
                <div className="col-12" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className="col-2">
                    <p>Starts In</p>
                    <SlQuestion style={{ color: "blue" }} />
                  </div>
                  <div className="col-5">
                    <input style={{ padding: "8px 12px", width: "100%", border: "2px solid rgb(100, 149, 237)", borderRadius: "10px", margin: "10px 0" }} type="text" className="date-input" placeholder="0" onChange={(e) => setstartsin(e.target.value)} />
                  </div>
                  <div className="col-5">
                    <Select className="job-template-select-dropdown" options={dayoptions} onChange={handlestartindateChange} />
                  </div>
                </div>
                <div className="col-12" style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className="col-2">
                    <p>Due In</p>
                    <SlQuestion style={{ color: "blue" }} />
                  </div>
                  <div className="col-5">
                    <input type="text" className="date-input" style={{ padding: "8px 12px", width: "100%", border: "2px solid rgb(100, 149, 237)", borderRadius: "10px", margin: "10px 0" }} placeholder="0" onChange={(e) => setduein(e.target.value)} />
                  </div>
                  <div className="col-5">
                    <Select className="job-template-select-dropdown" options={dayoptions} onChange={handledueindateChange} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="B">

            <DragDropContext onDragEnd={handleDragEnd}>
              <div className="task-subtasks">
                <p>Subtasks</p>
                <Switch onChange={handleSubtaskSwitch} checked={SubtaskSwitch} onColor="#3A91F5" onHandleColor="#FFF" handleDiameter={10} uncheckedIcon={false} checkedIcon={false} height={20} width={32} className="job-template-react-switch" />
              </div>

              {SubtaskSwitch && (
                <Droppable droppableId="subtaskList">
                  {(provided) => (
                    <div className="subtask-input" {...provided.droppableProps} ref={provided.innerRef}>
                      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>

                      </div>

                      {subtasks.map((subtask, index) => (
                        <Draggable key={subtask.id} draggableId={subtask.id} index={index}>
                          {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
                                <input style={{ cursor: 'pointer' }} type="checkbox" className="subtask-checkbox" placeholder="subtask" />
                                <input type="text" placeholder="Things To do" value={subtask.text} onChange={(e) => handleInputChange(subtask.id, e.target.value)} />
                                <RiDeleteBin6Line style={{ cursor: 'pointer' }} onClick={() => handleDeleteSubtask(subtask.id)} className="task-bin-icon" />
                                <PiDotsSixVerticalBold className="task-six-dots" />
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                      <div onClick={handleAddSubtask} style={{ margin: "10px", color: "#1976d3" }}>
                        <FiPlusCircle /> Add Subtasks
                      </div>
                    </div>
                  )}
                </Droppable>
              )}
            </DragDropContext>
          </div>
          <div>
            <button className="btn1">Save</button>
            <button className="btn2">Cancel</button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Tasks;
