import React, { Component } from 'react';
import PostList from '../../Components/PostList/PostList';
import Footer from '../../Components/Footer/footer';
import './events.css';
import { SyncLoader } from 'react-spinners';

class Events extends Component {
  constructor() {
    super()
    this.state = {
      posts: []  // Initialize with an empty array
    }
  }

  componentDidMount() {
    // Link to the Google Sheet: https://docs.google.com/spreadsheets/d/1ZPxRIYghouljWjW7lFHa7yvkmO88INpQsiyxqvmAtsc/edit?usp=sharing
    // Data from this sheet is fetched using the Opensheet API. This info is used to create the posts.
    // Any changes to the sheet will be reflected on the website automatically after a few minutes.
    fetch('https://opensheet.elk.sh/1ZPxRIYghouljWjW7lFHa7yvkmO88INpQsiyxqvmAtsc/1')  // Fetch the data from the API
      .then(response => { return response.json() })
      .then(posts => { this.setState({ posts: posts }) })  // Set the state with the response data
  }

  render() {
    const { posts } = this.state;
    return !posts.length ?  // If the posts array is empty, show the loader
      (<div style={{height: "100vh", textAlign: 'center'}}><h1 style={{ paddingTop: '100px'}}>Loading...</h1><br></br><SyncLoader size={20} color="#fff"/></div>) :
      // If the posts array is not empty, show the post list
      (
        <div className="events">      
          <div className="events-container">
            <h1 className="events-title">Past events</h1>
            <PostList posts={posts} />
          </div>
          <Footer />
        </div>
      )

  }
}

export default Events;
