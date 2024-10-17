/* import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { Html } from '@react-three/drei';

const colors = ['#001FFF', '#0B021C', '#1A225A', '#D9D9D9', '#FDFFB1', '#FFFFFF'];

const Circle = ({ position, size, color, direction }) => {
	const meshRef = useRef();

	useFrame(() => {
		meshRef.current.position.x += direction === 'right' ? 0.02 : -0.02;

		if (meshRef.current.position.x > 15) meshRef.current.position.x = -15;
		if (meshRef.current.position.x < -15) meshRef.current.position.x = 15;
	});

	return (
		<mesh ref={meshRef} position={position}>
			<sphereGeometry args={[size, 32, 32]} />
			<meshStandardMaterial attach="material" color={color} />
		</mesh>
	);
};

const BackgroundAnimation = () => {
	const [circleSize, setCircleSize] = useState(5);

	useEffect(() => {
		const updateSize = () => {
			setCircleSize((window.innerWidth * 0.4) / 100); // Set size based on 40% of width
		};
		updateSize();
		window.addEventListener('resize', updateSize);
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	const positionsY = [-4, 0, 4];
	return (
		<Canvas
			style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, width: '100%', height: '100%', filter: "blur(10px)" }}
			camera={{ position: [0, 0, 2], fov: 75 }}
		>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			 <group>
				
				{Array.from({ length: 6 }).map((_, i) => (
					<Circle
						key={i}
						position={[
							i % 2 === 0 ? -10 : 10, // Alternate starting position (left and right)
							positionsY[Math.floor(i / 2) % positionsY.length], // Adjust Y positions for rows
							0,
						]}
						size={circleSize} // Circle size (40% of screen width)
						color={colors[i % colors.length]} // Cycle through colors
						direction={i % 2 === 0 ? 'right' : 'left'} // Alternate movement directions
					/>
				))}
			</group> 
			<Html position={[1, 1, 1]}>
				<div style={{ color: 'white', width: "800px", height: "1000px", padding: '10px', backgroundColor: 'white' }} className='w-[500px] h-[1000px]'>
					Hello from HTML inside Canvas!
				</div>
			</Html>
		</Canvas>
	);
};

export default BackgroundAnimation;
 */
/*import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';*/

const BackgroundAnimation = () => {
	return (
		<>
			{/*<Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, width: '100%', height: '100%' }} className=''>
			<ambientLight />
			<pointLight position={[0, 0, 0]} />

			<Html position={[0, 0, 0]} style={{ width: '100%', height: '100%', zIndex: 0, border: "1px solid red" }} className='blur-[5px]'>
				<div>
					<div className='min-h-[4000px] translate-x-[-50%] border-[5px] translate-y-[-50%] w-screen'>
						<div className='w-[200px] h-[200px] bg-white'>

						</div>
					</div>
				</div>
			</Html>
		</Canvas>*/}
		</>
	);
};

export default BackgroundAnimation;
