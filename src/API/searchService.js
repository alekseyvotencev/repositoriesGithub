import axios from "axios";

const getRepos = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`)
    return response;
}

export default getRepos