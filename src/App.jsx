
// import { render } from 'react-dom';
import './index.css'
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';


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
// const geometry = new THREE.TorusGeometry(10,3,16,200)
// const material = new THREE.MeshStandardMaterial({color:0xfffffff ,wireframe:false});
// const torus = new THREE.Mesh(geometry,material);
// scene.add(torus);
// torus.position.x=30;
//                                                                                             // TorusKnotGeometry

// const geometry2 = new THREE.TorusKnotGeometry(10,2,3,4);
// const material2 = new THREE.MeshStandardMaterial({color:0xfff35 , wireframe:false})
// const torusKnot = new THREE.Mesh(geometry2, material2);
// scene.add(torusKnot);
// torusKnot.position.z = 15 ;
// torusKnot.position.setX(-10);


// const pointLight = new THREE.PointLight(0xfffff,100,100);
// pointLight.position.set(0,0,0);
// scene.add(pointLight);
// const pointLightHelper = new THREE.PointLightHelper(pointLight)
// scene.add(pointLightHelper);
const ambientLight = new THREE.AmbientLight(0xffffff);
// const spotLight = new THREE.SpotLight( 0xff0000 ,1000,40 );
// spotLight.position.set( 10, 10, 30);
// scene.add( spotLight );
// const spotLightHelper = new THREE.SpotLightHelper(spotLight)
// scene.add(spotLightHelper)


                                                                                          // Earth 3D
const gltfLoader = new GLTFLoader();
const modelPath = new URL("./assets/earth.glb", import.meta.url).href;
gltfLoader.load(modelPath, (gltfScene) =>{

gltfScene.scene.scale.set(30,30,30)
  scene.add(gltfScene.scene);
})



// gltfLoader.load("./assets/earth.glb",(gltfScene) => {


//   test.scene.add(gltfScene.scene);
// })



const gridHelper = new THREE.GridHelper(100,50)
// scene.add(pointLight, ambientLight,gridHelper);
scene.add(gridHelper);
const orbitControl = new OrbitControls(camera,renderer.domElement);




                                                                                          // Animation automation
function animate(){
requestAnimationFrame(animate)  

// torus.rotation.y += 0.01;
// torus.rotation.x += 0.01;
  renderer.render(scene, camera)

  orbitControl.update();
}
animate()
                                                                                              
                                                                                            // Move Camera 

function moveCamera(){

const t = document.body.getBoundingClientRect().top;
  // torus.rotation.x += 0.09;
  // torus.rotation.y += 0.02;

  // torusKnot.rotation.x +=0.1;
  // torusKnot.rotation.z + 0.01;

  camera.position.z = t * -0.01;
  camera.position.y= t * -0.002;
  camera.position.x = t* -0.002;

}

document.body.onscroll = moveCamera
  return (
    <main>
     

    </main>
  )  
}

export default App

