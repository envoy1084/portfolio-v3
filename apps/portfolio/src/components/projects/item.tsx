/* eslint-disable @typescript-eslint/no-non-null-assertion  -- safe */
import { useRef, useState } from 'react';

import { useProjectsStore } from '~/lib/stores/projects';

import {
  type ImageProps,
  Image as ThreeImage,
  useScroll,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import * as THREE from 'three';

type ItemProps = ImageProps & {
  index: number;
};

const mesh = new THREE.Mesh<
  THREE.BufferGeometry,
  THREE.Material | THREE.Material[],
  THREE.Object3DEventMap
>();

interface ItemMaterial extends THREE.Material {
  scale: THREE.Vector2;
  color: THREE.Color;
}

export const Item = ({ index, position, scale, ...props }: ItemProps) => {
  const ref = useRef<typeof mesh>(null!);
  const scroll = useScroll();
  const { active, urls, setActive } = useProjectsStore();
  const [hovered, setHovered] = useState(false);

  const onClick = () => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  const onPointerOver = () => setHovered(true);
  const onPointerOut = () => setHovered(false);

  useFrame((state, delta) => {
    const y = scroll.curve(
      index / urls.length - 1.5 / urls.length,
      4 / urls.length
    );
    easing.damp3(
      ref.current.scale,
      [
        active === index ? 4.7 : (scale as [number, number])[0],
        active === index ? 5 : 4 + y,
        1,
      ],
      0.15,
      delta
    );
    (ref.current.material as ItemMaterial).scale.x = ref.current.scale.x;
    (ref.current.material as ItemMaterial).scale.y = ref.current.scale.y;
    if (active !== null && index < active)
      easing.damp(
        ref.current.position,
        'x',
        (position as [number, number, number])[0] - 2,
        0.15,
        delta
      );
    if (active !== null && index > active)
      easing.damp(
        ref.current.position,
        'x',
        (position as [number, number, number])[0] + 2,
        0.15,
        delta
      );
    if (active === null || active === index)
      easing.damp(
        ref.current.position,
        'x',
        (position as [number, number, number])[0],
        0.15,
        delta
      );
    easing.damp(
      ref.current.material,
      'grayscale',
      hovered || active === index ? 0 : Math.max(0, 1 - y),
      0.15,
      delta
    );
    easing.dampC(
      (ref.current.material as ItemMaterial).color,
      hovered || active === index ? 'white' : '#aaa',
      hovered ? 0.3 : 0.15,
      delta
    );
  });
  return (
    <ThreeImage
      ref={ref}
      position={position}
      scale={scale}
      onClick={onClick}
      onPointerOut={onPointerOut}
      onPointerOver={onPointerOver}
      {...props}
    />
  );
};
