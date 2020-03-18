
    window.requestAnimFrame = (function() {
      return window.requestAnimationFrame ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame ||
             window.oRequestAnimationFrame ||
             window.msRequestAnimationFrame ||
             function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
               window.setTimeout(callback, 1000/60);
             };
    })();

    var canvas;
    var ctx;
    var w,h;
   
    var params
    function initParams() {
        params = {
            'x0': canvas.width/2,
            'y0': canvas.height/2,
            'angle': 0,
            //'mode': 0,
            'vx': 0,
            'vy': 0,
            // For Mode 0
            //'fixedDisplacement': 20, // 20 pix/s
            //'angleStep': 15, // 15 deg for each keyPress
            // For Mode 1
            //'fixedVelocity': 20, // 20 pix/s
            'angleVelocity': 180, // 1 turn in 2s
            // For Mode 2
            'fixedAcceleration': 0.1 // 0.1 pix/s velocity if accelerate for 1s
        }
    }
   
    /* ### GUI ### */
    var gui;     
    function initGUI() 
    {
        gui = new dat.GUI({ autoPlace: true });

        gui.add(params,'x0').min(0).max(w).step(1)
                            .onChange(onParamsChange)//.listen()
        gui.add(params,'y0').min(0).max(h).step(1)
                            .onChange(onParamsChange)//.listen()
        gui.add(params,'angle').min(-180).max(180).step(1)
                               .onChange(onParamsChange)//.listen()
        //gui.add(params,'mode', [ 0, 1, 2 ]).onChange(onParamsChange)
        gui.add(params,'vx').min(-50).max(+50).step(0.1)
                            .onChange(onParamsChange)//.listen()
        gui.add(params,'vy').min(-50).max(+50).step(0.1)
                            .onChange(onParamsChange)//.listen()
        //gui.add(params,'angleStep').min(0).max(30).step(0.1)
        //   .onChange(onParamsChange) // 30 deg max by displacement
        gui.add(params,'angleVelocity').min(0).max(720).step(0.1)
           .onChange(onParamsChange) // 720 deg max in 1s
        //gui.add(params,'fixedDisplacement').min(0).max(50).step(1)
        //    .onChange(onParamsChange) // 50 pix max
        //gui.add(params,'fixedVelocity').min(0).max(50).step(0.1)
        //    .onChange(onParamsChange) // 50 pix max in 1s
        gui.add(params,'fixedAcceleration').min(0).max(+50).step(0.1)
            .onChange(onParamsChange)
        
        //var parent = document.getElementById('controls');      
        //parent.appendChild(gui.domElement);
    }
    // GUI callback when parameters are changed manually in the GUI
    function onParamsChange() {
        drawAll()
    }

    /* ### Keyboard ### */
    var currentlyPressedKeys = {};
    function initKeys(canvas) {
        // Make sure the canvas can receive the key events
        canvas.setAttribute('tabindex','0');
        canvas.focus();

        // Register the keyDown and keyUp events
        canvas.addEventListener( "keydown", onKeyDown, true);
        canvas.addEventListener( "keyup", onKeyUp, true);
    }
    // Callbacks for discrete key events
    function onKeyDown(event) {
        // Uncomment this to display key presses to find the keyCodes
        console.log(event)
        event.preventDefault();
        
        // Put your code here
    
        if (params.mode==0) {
            // React to discrete key presses in mode 0
        }

        // Handle single key presses (for example for firing the gun)
        if (event.keyCode == 67) { // K
            console.log('Pressed "K"')
        }
    }
    function onKeyUp(event) {
        // Put your code here
    }
    
    /* ### Timing and main loop ### */
    var startTime = 0;
    var lastTime = 0;
    var elapsed = 0, totalElapsed = 0;
    function updateTime() {
        var timeNow = new Date().getTime() / 1000; // All expressed in seconds
        if (lastTime != 0) {
            elapsed = timeNow - lastTime;
        } else {
            startTime = timeNow;
        }
        lastTime = timeNow;
        totalElapsed = timeNow - startTime;
    }
    // Timer callback for animations
    function onTick() {
        if (params.mode>0) {
            updateTime()
            animate();
            drawAll();
        }
        requestAnimFrame(onTick);
    }
    // To animate the ship, check the keyboard state by polling
    function animate() {
    
        if (params.mode==1) {
            // React to key state in mode 1
        }
        
        if (params.mode==2) {
            // React to key state in mode 2
        }
        
    }

    /* ### Drawing ### */
    function drawGuides(ctx) {
        // Do not call this function once your ship is in 
        // correct position/correct angle

        // Define transformation before drawing the guides    
        ctx.setTransform(1,0, 0,1, 0,0)

        ctx.beginPath()
        ctx.rect(params.x0-5, params.y0-5,10,10)
        ctx.fillStyle="red";
        ctx.lineWidth = 2;
        ctx.fill()

        ctx.beginPath()
        let angleRad = params.angle/180*Math.PI
        ctx.moveTo(params.x0, params.y0-60)
        ctx.lineTo(params.x0, params.y0)
        ctx.lineTo(params.x0+60*Math.sin(angleRad),
                   params.y0-60*Math.cos(angleRad))
        ctx.strokeStyle="gray";
        ctx.lineWidth = 1;
        ctx.stroke()
        
        ctx.beginPath()
        if (angleRad>=0)
            ctx.arc(params.x0,params.y0,50,-Math.PI/2,angleRad-Math.PI/2,false);
        else
            ctx.arc(params.x0,params.y0,50,-Math.PI/2,angleRad-Math.PI/2,true);
        ctx.stroke()
        
        ctx.strokeStyle="black";
        ctx.strokeText('<-- Move the ship there', params.x0, params.y0)
    }
    function drawShip(ctx) {

        drawGuides(ctx) // Remove this function when your ship is OK


        ctx.setTransform(1,0, 0,1, 0,0)
                
        // This ship is not in the correct place, 
        // use rotate and translate to position it correctly 
        
        ctx.beginPath()
        ctx.moveTo(0, -20)
        ctx.lineTo(10, 10)
        ctx.lineTo(-10, 10)
        ctx.lineTo(0, -20)
        ctx.strokeStyle="red";
        ctx.lineWidth = 2;
        ctx.stroke()

    }

    function drawAll() {
        // Reset transform before clearing the canvas
        ctx.setTransform(1,0,0, 1,0,0)
        ctx.clearRect(0,0,canvas.width,canvas.height)

        drawShip(ctx)
    }

    /* ### Initialization ### */ 
    function start() {
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        
        w = canvas.width;
        h = canvas.height;

        // Do init
        initParams()
        initGUI()
        initKeys(canvas)
        
        // Draw for the first time
        drawAll()

        // Launch main animation loop
        onTick()
    }