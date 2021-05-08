let obj = {
    _id: "456465465",
    campo1: "",
    campo2: ""
}

let flag = true
for (let [key, value] of Object.entries(from.value)){
    if (value === "" || value === 0) flag = false
    if (key === "_id") flag = true
}

console.log(flag)