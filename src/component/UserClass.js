import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo : {}
        }

    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/KunalKhandekar');
        const json = await data.json();
        this.setState({
            userInfo : json
        })
    }


    render() {
        const {name, bio, avatar_url} = this.state.userInfo;
        return (
            <div className="user_info">
                <img src={avatar_url} alt="userImg" />
                <h2>Name : {name}</h2>
                <p>Bio : {bio}</p>
                <p>Profession : Coding (MERN)</p>
            </div>
        );
    };
};

export default UserClass;