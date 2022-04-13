/**
 * @param  {} {varlength=prompt("Enterawholenumberforthelengthofyourrectangle."
 * @param  {} ;varwidth=prompt("Enterawholenumberforthewidthofyourrectangle."
 * @param  {} ;vardepth=prompt("Enterawholenumberforthedepthofyourrectangleprism"
 * @param  {} ;varperimeter=(2*length
 * @param  {} +(2*width
 * @param  {} ;vararea=length*width;varvolume=length*width*depth;document.getElementById("a"
 * @param  {"+area;document.getElementById("b"} .innerHTML="Areaofrectangle
 * @returns volume
 */
function surface() {
  
    var length = prompt("Enter a whole number for the length of your rectangle.");
    var width = prompt ("Enter a whole number for the width of your rectangle.");
    var depth= prompt ("Enter a whole number for the depth of your rectangle prism");
    
       
    var perimeter = (2 * length ) + (2 * width );
    var area= length * width ;
    var volume= length * width * depth;
    
     document.getElementById("a").innerHTML =
            "Area of rectangle:"  + area;
     document.getElementById("b").innerHTML =
            "perimeter of rectangle:"  + perimeter ;
     document.getElementById("c").innerHTML =
            "volume of rectangle prism:"  + volume;
    }