import axios from 'axios';
import React from 'react'
import './UserList.scss'

function UserList() {

    const [users,setUsers] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://reqres.in/api/users').then(({data}) => {
            setUsers(data);
        }).catch((err) => {
            alert('Ошибка при получении пользователей');
            console.log(err);
        })
    }, [])

  return (
    <div className='UserList'>

    </div>
  )
}

export default UserList