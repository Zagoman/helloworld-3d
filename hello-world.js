import * as THREE from "https://unpkg.com/three@0.108.0/build/three.module.js";

// get your canvas
const canvas = document.querySelector("#myCanvas");

//Create Renderer, pass to it the canvas and call it canvas
const renderer = new THREE.WebGLRenderer({ canvas: canvas });

//Create a camera, you need a FOV, Aspect-ratio, near and far
const fov = 75; // 75 is the angle in degrees
const aspect = 2; //aspect-ratio is the width/height
const near = 0.1; //near tells the camera from how far from the lens you want to be visible
const far = 5.0; //far tells the camera when to stop
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far); //The camera itself
camera.position.z = 3;
// camera.position.x = 0;
// camera.position.y = 0;

// Create a scene
const scene = new THREE.Scene();

//Create a Box, you need the material, the geometry and then mix them together with a mesh
/**
 * To create the geometry, you need the height, width and depth
 */
const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

/**
 * To Create the Material, you will need the color of the face of the geometry
 */
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

//Blend the geometry with the material using the Mesh
const box = new THREE.Mesh(geometry, material);
// box.position.z = 0;
box.position.x = -2;
box.position.y = -1;

/**
 * When you create a geometry, you need to add it to the scene for it to become visible
 */
//Add the box to the scene
scene.add(box);

/**
 * You need to tell the renderer to render, it is like clicking the photo button.
 */
// Render the unique frame
renderer.render(scene, camera);
