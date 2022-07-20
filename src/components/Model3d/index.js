import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { RoundedBox, useGLTF } from '@react-three/drei';
function Model3d() {
    const Model = () => {
        const gltf = useGLTF('../../../public/model.gltf', true)
        return <primitive object={gltf.scene} dispose={null} />
    }
    return (
        <Canvas
            colorManagement
            shadowMap
            camera={{ position: [0, 0, 20], fov: 70 }}
        >
            <Suspense fallback={null}>
                <mesh position={[0, 35, 0]}>
                    <Model />
                </mesh>
            </Suspense>
        </Canvas>);
}
export default Model3d;
