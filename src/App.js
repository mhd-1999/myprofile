import { useEffect, useRef, useState } from 'react';
import './App.css';
import Cursor from './components/Cursor/Cursor';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { gsap } from 'gsap';
import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'// import Model from './Model';
const Model = () => {
    const gltf = useLoader(GLTFLoader, "/model.gltf")
    return (
        <>
            <primitive object={gltf.scene} scale={0.4} />
        </>
    )
}
export default function App() {
    const loadRef = useRef();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => clearTimeout(timer)
    }, [])
    if (loading) {
        return <div id="preloader">
        </div>
    }

    return (
        <div className="App">
            {/* <Canvas>
                <Suspense flallback={null}>
                    <Model />
                    <OrbitControls />
                    <Environment preset='sunset' background />
                </Suspense>
            </Canvas> */}
            <Header />
            <Main />
            <Footer />
            <Cursor />
        </div >
    );
}

// export default App;
