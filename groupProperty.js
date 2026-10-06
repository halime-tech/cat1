function groupByProperty(arr){
    return Object.groupBy(arr, (item)=> item.role);
}
const users = [
  { name: "John", role: "admin" },
  { name: "Alice", role: "user" },
  { name: "David", role: "admin" }
];

console.log(groupByProperty(users, "role"));