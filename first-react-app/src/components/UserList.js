import PropTypes from "prop-types";

function UserList({ name, surname, age, isLoggedIn, friends}){
    return <>
        {
            friends.map( friend => (<div key= {friend.id}> {friend.name} </div> ))
        }
   <br />
   <br />
   <h1> { isLoggedIn ? `${name} ${surname} (${age})` : `Giriş yapmadınız.  `} </h1>  
    </>
}

UserList.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 30 veya "30" yazılabiliyor.
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array,
}
UserList.defaultProps = {
    isLoggedIn : false
}

export default UserList;