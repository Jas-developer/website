import React from "react";

import { useContext } from "react";

function Profile() {
  const { user } = useContext(useContext);

  return (
    <div>
      Profile: {user}
      <h1>More components</h1>
    </div>
  );
}

export default Profile;
