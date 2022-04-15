function calcDistance(x1, y1, x2,  y2)
{
    // Calculating distance
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) * 1.0);
}


console.log(calcDistance(10, 50, 20,30))