import { Api } from "./Api.js";
export { RequestForm }

class RequestForm {
    constructor(productsList) {
        this.productsList       = productsList
        this.form               = document.querySelector('.form')
        this.subForm            = document.querySelector('.sub-form')
        this.formOption         = document.querySelector('.form__select')
        this.subFormOption      = document.querySelector('.sub-form__select')
        this.formSubmit         = document.querySelector('.form__submit')
    }
    createTextInputs() {
        const name              = document.createElement('input')
        const price             = document.createElement('input')
        const category          = document.createElement('input')
        const image             = document.createElement('input')
        const description       = document.createElement('input')

        name.placeholder        = 'Nome'
        price.placeholder       = 'Preço'
        category.placeholder    = 'Categoria'
        image.placeholder       = 'Imagem URL'
        description.placeholder = 'Descrição'

        name.name               = 'nome'
        price.name              = 'preco'
        category.name           = 'categoria'
        image.name              = 'imagem'
        description.name        = 'descricao'

        name.classList.add('sub-form__input')
        price.classList.add('sub-form__input')
        category.classList.add('sub-form__input')
        image.classList.add('sub-form__input')
        description.classList.add('sub-form__input')

        this.subForm.appendChild(name)
        this.subForm.appendChild(price)
        this.subForm.appendChild(category)
        this.subForm.appendChild(image)
        this.subForm.appendChild(description)
    }
    createSelectInput(method) {
        const label  = document.createElement('label')
        const select = document.createElement('select')

        label.innerHTML = `${method} produto com ID:`

        label.classList.add('sub-form__label')
        select.classList.add('sub-form__select')

        this.productsList.forEach(product => {
            const option = document.createElement('option')
            option.innerHTML = `${product.id} - ${product.nome}`
            select.appendChild(option)
        })

        this.subForm.appendChild(label)
        this.subForm.appendChild(select)
    }
    createSubForm(formType) {
        this.subForm.innerHTML = ''
        switch (formType) {
            case 'post': {
                this.createTextInputs()
                break
            }
            case 'patch': {
                this.createSelectInput('Alterar')
                this.createTextInputs()
                break
            }
            case 'delete': {
                this.createSelectInput('Excluir')
                break
            }
        }
    }
    getDataFromInputs(inputs) {
        const data = {}
        inputs.forEach(input => {
            if (input.value) {
                if (input.nodeName == 'INPUT') {
                    data[input.name] = input.value
                }
                else if (input.nodeName == 'SELECT') {
                    data['id'] = input.value.split(' ')[0]
                }
            }
        })
        console.log(data)
        return data
    }
    async sendRequest(requestType, data) {
        switch (requestType) {
            case 'post': {
                const res = Api.postOne(data)
                return res
            }
            case 'patch': {
                const res = Api.patchOne(data)
                return res
            }
            case 'delete': {
                const res = Api.deleteOne(data.id)
                return res
            }
        }
    }
}