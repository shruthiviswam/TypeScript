// Function Declaration
var drawLine = function (mypoint) {
    console.log(mypoint.x, mypoint.y, mypoint.z, mypoint.a);
};
// Function Calling
drawLine({
    x: [1, 2, 3],
    y: 6,
    z: ['hello', 'how', 'are', 'you'],
    a: true
});
