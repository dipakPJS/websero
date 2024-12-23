import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/LineMotion.gltf');
  const { actions, names } = useAnimations(animations, group);
  const mouse = useRef({ x: 0, y: 0 });

  // Capture mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse position from -1 to 1
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Play animation on load
  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, [actions, names]);

  // Mouse-following effect: update rotation based on mouse position
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = mouse.current.x * 0.5; // Rotate on the y-axis
      group.current.rotation.x = mouse.current.y * 0.5; // Rotate on the x-axis
    }
  });

  return (
    <group ref={group} {...props} dispose={null} scale={1.3} className="focus:touch-pan-x">
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 20, 0, 0]}>
          <group name="a3e7ec57c83e408cb9fb896bae601145abccleanermaterialmergergles">
            <group name="Object_2" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_3">
                <group name="MorphMainGroup">
                  <mesh 
                    name="make_loop1" 
                    geometry={nodes.make_loop1.geometry} 
                    material={materials.make_loop1} 
                    morphTargetDictionary={nodes.make_loop1.morphTargetDictionary} 
                    morphTargetInfluences={nodes.make_loop1.morphTargetInfluences} 
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/LineMotion.gltf');
