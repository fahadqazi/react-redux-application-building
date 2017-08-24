import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <div>
        hi
      </div>
    );
  }
}

ManageCoursePage.prototypes = {
  //props
};

function mapStateToProps(state){
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);