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
  }

  render(){
    return(
      <CourseForm
        course={this.state.course}
        errors={this.state.errors}
        allAuthors={this.props.authors}/>
    );
  }
}

ManageCoursePage.propTypes = {
  course: React.PropTypes.object.isRequired,
  authors: React.PropTypes.array.isRequired
};

function mapStateToProps(state){
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
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
