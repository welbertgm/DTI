import Api from '../../Constants/Api.json'

export default {

    get: async (title, year) => {
        const userYear = year !== '' ? `y=${year}` : ''

        const req = await fetch(`${Api.BASE_URL}?apikey=${Api.KEY}&s=${title}&plot=full&${userYear}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const json = await req.json();
        return json;
    },
    getById: async (movieId) => {

        const req = await fetch(`${Api.BASE_URL}?apikey=${Api.KEY}&i=${movieId}&plot=full`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const json = await req.json();
        return json;
    }


}