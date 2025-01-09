import * as THREE from "three";
import * as tsl from "three/tsl";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { pass, mrt, output, emissive } from "three/tsl";
import { bloom } from 'three/addons/tsl/display/BloomNode.js';

console.clear();

class Postprocessing extends THREE.PostProcessing {
  constructor(renderer) {
    const scenePass = pass(scene, camera);
    scenePass.setMRT(
      mrt({
        output,
        emissive
      })
    );

    const outputPass = scenePass.getTextureNode();
    const emissivePass = scenePass.getTextureNode("emissive");

    const bloomPass = bloom(emissivePass, 0.2, 0);

    super(renderer);
    
    // patch the result to add the BeerJS logo
    this.outputNode = outputPass.add( bloomPass );
  }
}

class BoxOfLight extends THREE.Mesh{
  constructor(){
    let g = new THREE.BoxGeometry();
    let m = new THREE.MeshPhysicalNodeMaterial({
      side: THREE.DoubleSide,
      metalness:0,
      roughnessNode: tsl.smoothstep(
        tsl.abs(
          tsl.dot(
            tsl.normalView, 
            tsl.positionView.normalize().negate()
          )
        ), 
        0.1, 
        0.25
      ).oneMinus(),
      transmission: 1,
      ior: 1.345,
      thickness: 1,
      emissiveNode: tsl.Fn(() => {
        let uv = tsl.uv().toVar();
        let absUV = uv.sub(0.5).abs().toVar();
        let maxUV = tsl.max(absUV.x, absUV.y);
        
        let fn = tsl.smoothstep(0.48, 0.49, maxUV);
        
        let col = tsl.color(0xaaccff).mul(2);
        
        return col.mul(fn);
      })()
    });
    super(g, m);

    [
      [ 1, 0, 0], 
      [-1, 0, 0], 
      [ 0, 1, 0], 
      [ 0,-1, 0], 
      [ 0, 0, 1], 
      [ 0, 0,-1]
    ].forEach(l => {
      let v = new THREE.Vector3(...l);
      let light = new THREE.SpotLight(0xaaccff, Math.PI * 10, 10, Math.PI * 0.75, 1, 2);
      light.position.copy(v);
      light.target.position.copy(v.multiplyScalar(2));
      this.add(light);
      this.add(light.target);
    });
    
    this.inits = {
      rot: {x: Math.PI * 2 * Math.random(), y: Math.PI * 2 * Math.random(), z: Math.PI * 2 * Math.random()}
    }
  }
  
  update(t){
    this.rotation.set(
      this.inits.rot.x + t * 0.4 * Math.PI * 2,
      this.inits.rot.y + t * 0.2 * Math.PI * 2,
      this.inits.rot.z
    )
    this.position.y = 0.25 + Math.sin(t * Math.PI * 2 * 0.125) * 0.75;
  }
}

class HollySurface extends THREE.Mesh{
  constructor(){
    let shape = new THREE.Shape([[1, 1], [-1, 1], [-1, -1], [1, -1]].reverse().map(p => {return new THREE.Vector2(...p).multiplyScalar(10)}));
    let size = 1.5;
    let radius = 0.5;
    let center = size - radius;
    let hole = new THREE.Path()
      .absarc( center, center, radius, Math.PI * 0.5 * 0, Math.PI * 0.5 * 1)
      .absarc(-center, center, radius, Math.PI * 0.5 * 1, Math.PI * 0.5 * 2)
      .absarc(-center,-center, radius, Math.PI * 0.5 * 2, Math.PI * 0.5 * 3)
      .absarc( center,-center, radius, Math.PI * 0.5 * 3, Math.PI * 0.5 * 4)
    shape.holes.push(hole);
    
    let g = new THREE.ExtrudeGeometry(
      shape, 
      {
        depth: 0.875, 
        bevelSize: 0.05,
        bevelThickness: 0.05,
        bevelSegments: 10
      }
    ).rotateX(-Math.PI * 0.5).rotateY(Math.PI * 0.25).translate(0, -1, 0);
    let m = new THREE.MeshStandardMaterial({
      color: 0x444444,
      metalness: 0.6,
      roughness: 0.4
    });
    
    super(g, m);
  }
}

let scene = new THREE.Scene();
scene.backgroundNode = tsl.color(0x000000);
let camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 100);
camera.position.set(-0.1, 0.25, 1).setLength(5);
let renderer = new THREE.WebGPURenderer({ antialias: true });
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

let postprocessing = new Postprocessing(renderer);

