
// import { render } from 'react-dom';
import './index.css'
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function App() {

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(70);
renderer.render(scene, camera);
                                                                                            // TorusGeometry
const geometry = new THREE.TorusGeometry(10,3,16,200)
const material = new THREE.MeshStandardMaterial({color:0xfffffff ,wireframe:false});
const torus = new THREE.Mesh(geometry,material);
scene.add(torus);

                                                                                            // TorusKnotGeometry

const geometry2 = new THREE.TorusKnotGeometry(1,2,3,4);
const material2 = new THREE.MeshStandardMaterial({color:0xffffff , wireframe:true})
const torusKnot = new THREE.Mesh(geometry2, material2);
scene.add(torusKnot);

const pointLight = new THREE.PointLight(0xfffff,100,100);
pointLight.position.set(0,0,0);
scene.add(pointLight);
const pointLightHelper = new THREE.PointLightHelper(pointLight)
scene.add(pointLightHelper);
const ambientLight = new THREE.AmbientLight(0xffffff);
const spotLight = new THREE.SpotLight( 0xff0000 ,1000,40 );
spotLight.position.set( 10, 10, 30);
scene.add( spotLight );
const spotLightHelper = new THREE.SpotLightHelper(spotLight)
scene.add(spotLightHelper)





const gridHelper = new THREE.GridHelper(100,50)
scene.add(pointLight, ambientLight,gridHelper);
const orbitControl = new OrbitControls(camera,renderer.domElement);




                                                                                          // Animation automation
function animate(){
requestAnimationFrame(animate)  

torus.rotation.y += 0.01;
torus.rotation.x += 0.01;
  renderer.render(scene, camera)

  orbitControl.update();
}
animate()


  return (
    <>
     
    </>
  )
}

export default App

