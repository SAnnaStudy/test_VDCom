import React from "react"
import ContentLoader from "react-content-loader"

const TableSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={1000}
    height={45}
    viewBox="0 0 1100 40"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="118" y="193" rx="0" ry="0" width="0" height="0" /> 
    <rect x="0" y="0" rx="0" ry="0" width="1100" height="40" />
  </ContentLoader>
)

export default TableSkeleton