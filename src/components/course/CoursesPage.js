import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router'

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {title: ''}
    };
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
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
