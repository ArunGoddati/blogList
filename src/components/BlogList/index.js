import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  render() {
    const {blogList} = this.props
    return (
      <div>
        <ul>
          {blogList.map(eachBlog => (
            <BlogItem blogDetails={eachBlog} />
          ))}
        </ul>
      </div>
    )
  }
}
export default BlogList
