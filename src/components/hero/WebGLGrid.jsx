"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WebGLGrid() {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        mountRef.current.appendChild(renderer.domElement);

        // 🌐 GRID
        const grid = new THREE.GridHelper(
            60,
            60,
            0xa855f7,
            0x1f2937
        );
        scene.add(grid);

        camera.position.z = 25;
        camera.position.y = 6;

        const animate = () => {
            requestAnimationFrame(animate);

            grid.rotation.y += 0.001;
            grid.rotation.x = Math.sin(Date.now() * 0.0005) * 0.2;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="absolute inset-0 z-0 opacity-30"
        />
    );
}