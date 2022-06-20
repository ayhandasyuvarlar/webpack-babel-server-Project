/// Select Elements
import { Request } from './requests'
import { UI } from './ui'
const form = document.getElementById('employee-form')
const nameInput = document.getElementById('name')
const departmentInput = document.getElementById('department')
const salaryInput = document.getElementById('salary')
const employeesList = document.getElementById('employees')
const updateButton = document.getElementById('update')
const requests = new Request('http://localhost:3250/Employe')
const ui = new UI()

let updateState = null

evetListeners()

function evetListeners() {
  document.addEventListener('DOMContentLoaded', getAllEmployees)
  form.addEventListener('submit', addEmployee)
  employeesList.addEventListener('click', UpdateOrDelete)
  updateButton.addEventListener('click', updateEmployeeButton)
}
function getAllEmployees() {
  requests
    .get()
    .then((response) => {
      ui.addAllEmployeeToUI(response)
    })
    .catch((err) => {
      console.log(err)
    })
}
function addEmployee(e) {
  const employeeName = nameInput.value.trim()
  const employeeDepartment = departmentInput.value.trim()
  const employeeSalary = salaryInput.value.trim()
  if (
    employeeName === '' ||
    employeeDepartment === ' ' ||
    employeeSalary === ''
  ) {
    alert('Lütfen Boş Bırakmayın')
  } else {
    requests
      .post({
        userName: employeeName,
        Department: employeeDepartment,
        Salary: Number(employeeSalary),
      })
      .then((responsePost) => {
        ui.addAllEmployeeTo(responsePost)
      })
      .catch((err) => console.log(err))
  }

  ui.clearInput()
  e.preventDefault()
}
function UpdateOrDelete(e) {
  if (e.target.id === 'delete-employee') {
    deleteEmpoloye(e.target)
  } else if (e.target.id === 'update-employee') {
    updateEmployeeController(e.target.parentElement.parentElement)
  }
}
function deleteEmpoloye(DeletetargetEmployee) {
  const id =
    DeletetargetEmployee.parentElement.previousElementSibling
      .previousElementSibling.textContent
  requests
    .delete(id)
    .then((message) => {
      ui.deleteEmpoloyeFromUI(DeletetargetEmployee.parentElement.parentElement)
    })
    .catch((err) => console.log(err))
}

function updateEmployeeController(UpdateTargetEmployee) {
  ui.toggleUpdateButton(UpdateTargetEmployee)
  if (updateState === null) {
    updateState = {
      updateId: UpdateTargetEmployee.children[3].textContent,
      updateParet: UpdateTargetEmployee,
    }
  } else {
    updateState = null
  }
}

function updateEmployeeButton() {
  const employeeName = nameInput.value.trim()
  const employeeDepartment = departmentInput.value.trim()
  const employeeSalary = salaryInput.value.trim()
  if (updateState) {
    const data = {
      userName: employeeName,
      Department: employeeDepartment,
      Salary: Number(employeeSalary),
    }
    requests
      .put( data,updateState.updateId)
      .then((response) => {
        ui.updateEmployeeOnUI(response, updateState.updateParet)
        ui.clearInput()
      })
      .catch((err) => console.log("başarısız"))
  }
}
