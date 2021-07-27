import React from "react";

const CourseForm = (props) => {
  return (
    <form onSubmit={props.AddCourse}>
        <input type='text' value={props.current} onChange={props.UpdateCourse} />
        <button>Add Course</button>
    </form>
  );
};

export default CourseForm;
