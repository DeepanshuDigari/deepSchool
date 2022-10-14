function stubtn(){
    let student = document.getElementById('student')
    let teacher = document.getElementById('teacher')

    if (student.style.display==='none'){
        student.style.display='block'
        teacher.style.display='none'


    }
}
function teabtn(){
    let teacher = document.getElementById('teacher')
    let student = document.getElementById('student')

    if (teacher.style.display==='none'){
        teacher.style.display='block'
        student.style.display='none'

    }
}