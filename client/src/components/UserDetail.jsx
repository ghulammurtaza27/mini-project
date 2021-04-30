export default function UserDetail(props) {
 
  

  return (
    <div>
      <h1>{props.user.username}</h1>
      <h1>{props.user.password}</h1>
      <h1>{props.user.age}</h1>
      <h1>{props.user.admin ? 'Admin' : 'Not an Admin'}</h1>
    </div>
  
  );
}
