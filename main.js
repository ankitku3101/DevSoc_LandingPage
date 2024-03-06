import './style.css';
import gsap from 'gsap';
import * as THREE from 'three';
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const render = new THREE.WebGL1Renderer({
  canvas:document.querySelector("#bg"),
});

render.setPixelRatio(window.devicePixelRatio)
render.setSize(window.innerWidth,window.innerHeight)
camera.position.setZ(30);

render.render(scene,camera);

const geometry = new THREE.TorusGeometry(30,3*3, 16, 100);

const material = new THREE.MeshStandardMaterial({color:0xFF6347,wireframe:true});

const torus =  new THREE.Mesh(geometry,material)
scene.add(torus)

const pointLight= new THREE.PointLight(0xffffff)
pointLight.position.set(10,10,10)
pointLight.intensity=100

const ambientLight = new THREE.AmbientLight(0x000000);

scene.add(pointLight,ambientLight)

// const controls = new OrbitControls(camera,render.domElement)
const geometry0 = new THREE.SphereGeometry(0.25, 24, 24);
const material0 = new THREE.MeshStandardMaterial({ color: 0xffffff})

function addStar(){

  const star = new THREE.Mesh(geometry0,material0)

  const [ x, y, z ] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(200));

  star.position.set(x, y, z);
  scene.add(star);
}
Array(1000).fill().forEach(addStar)

gsap.from(torus.material, {
  duration: 6, // Animation duration should match timeout
  opacity: 0, // Start from opacity 0
  ease: "power4.inOut",
  onComplete: animate // Start animation after opacity animation completes
});

function animate(){
  requestAnimationFrame(animate);
  torus.rotation.x+=0.005;
  torus.rotation.y+=0.005;
  torus.rotation.z+=0.005;
  // controls.update()
  render.render(scene,camera);
  addStar()
}

//GSAP THINGS .. . . .. 

gsap.from(".clip-top, .clip-bottom", {
  duration: 2,
  delay: 1,
  height: "50vh",
  ease: "power4.inOut"
});

gsap.to(".marquee", {
  duration: 3.5,
  delay: 0.75,
  top: "50%",
  ease: "power4.inOut"
});

gsap.to([".clip-top .marquee", ".clip-bottom .marquee"], {
  duration: 5,
  delay: 1,
  left: "100%",
  ease: "power3.inOut"
});

gsap.to(".clip-center .marquee", {
  duration: 5,
  delay: 1,
  left: "-23%",
  ease: "power3.inOut"
});

gsap.to(".clip-top", {
  duration: 2,
  delay: 6,
  clipPath: "inset(0 0 100% 0)",
  ease: "power4.inOut"
});

gsap.to(".clip-bottom", {
  duration: 2,
  delay: 6,
  clipPath: "inset(100% 0 0 0)",
  ease: "power4.inOut"
});

gsap.to([".clip-top .marquee", ".clip-bottom .marquee", ".clip-center .marquee span"], {
  duration: 1,
  delay: 6,
  opacity: 0,
  ease: "power4.inOut"
});
