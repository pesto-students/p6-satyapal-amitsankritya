let arr = [0, 2, 1, 2, 0];
let stack = [...arr];
for(var i = 0; i < arr.length; i++) {
    if(arr[i] == 0) {
        stack.push(arr[i])
    }
}
