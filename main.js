var students = [
  {
    id : 1,
    name : 'Sholihin'
  },
  {
    id : 2,
    name : 'Noval v'
  },
  {
    id : 3,
    name : 'Ipul'
  },
  {
    id : 4,
    name : 'sabul'
  }
]

function tokantokan() {
  let search = document.getElementById('search').value
  for (var i = 0; i < students.length; i++) {
    if (students[i].name == search) {
      document.getElementById('tampil').textContent = students[i].name
      }
  }
}
