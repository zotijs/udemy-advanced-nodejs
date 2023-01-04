import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchBlog } from "../../actions";
import { withParams } from "../utils";

class BlogShow extends Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.params._id);
  }

  render() {
    if (!this.props.blog) {
      return "";
    }

    const { title, content } = this.props.blog;

    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
}

function mapStateToProps({ blogs }, ownProps) {
  return { blog: blogs?.[ownProps?.params?._id] };
}

export default compose(
  withParams,
  connect(mapStateToProps, { fetchBlog })
)(BlogShow);

// export default connect(mapStateToProps, { fetchBlog })(withParams(BlogShow));
