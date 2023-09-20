import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        bio: "Default",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    // console.log("Child Component did Mount");
    const data = await fetch("https://api.github.com/users/GurudattKumar8757");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log(json);
  }
  render() {
    // const { name, location, contact } = this.props;

    const { name, bio, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser})=> <h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>Name: {name}</h2>
        <h3>Position: {bio}</h3>
        <h4>Contact: {"@gurudatt8757"}</h4>
      </div>
    );
  }
}

export default UserClass;
