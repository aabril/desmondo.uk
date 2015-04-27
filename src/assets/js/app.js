// Got, for testing purposes, from:
// original artwork by: http://codepen.io/jennyveens/pen/bNPYyj

var camera, scene, renderer;
var geometry, material, mesh;

var init = function () {
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 800;
    scene = new THREE.Scene();
    geometry = new THREE.SphereGeometry( 200, 15, 10 );
    material = new THREE.MeshBasicMaterial( { color: 0xDDA0DD, wireframe: true, wireframeLinewidth: 3 } );
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
}

var animate = function () {
    requestAnimationFrame( animate );
    mesh.rotation.x = Date.now() * 0.0002;
    mesh.rotation.y = Date.now() * 0.001;
    renderer.render( scene, camera );
}

init();
animate();
