import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { UserInfo } from "../Interfaces/user";

interface UserInfoProps {
  userInfo: UserInfo | null;
}

const UserFieldDetails: React.FC<UserInfoProps> = ({ userInfo }) => {
  const [isEditable, setIsEditable] = useState(false);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <h2>User Information</h2>
        <TextField
          label="First Name"
          value={userInfo.first_name}
          InputProps={{ readOnly: !isEditable }}
        />
        <TextField
          label="Last Name"
          value={userInfo.last_name}
          InputProps={{ readOnly: !isEditable }}
        />
        <TextField
          label="Username"
          value={userInfo.username}
          InputProps={{ readOnly: !isEditable }}
        />
        <Button onClick={() => setIsEditable(!isEditable)}>
          {isEditable ? "Save" : "Edit"}
        </Button>
      </Grid>
      <Grid item xs={6}>
        <h2>Address Information</h2>
        {/* Uncomment these lines if the address fields exist in your UserInfo object
        <TextField label="Street" value={userInfo.address.street} InputProps={{ readOnly: !isEditable }} />
        <TextField label="City" value={userInfo.address.city} InputProps={{ readOnly: !isEditable }} />
        <TextField label="State" value={userInfo.address.state} InputProps={{ readOnly: !isEditable }} />
        <TextField label="Zip" value={userInfo.address.zip} InputProps={{ readOnly: !isEditable }} />
        */}
      </Grid>
    </Grid>
  );
};

export default UserFieldDetails;
