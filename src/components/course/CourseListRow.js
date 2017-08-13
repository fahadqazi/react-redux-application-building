import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
  return(
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <th><Link to={'/course/' + course.id}>{course.title}</Link></th>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: React.PropTypes.object.isRequired
};

export default CourseListRow;
