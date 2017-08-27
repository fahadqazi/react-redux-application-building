import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends Component{
  constructor(props){
    super(props);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  updateCourseState(event){
    const field = event.target.name;
    console.log(field);
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course: course})
  }

  saveCourse(event){
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses');
  }

  render(){
    return(
      <CourseForm
        course={this.state.course}
        errors={this.state.errors}
        allAuthors={this.props.authors}
        onSave={this.saveCourse}
        onChange={this.updateCourseState}/>
    );
  }
}

ManageCoursePage.propTypes = {
  course: React.PropTypes.object.isRequired,
  authors: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router: React.PropTypes.object
};

function getCourseById (courses, id) {
  const course = courses.filter(course => course.id == id);
  if (course.length > 0) return course[0];
  return null;
}

function mapStateToProps(state, ownProps){
  const courseId = ownProps.params.id;  //from path '/course/:id'
  console.log(courseId)

  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (courseId) {
    course = getCourseById(state.courses, courseId);
  }
  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      values: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
