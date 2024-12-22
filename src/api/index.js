import axios from 'axios';


const api = axios.create({
  baseURL: 'https://text-translator2.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': '812ad8fb28mshdc954639b2e2707p11a7f7jsne6f5092debcc',
    'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
  },
});

export default api;
