import styles from "./UserInfo.module.css";
const UserInfo = ({ name, age, type, location }) => {
  const { userInfo } = styles;

  return (
    <div>
      <ul className={userInfo}>
        <li>name:{name} </li>
        <li>agr:{age} </li>
        <li>type:{type} </li>
        <li>location: {location}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
