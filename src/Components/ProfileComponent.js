const ProfileComponent=(props)=>{
  const {username,role,status}=props
    return(
        <div>
            <h2>Welcome ! {username} </h2>
            <h3> Role : {role}</h3>
            <h3>Status: {status} </h3>
        </div>
    )
}
export default ProfileComponent
