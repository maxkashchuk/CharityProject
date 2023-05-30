import axios from "axios";
import baseRequestUrl from "./BaseUrlService";

const PostService = {
    postAdd: async function(body)
    {   
        return await axios.post(baseRequestUrl() + '/api/posthelp/postadd', body);
    },

    postDelete: async function(id)
    {   
        return await axios.delete(baseRequestUrl() + `/api/posthelp/postdelete/${id}`);
    },

    postGet: async function(id)
    {   
        return await axios.patch(baseRequestUrl() + `/api/posthelp/postget/${id}`);
    },

    postUpdate: async function(id, data)
    {   
        return await axios.put(baseRequestUrl() + `/api/posthelp/postupdate/${id}`, data);
    },

    userPostsGet: async function(id)
    {
        return await axios.patch(baseRequestUrl() + `/api/posthelp/getuserposts/${id}`);
    },

    searchHeader: async function(body)
    {   
        return await axios.post(baseRequestUrl() + '/api/posthelp/postsearchheader', body);
    },

    searchDescritpion: async function(body)
    {   
        return await axios.post(baseRequestUrl() + '/api/posthelp/postsearchdescription', body);
    },

    searchCoordinates: async function(body)
    {   
        return await axios.post(baseRequestUrl() + '/api/posthelp/postsearchcordinates', body);
    },

    searchRating: async function(body)
    {   
        return await axios.post(baseRequestUrl() + '/api/posthelp/postsearchrating', body);
    },

    searchPosts: async function()
    {   
        return await axios.get(baseRequestUrl() + '/api/posthelp/getallposts');
    },

    searchName: async function(body)
    {   
        return await axios.get(baseRequestUrl() + '/api/posthelp/postsearchusername', body);
    },

    searchSurname: async function(body)
    {   
        return await axios.get(baseRequestUrl() + '/api/posthelp/postsearchusersurname', body);
    }
}

export default PostService