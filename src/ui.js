export class UI {
  constructor() {
    this.employessList = document.getElementById('employees')
    this.updateButton = document.getElementById('update')
    this.salaryInput = document.getElementById('salary')
    this.departmentInput = document.getElementById('department')
    this.nameInput = document.getElementById('name')
  }
  addAllEmployeeToUI(response) {
    let result = this.employessList
    response.forEach((employee) => {
      result.innerHTML += `
    <tr class="table-success">                                     
        <td>${employee.name}</td> 
        <td>${employee.Department}</td>
        <td>${employee.Salary}</td>
        <td>${employee.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
    </tr>
  `
    })
  }
  clearInput(){
    this.nameInput.value = ""
    this.departmentInput.value = ""
    this.salaryInput.value = ""
    
  }
  addAllEmployeeTo(){
     this.employessList.innerHTML += `
     <tr class="table-success">                                     
         <td>${employee.title}</td>
         <td>${employee.Department}</td>
         <td>${employee.Salary}</td>
         <td>${employee.id}</td>
         <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
         <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
     </tr>
   `

  }
  deleteEmpoloyeFromUI(element){
     element.remove()
  }
  toggleUpdateButton(target){
    if(this.updateButton.style.display === "none"){
      this.updateButton.style.display ="block"
      this.addEmployeeInfoToInputs(target);
    }
    else{
      this.updateButton.style.display = "none"
      this.clearInput()
    }
  }
  addEmployeeInfoToInputs(target){
    const children = target.children;
    this.nameInput.value = children[0].textContent
    this.departmentInput.value =children[1].textContent
    this.salaryInput.value = children[2].textContent
  }
  updateEmployeeOnUI(employee,parent){
    parent.innerHTML =`
    <tr class="table-success">                                     
         <td>${employee.userName}</td>
         <td>${employee.Department}</td>
         <td>${employee.Salary}</td>
         <td>${employee.id}</td>
         <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
         <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
     </tr>
    `
  }
}



