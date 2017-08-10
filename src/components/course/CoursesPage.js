import React from 'react';
import {connect, bindActionCreator} from 'react-redux';
import {bindActionCreator} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      course: {title: ''}
    }
    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course})
  }

  onClickSave(){
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  render(){
    return(
      <div>
        <h1>Courses</h1>
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
// ownProps is components own props
// can be used to access routing related props injected by React Router
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreator(actions, dispatch);
//   }
// }

export default connect(mapStateToProps)(CoursesPage);
