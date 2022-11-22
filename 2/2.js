// 1
let table = document.getElementById('age-table')

// 2
table.getElementsByTagName('label')
// or
document.querySelectorAll('#age-table label')

// 3
table.rows[0].cells[0]
// or
table.getElementsByTagName('td')[0]
// or
table.querySelector('td')

// 4
let form = document.getElementsByName('search')[0]
// or
document.querySelector('form[name="search"]')

// 5
form.getElementsByTagName('input')[0]
// or
form.querySelector('input')

// 6
let inputs = form.querySelectorAll('input')
inputs[inputs.length-1]