const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apiKey: '237d090b',
            s: 'avengers'
        }
    });
    console.log(response.data);
};
fetchData();