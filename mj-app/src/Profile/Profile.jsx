import React, {useState} from "react";

    const USER_URL = "https://api.github.com/users/";

    function Profile({ name }) {
        const [user, setUser] = useState();
      
        React.useEffect(() => {
          fetch(USER_URL + name)
            .then((res) => res.json())
            .then((data) => setUser(data));
        }, [name]);
      
        if (!user) return <div>Loading...</div>;
        return (
          <div>
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="" width="128" height="128" />
          </div>
        );
      }

      export default Profile;