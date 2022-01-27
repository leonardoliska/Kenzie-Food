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
    static async patchOne(newData) {
        const data = await fetch(`${this.endpoint}/my/product/${newData.id}`, {
            body: JSON.stringify(newData),
            method: 'PATCH',
            headers : {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + this.token
            }}).
        then(res => res.json())
        return data
    }
}