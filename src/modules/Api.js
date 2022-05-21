export { Api }

class Api {
    static endpoint = 'https://kenzie-food-api.herokuapp.com/products'

    static async getAll() {
        const data = await fetch(`${this.endpoint}`).
        then(res => res.json())
        return data
    }

}
