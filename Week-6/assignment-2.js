// Problem Description Given a matrix of m * n elements (m rows, n columns), 
// return all elements of the matrix in spiral order.Example: 
// Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]

/* [ 
[ 1, 2, 3 ], 
[ 4, 5, 6 ], 
[ 7, 8, 9 ]
] */

// i = 0, j = 0
// 00, 01, 02 => j = n-1 (first row)
// 12, 22 => i = m - 1 (last column)
// 21, 20 => j = 0 (last row. skip the element that is already printed)
// 10, 11 => (last column. skip the element that is already printed)

let arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
let m = n = 3;
let spiral = [];

function getSpiral(arr, i, j, m, n,) {
    
    // print first row
    for(let x = j; x < m; x++) {
        spiral.push(arr[i][x]);
    }

    // print last column
    for(let x = i+1; x < n; x++) {
        spiral.push(arr[x][n-1]);
    }

    // print last row

    for(let x = j+1; x >= 0; x--) {
        if(m-1 != x) {
            console.log(m-1+""+x+" "+n);
            spiral.push(arr[m-1][x]);
        }
    }

    // print first column
    for(let x = n - 1; x >= 0; x--) {
        if(m-1 != x) {
            console.log(x+""+j+" "+m);
            spiral.push(arr[x][j]);
        }
    }

    return spiral;
}

console.log(getSpiral(arr, 0, 0, m, n));