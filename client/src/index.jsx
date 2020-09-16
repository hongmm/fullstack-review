import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    this.getRepos((data) => {
      this.setState({ repos: data })
    })
  }

  getRepos (callback) {
    $.ajax({
      url: '/repos',
      method: 'GET',
      error: function(error) {
        return error;
      },
      success: function(data) {
        callback(data);
      }
    });
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO

    $.ajax({
      url: '/repos',
      method: 'POST',
      data: { 'searchTerm': term },
      error: function(error) {
        return error;
      },
      success: function(data) {
        console.log(data);
        getRepos((data) => {
          this.setState({ repos: data })
        });
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));