import assert from 'assert'
import { getActiveUsers, groupedByDepartment, topNSalaries, users } from "./array-mastery.js";

assert.deepStrictEqual(getActiveUsers(users), [
  { id: 1, name: "A", active: true, dept: "eng", salary: 100, reportsTo: 2 },
  { id: 3, name: "C", active: true, dept: "sales", salary: 150, reportsTo: 1 }
], "Active users wrong");

assert.deepStrictEqual(Object.keys(groupedByDepartment(users)), ["eng", "sales"], "Grouping failed");

assert.deepStrictEqual(topNSalaries(users, 2).map(u => u?.salary), [200, 150], "Top salaries fucked");

console.log("✅ ALL TESTS PASS—YOU'RE NOT TOTAL SHIT YET");