import { useRef } from 'react';

import { useProjectsStore } from '~/lib/stores/projects';

import { useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { easing } from 'maath';
import * as THREE from 'three';

const material = new THREE.LineBasicMaterial({ color: 'white' });
const geometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, -0.5, 0),
  new THREE.Vector3(0, 0.5, 0),
]);

export const Minimap = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- we know it's not null
  const ref = useRef<THREE.Group>(null!);
  const scroll = useScroll();
  const { urls } = useProjectsStore();
  const { height } = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    ref.current.children.forEach((child, index) => {
      // Give me a value between 0 and 1
      //   starting at the position of my item
      //   ranging across 4 / total length
      //   make it a sine, so the value goes from 0 to 1 to 0.
      const y = scroll.curve(
        index / urls.length - 1.5 / urls.length,
        4 / urls.length
      );
      easing.damp(child.scale, 'y', 0.15 + y / 6, 0.15, delta);
    });
  });
  return (
    <group ref={ref}>
      {urls.map((_, i) => (
        <line
          key={i}
          // @ts-expect-error -- three line
          // eslint-disable-next-line react/no-unknown-property -- three line
          geometry={geometry}
          // eslint-disable-next-line react/no-unknown-property -- three line
          material={material}
          // eslint-disable-next-line react/no-unknown-property -- three line
          position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]}
        />
      ))}
    </group>
  );
};
