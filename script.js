const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const c = canvas.getContext("2d");
    
    function Circle(x,y,dx,dy, radius) {
        this.x = x;
        this.y = y;
        
        this.dx = dx;
        this.dy = dy;
        
        this.radius = radius;
        
        this.draw = function () {
            c.beginPath();
            c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
            c.strokeStyle ='blue';
            c.stroke();
        }
        
        this.update = function () {
            if(this.x +this.radius >innerWidth || this.x - this.radius<0) {
                this.dx= -this.dx;
            }
            this.x += this.dx;
        
            if(this.y +this.radius >innerHeight|| this.y - this.radius<0) {
                this.dy= -this.dy;
            }
            this.y += this.dy;
            
            this.draw();
        }
    }
    
    var circle = new Circle(200,200,1,1,30);
    
/*    
    var x =Math.random()*innerWidth;
    var dx =(Math.random() - 0.5)*6;
    
    var y =Math.random()*innerHeight;
    var dy = (Math.random() - 0.5)*6;
    
    var radius =30;
*/
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0,0,innerWidth,innerHeight);
        circle.update();
        
    }
animate();
