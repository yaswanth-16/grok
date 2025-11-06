export const users = [
    { id: 1, name: "A", active: true, dept: "eng", salary: 100, reportsTo: 2 },
    { id: 2, name: "B", active: false, dept: "eng", salary: 200, reportsTo: null },
    { id: 3, name: "C", active: true, dept: "sales", salary: 150, reportsTo: 1 },
    null, // <-- edge case
];

// map => To create new array
// filter => To match only elements that match a condition
// Reduce => for grouping

// Get active users

export const getActiveUsers = (users) => {
    return users.filter((user) =>  user?.active === true)
}

const activeUsers = getActiveUsers(users)

export const groupedByDepartment = (users) => {
   
    const groupByDepartment = users.reduce((acc, user) => {

        if (!user) return acc;

        const dept = user.dept
        if (!acc[dept]) {
            acc[dept] = []
        }
        acc[dept].push(user)
        return acc
    }, {})
   return groupByDepartment
}

// groupedByDepartment(users)

export const topNSalaries = (users, n) => {
   return [...users]
            .filter(user => user?.salary!=null)
            .sort((a,b)=>b.salary-a.salary)
            .slice(0,n)
}

// console.log(`${JSON.stringify(topNSalaries(users, 5),null,2)}`)

const doAsyncWork = async (i) => {
   return new Promise((resolve)=>{
    setTimeout(() => {
      console.log(`The msg shown from ${JSON.stringify(i,null,2)}`);
      resolve();
    }, 100);
   })
}

async function forEachSerial(arr, doAsyncWork) {
  for (const item of arr) {
    if (item) await doAsyncWork(item);
  }
}

export const deepflatten=(arr , seen = new WeakSet())=>{
return arr.reduce((acc,val)=>{
    if(Array.isArray(val)) {
        if(seen.has(val)) return acc;
        seen.add(val)
        return [...acc,...deepflatten(val,seen)]
    }
    return [...acc,val]
},[])
}

console.log(deepflatten([1, [2, [3]], null]));
(async() => {
    await forEachSerial(users, doAsyncWork)
})()