import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';

class CoursesPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      course: {title: ''}
    };
    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave(){
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  render(){
    return(
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Courses</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}/>

        <input type="submit"
          value="Save"
          onClick={this.onClickSave}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: React.PropTypes.array.isRequired,
  // createCourse: React.PropTypes.func.isRequired,
  actions: React.PropTypes.object.isRequired
};

// ownProps is components own props
// can be used to access routing related props injected by React Router
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     createCourse: course => dispatch(courseActions.createCourse(course))
//   };
// }

//this approach binds all actions inside courseActions
// this way all actions are used using `this.props.actions`
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
