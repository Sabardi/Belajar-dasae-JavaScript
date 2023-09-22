const maps = new Map([
    ['1',2],
    [1,'2'],
    [true, true],
    ['hallo','hello']
])
console.log(maps)
console.log("==========")

const capitals = new Map([
    ["jakarta","indonesia"],
    ["london","england"],
    ["tokyo","jepang"]
])

console.log(capitals.size)
console.log(capitals.get("london"))
capitals.set("new delhi","india")
console.log(capitals.size)
console.log(capitals.get("new delhi"))


