"use client";

import 'photoswipe/dist/photoswipe.css';

import { Gallery, Item } from 'react-photoswipe-gallery';

const MyGallery = () => (
    <Gallery>
        <Item
            original='https://placehold.co/1024x768'
            thumbnail='https://placehold.co/80x60'
            width={1024}
            height={768}
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src='https://placehold.co/80x60' />
            )}
        </Item>
        <Item
            original='https://placehold.co/1024x768'
            thumbnail='https://placehold.co/80x60'
            width={1024}
            height={768}
        >
            {({ ref, open }) => (
                <img ref={ref} onClick={open} src='https://placehold.co/80x60' />
            )}
        </Item>
    </Gallery>
);

export default function Home() {
    return (
        <main>
            <MyGallery />
        </main>
    );
}