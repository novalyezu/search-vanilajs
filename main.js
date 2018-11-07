var students = [
    {
        id: 1,
        nama: "Noval Vatria Yezu",
        age: 18
    },
    {
        id: 2,
        nama: "Sholihin",
        age: 20
    },
    {
        id: 3,
        nama: "Aripul",
        age: 18
    },
    {
        id: 4,
        nama: "Abul Khair",
        age: 18
    },
    {
        id: 5,
        nama: "Inul Fikri",
        age: 19
    }
]

function tokan() {
    document.getElementById('tampil').innerHTML = ""
    let search = document.getElementById('search').value.toLocaleLowerCase()
    for (let i = 0; i < students.length; i++) {
        if(students[i].nama.toLocaleLowerCase().match(search)) {
            document.getElementById('tampil').innerHTML += "<li>" + students[i].nama + "</li>"
        }
        if(students[i].id.toString() == search) {
            document.getElementById('tampil').innerHTML += students[i].nama
        }
        if(students[i].age.toString() == search) {
            document.getElementById('tampil').innerHTML += "<li>" + students[i].nama + "</li>"
        }
    }
}
