"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const SpecialBg = () => {

    const [background, setBackground] = useState(false)

    const handleClick = () => {
        const body = document.querySelector('body');
        if (body) {
            setBackground((prevBackground) => !prevBackground);
            body.style.backgroundImage = background ? 'url(/bg-halloween.png)' : 'none';
            // body.classList.add(background ? 'bg-no-repeat' : 'none');
            // body.classList.add(background ? 'bg-cover' : 'none');
        }
    };

    return (
        <div className="flex justify-center items-center">
            <Button onClick={handleClick}>
                <Image src="/pumpkin.png" alt="pumpkin" width={30} height={30}>
                </Image>
            </Button>
        </div>
    )
}

export default SpecialBg