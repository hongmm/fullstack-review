import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
      {
        props.repos.map(repo => {
          return <div key={repo.github_id} href={repo.url}>
            <a href={`https://github.com/${repo.fullname}`}>{repo.fullname}</a>
          </div>;
        })
      }
    </div>
  </div>
)

export default RepoList;