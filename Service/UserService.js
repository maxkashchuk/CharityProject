import axios from "axios";
import baseRequestUrl from "./BaseUrlService";
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserService = {
    userSignUp: async function(body)
    {   
        return await axios.post(baseRequestUrl() + '/api/user/register', body);
    },

    userSignIn: async function(body)
    {   
        return await axios.post(baseRequestUrl() + '/api/user/login', body);
    },

    GetUser: async function()
    {
        return await JSON.parse(await AsyncStorage.getItem('UserID'));
    },

    RemoveUser: async function()
    {
        return await JSON.parse(await AsyncStorage.removeItem('UserID'));
    },

    setRating: async function(id_origin, id_vote, rating)
    {
        return await axios.patch(baseRequestUrl() + `/api/user/setrating/${id_origin}/${id_vote}/${rating}`);
    }
}

export default UserService