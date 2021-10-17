import axios from "axios";


const API_KEY = 'b6a76015d684d362e4cc2d392ba513a7';

export const newsAPI = (topic: string) => {
	return axios.get<any>(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&keywords${topic}&countries=us`)
		.then(response => response.data)
}
