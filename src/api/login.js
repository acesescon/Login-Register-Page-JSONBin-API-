import axios from 'axios'

const apiKey = import.meta.env.VITE_APP_JSONBIN_KEY;
const bin = import.meta.env.VITE_APP_BIN_ID;

export const getUsers = async () => {
    return axios.get(`https://api.jsonbin.io/v3/b/${bin}`, {
        headers: {
            "X-Master-Key": apiKey,
            "Content-Type": "application/json"
        }
    });
}

export const login = async (email, password) => {
    const response = await getUsers(); //get data
    const users = await response.data.record.users //get the users data 
    return users.find(data => data.email === email && data.password === password) //check if match
}

export const register = async (email, password) => {
    try{
        const response = await getUsers(); //get data
        const users = await response.data.record.users //get users data

        //if user exists
        const exists = users.find(item => email === item.email)
        if (exists) {
            //return a success false
            return {
                success: false,
                message: 'Email already exists'
            };
        }

        users.push({email, password})

        await axios.put(`https://api.jsonbin.io/v3/b/${bin}`, {users}, {
            headers: {
                "X-Master-Key": apiKey,
                "Content-Type": "application/json"
            }
        })

        //return a success true
        return {
            success: true,
            message: "Register Successfully"
        }
    }catch (err) {
        console.error('something went wrong!', err)

        return {
            success: false,
            message: "something went wrong!"
        }
    }
}