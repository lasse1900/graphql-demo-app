import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

// const renderLinks = ({ data, error, loading }) => {
//   if (loading) return <p>...Loading</p>;
//   if (error) return <p>Error</p>;
//   return data.linksFeed.map(({ id, description, url }) => {
//     return (
//       <div key={id}>
//         <p>Description: {description}, url: {url}</p>
//       </div>
//     );
//   });
// }
const Links = () => {
  return (
    <div>
      <Query
        query={
          gql`
          {
            linksFeed {
              id
              description
              url
            }
          }
          `
        }
      >
        {({ data, error, loading }) => {
          if (loading) return <p>...Loading</p>;
          if (error) return <p>Error</p>;
          return data.linksFeed.map(
            ({ id, description, url }) => {
              return (
                <div key={id}>
                  <p>Description: {description}, url: {url} </p>
                </div>
              );
            }
          );
        }}
        {/* {renderLinks} */}
      </Query>
    </div>
  )
}

export default Links