window.addEventListener("resize", (event) => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

let controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 10;
controls.maxPolarAngle = Math.PI * 0.45;
controls.autoRotate = true;

let hollySurface = new HollySurface();
scene.add(hollySurface);

let boxOfLight = new BoxOfLight();
boxOfLight.position.set(0, 1, 0);
scene.add(boxOfLight);

let clock = new THREE.Clock();
let t = 0;

renderer.setAnimationLoop(() => {
  let dt = clock.getDelta();
  t += dt;
  controls.update();
  boxOfLight.update(t);
  //renderer.render(scene, camera);
  postprocessing.render();
});







$(document).ready(function() {
  var c = 0 ;
  $('.bg-change').click(function() {
       $('body').toggleClass('dark'); 
       $(this).toggleClass('whitetext'); 
  })
  
  
})


var backgroundAnimation = function () {

        var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

        // Main
        initHeader();
        initAnimation();
        addListeners();

        function initHeader() {
            width = window.innerWidth;
            height = window.innerHeight;
            target = {x: width / 2, y: height / 2};

            canvas = document.getElementById('bg-animation');
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext('2d');

            // create points
            points = [];
            for (var x = 0; x < width; x = x + width / 10) {
                for (var y = 0; y < height; y = y + height / 10) {
                    var px = x + Math.random() * width / 10;
                    var py = y + Math.random() * height / 10;
                    var p = {x: px, originX: px, y: py, originY: py};
                    points.push(p);
                }
            }

            // for each point find the 5 closest points
            for (var i = 0; i < points.length; i++) {
                var closest = [];
                var p1 = points[i];
                for (var j = 0; j < points.length; j++) {
                    var p2 = points[j]
                    if (!(p1 == p2)) {
                        var placed = false;
                        for (var k = 0; k < 5; k++) {
                            if (!placed) {
                                if (closest[k] == undefined) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }
                        for (var k = 0; k < 5; k++) {
                            if (!placed) {
                                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }
                    }
                }
                p1.closest = closest;
            }

            // assign a circle to each point
            for (var i in points) {
                var c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(0,0,0,0.2)');
                points[i].circle = c;
            }
        }

        // Event handling
        function addListeners() {
            if (!('ontouchstart' in window)) {
                window.addEventListener('mousemove', mouseMove);
            }
            window.addEventListener('scroll', scrollCheck);
            window.addEventListener('resize', resize);
        }

        function mouseMove(e) {
            var posx = posy = 0;
            if (e.pageX || e.pageY) {
                posx = e.pageX - (document.body.scrollLeft + document.documentElement.scrollLeft);
                posy = e.pageY - (document.body.scrollTop + document.documentElement.scrollTop);
            }
            else if (e.clientX || e.clientY) {
                posx = e.clientX;
                posy = e.clientY;
            }
            target.x = posx;
            target.y = posy;
        }

        function scrollCheck() {
            if ($(document).scrollTop() > height / 2) animateHeader = true;
            else animateHeader = false;
        }

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }

        // animation
        function initAnimation() {
            animate();
            for (var i in points) {
                shiftPoint(points[i]);
            }
        }

        function animate() {

            if (animateHeader) {
                ctx.clearRect(0, 0, width, height);

                for (var i in points) {
                    // detect points in range
                    if (Math.abs(getDistance(target, points[i])) < 4000) {
                        points[i].active = 0.3;
                        points[i].circle.active = 0.6;
                    } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                        points[i].active = 0.1;
                        points[i].circle.active = 0.3;
                    } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                        points[i].active = 0.02;
                        points[i].circle.active = 0.1;
                    } else {
                        points[i].active = 0;
                        points[i].circle.active = 0;
                    }

                    drawLines(points[i]);
                    points[i].circle.draw();
                }
            }
            requestAnimationFrame(animate);
        }

        function shiftPoint(p) {
            TweenLite.to(p, 1 + 1 * Math.random(), {
                x: p.originX - 50 + Math.random() * 100,
                y: p.originY - 50 + Math.random() * 100, ease: Circ.easeInOut,
                onComplete: function () {
                    shiftPoint(p);
                }
            });
        }

        // Canvas manipulation
        function drawLines(p) {
            if (!p.active) return;
            for (var i in p.closest) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.closest[i].x, p.closest[i].y);
                ctx.strokeStyle = 'rgba(254,254,254,' + p.active + ')';
                ctx.stroke();
            }
        }

        function Circle(pos, rad, color) {
            var _this = this;

            // constructor
            (function () {
                _this.pos = pos || null;
                _this.radius = rad || null;
                _this.color = color || null;
            })();

            this.draw = function () {
                if (!_this.active) return;
                ctx.beginPath();
                ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'rgba(254,254,254,' + _this.active + ')';
                ctx.fill();
            };
        }

        // Util
        function getDistance(p1, p2) {
            return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
        }
    }

    $(document).ready(function(){
        backgroundAnimation();
    });