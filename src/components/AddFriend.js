import React from 'react';


const AddFriend = () => {
    return (
        <div className='loginDiv'>
            <h1>LOGIN</h1>
            <form className='loginForm'>
                <label htmlFor='FriendName'>Friend Name</label>
                <input className='inputSubmit' id='FriendName' name='FriendName' type='text'></input>
                <label htmlFor='FriendEmail'>Friend Email</label>
                <input className='inputSubmit' id='FriendEmail' name='FriendEmail' type='text'></input>
                <button className='inputSubmit'>SUBMIT</button>
            </form>

        </div>
    )
}
export default AddFriend