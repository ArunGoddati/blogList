const BlogItem = props => {
  const {blogDetails} = props
  const {id, title} = blogDetails
  return <li>{title}</li>
}

export default BlogItem
