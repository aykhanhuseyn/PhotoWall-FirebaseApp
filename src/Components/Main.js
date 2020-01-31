import React, { Component } from 'react';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route, Link } from 'react-router-dom';
import Single from '../Components/Single';

export const routes = {
  home: '/PhotoWall-FirebaseApp/',
  addphoto: '/PhotoWall-FirebaseApp/AddPhoto/',
  single: '/PhotoWall-FirebaseApp/Single/',
  singleid: '/PhotoWall-FirebaseApp/Single/:id/'
};

class Main extends Component {
  componentDidMount() {
    this.props.startLoadingPosts();
    this.props.startLoadingComments();
  }

  render() {
    return (
      <div>
        <h1>
          <Link to={routes.home}>PhotoWall</Link>
        </h1>
        <Route
          exact
          path={routes.home}
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />
        <Route
          path={routes.addphoto}
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />

        <Route
          path={routes.singleid}
          render={params => <Single {...this.props} {...params} />}
        ></Route>
      </div>
    );
  }
}

export default Main;
