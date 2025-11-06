import { getActiveUsers, topNSalaries, users } from "./array-mastery.js";

console.assert(getActiveUsers(users).length === 2, "Active filter failed");
console.assert(topNSalaries(users, 1)[0].salary === 200, "Top salary wrong");

console.log("✅ All tests passed!");