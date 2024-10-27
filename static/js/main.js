fetch('/')
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => console.error(error));


let count = 1
try_sort = () => {
    if (count%2 == 0) {
        months.sort()
    } else {
        months.sort().reverse()
    }
    document.getElementById("test").innerText = months.join(", ")
    console.log(months)
    count += 1
  }

