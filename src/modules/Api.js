export { Api }

class Api {
    static endpoint = 'https://kenzie-food-api.herokuapp.com'
    static token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImlhdCI6MTY0MzExNzk3NiwiZXhwIjoxNjQzOTgxOTc2LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.NP0ts9w-7_qN6cVH0I1PeaHY4fuZHLkhGREcKiDkbbY'

    static async getAll() {
        const data = fetch(`${this.endpoint}/my/product`, {
            headers : {
                Authorization: 'Bearer ' + this.token
            }}).
        then(res => res.json())
        return data
    }

    static async getOne(id) {
        const data = fetch(`${this.endpoint}/my/product/${id}`, {
            headers : {
                Authorization: 'Bearer ' + this.token
            }}).
        then(res => res.json())
        return data
    }
}