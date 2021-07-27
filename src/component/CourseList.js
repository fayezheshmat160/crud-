import React, { Component, Fragment } from "react";

class CourseList extends Component {
  state={
    isEdit:false
  }
  RenderCourse = () => {
    return (
      <li>
        <span>{this.props.details.name}</span>
        <button onClick={()=>{this.toggleState()}}>Edit Course</button>
        <button
          onClick={() => {
            this.props.DeleteCourse(this.props.index);
          }}
        >
          Delete Course
        </button>
      </li>
    );
  };

  toggleState=()=>{
    let {isEdit}=this.state;
    this.setState({
      isEdit: !isEdit
    })
  }

  RenderUpdataForm = () => {
    return (
      <form onSubmit={this.UpdateCourseItem }>
        <input type='text' ref={(v)=>{this.input=v}} defaultValue={this.props.details.name}/>
        <button >Up Date Course</button>
      </form>
    );
  };

  UpdateCourseItem=(e)=>{
    e.preventDefault();
    this.props.editCourse(this.props.index,this.input.value );
    this.toggleState();
  }
  render() {
    let {isEdit}=this.state;
    return (
    <Fragment>
      {isEdit?this.RenderUpdataForm():this.RenderCourse()}
      </Fragment>
    )
  }
}

export default CourseList;
