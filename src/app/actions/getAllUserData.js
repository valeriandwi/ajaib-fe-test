import axios from 'axios';

export const getAllUserData = (params) => {
    let URLparams = new URLSearchParams(params);
    Object.keys(params).forEach((key) => {
        if(!params[key]){
            URLparams.delete(key);
        }
    })
    return (dispatch) => {
        dispatch(getAllUserDataStarted());
        axios.get(`https://randomuser.me/api/?${URLparams.toString()}`).then(res => {
            if(!res.data.results || res.data.results.length === 0){
                dispatch(getAllUserDataSuccess([]));
                return;
            }
            const restructuredResult = res.data.results.map(({gender,name,email,registered,login}) => 
            {
                const registeredDate = new Date(registered.date);
                return {
                    name : `${name.first} ${name.last}`,
                    username : login.username,
                    email,
                    gender,
                    registeredDate : `
                        ${("00"+registeredDate.getDate()).slice(-2)}/${("00"+(registeredDate.getMonth()+1)).slice(-2)}/${(registeredDate.getFullYear())} 
                        ${("00"+registeredDate.getHours()).slice(-2)}:${("00"+registeredDate.getMinutes()).slice(-2)}
                    `
                }
            });
            dispatch(getAllUserDataSuccess(restructuredResult));
        }).catch(err => {
            dispatch(getAllUserDataFailure(err.message));
        })
    }
}

const getAllUserDataStarted = () => ({
    type : 'GET_ALL_USER_DATA_STARTED'
})

const getAllUserDataSuccess = (data) => ({
    type : 'GET_ALL_USER_DATA_SUCCESS',
    payload : data
})

const getAllUserDataFailure = (error) => ({
    type : 'GET_ALL_USER_DATA_FAILURE',
    payload : {
        error
    }
})