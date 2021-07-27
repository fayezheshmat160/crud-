import React, { Component } from "react";
import CourseForm from "./component/CourseForm";
import CourseList from "./component/CourseList";

class App extends Component {
  state = {
    courses: [{ name: "Html" }, { name: "css" }, { name: "jquery" }],
    current: "",
  };

  UpdateCourse = (e) => {
    this.setState({ current: e.target.value });
  };
  AddCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;

    courses.push({ name: current });
    this.setState({
      courses: courses,
      current: "",
    });
  };

  DeleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses: courses,
    });
  };


  editCourse=(index,value)=>{

    let courses=this.state.courses;
    let course=courses[index];
    course['name']=value;
    this.setState({
      courses
    })

  }
  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return (
        <CourseList
          details={course}
          key={index}
          index={index}
          DeleteCourse={this.DeleteCourse}
          editCourse={this.editCourse}
        />
      );
    });
    return (
      <section className="App">
        <h2>Add course</h2>
        <CourseForm
          current={this.state.current}
          UpdateCourse={this.UpdateCourse}
          AddCourse={this.AddCourse}
        />
        <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;
