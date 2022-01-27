import { RequestForm } from "../modules/RequestForm.js"
import { Api } from "../modules/Api.js";

const productsList = await Api.getAll()

const requestForm = new RequestForm(productsList)


const form = document.querySelector('.form')
const subForm = document.querySelector('.sub-form')
const formSelect = document.querySelector('.form__select')

formSelect.addEventListener('click', (evt) => {
    const formType = form[0].value
    requestForm.createSubForm(formType)
})

form.addEventListener('submit', async (evt) => {
    evt.preventDefault()

    const inputs = subForm.childNodes
    
    const requestType = form[0].value
    
    const formData = requestForm.getDataFromInputs(inputs)

    try {
        const response = await requestForm.sendRequest(requestType, formData)
        requestForm.showSuccessPopUp()
    } catch(err) {
        requestForm.showFailPopUp()
    }

})
