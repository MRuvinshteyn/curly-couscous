var rad = 10;
var col1 = "#000000";
var col2 = "#ffffff";
var stroke = "#000000";

var svg = document.getElementById('vimage');

var circles = []; //diagnostic list

var makeCircle = function(x,y){
    var c = {
        cx: x,
        cy: y,
        r: rad,
        fill: col1,
        circle: document.createElementNS("http://www.w3.org/2000/svg", "circle"),
        append: function(){svg.appendChild(this.circle);},
        change: function(e){
            if (this.getAttribute("fill") == col1){this.setAttribute("fill",col2);}
            else{
                var newX = Math.ceil(Math.random() * 500);
                var newY = Math.ceil(Math.random() * 500);
                svg.removeChild(this);
                circles.splice(circles.indexOf(this.circle));
                svg.appendChild(makeCircle(newX,newY).circle);
            }
            e.stopPropagation();
        }
    }
    c.circle.setAttribute("cx", x);
    c.circle.setAttribute("cy", y);
    c.circle.setAttribute("r", rad);
    c.circle.setAttribute("stroke", stroke);
    c.circle.setAttribute("fill", col1);
    c.circle.addEventListener("click",c.change);
    circles.push(c.circle);
    //console.log(circles);
    return c;
}
//console.log(circles);

var drawCircle = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    var c = makeCircle(x,y);
    c.append();
    return c;
}

var clearSVG = function(){
    svg.innerHTML = "";
    circles = [];
}

var changeCol1 = function(){
    col1 = document.getElementById("col1").value;
}

var changeCol2 = function(){
    col2 = document.getElementById("col2").value;
}

var changeStroke = function(){
    stroke = document.getElementById("stroke").value;
}

var changeRad = function(){
    rad = document.getElementById("rad").value;
}


svg.addEventListener("click",drawCircle,false);
document.getElementById("clear").addEventListener("click",clearSVG);
document.getElementById("changeCol1").addEventListener("click",changeCol1);
document.getElementById("changeCol2").addEventListener("click",changeCol2);
document.getElementById("changeStroke").addEventListener("click",changeStroke);
document.getElementById("changeRad").addEventListener("click",changeRad);
