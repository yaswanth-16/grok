const users = [
    { id: 1, name: "A", active: true, dept: "eng", salary: 100, reportsTo: 2 },
    { id: 2, name: "B", active: false, dept: "eng", salary: 200, reportsTo: null },
    { id: 3, name: "C", active: true, dept: "sales", salary: 150, reportsTo: 1 },
    null, // <-- edge case
];

// map => To create new array
// filter => To match only elements that match a condition
// Reduce => for grouping

// Get active users

const getActiveUsers = (users) => {
    return users.filter((user) => user && user.active === true)
}

const activeUsers = getActiveUsers(users)
console.log(`activeUsers : ${JSON.stringify(activeUsers,null,2)}`)

const groupedByDepartment = (users) => {
    console.log(`Group by dept : `)
    const groupByDepartment = users.reduce((acc, user) => {

        if (!user) return acc;

        const dept = user.dept
        if (!acc[dept]) {
            acc[dept] = []
        }
        acc[dept].push(user)
        return acc
    }, {})
    console.log(groupByDepartment)
}

// groupedByDepartment(users)

const topNSalaries = (users, n) => {
    console.log(`Sort based on salaries`)
    const sortedBasedOnSalaries = [...users].sort((a, b) => {
        if (!a) return 1
        if (!b) return -1
        return b.salary - a.salary
    })
    console.log(sortedBasedOnSalaries.slice(0, n))
}

// topNSalaries(users, 5)

const asyncForEachSerial = async (users) => {
    for (let i = 0; i < users.length; i++) {

        const user = users[i]
        if(!user) {
            console.log(`No user at index ${i}`)
            continue
        }
        await doAsyncWork(i);
    }
}

const doAsyncWork = async (i) => {
   return new Promise((resolve)=>{
    setTimeout(() => {
      console.log(`The msg shown from ${i}`);
      resolve();
    }, 3000);
   })
}

asyncForEachSerial(users)