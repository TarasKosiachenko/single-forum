import React from 'react';
import '../CarouselBox/index.css'
import Carousel from 'react-bootstrap/Carousel';

import mount from './assets/1_mount.jpg'
import desert from './assets/2_desert.jpg'
import palm from './assets/3_palm.jpg'
import wheat from './assets/4_wheat.jpg'
import house from './assets/5_house.jpg'

export default function CarouselBox() {
    return (
      <Carousel>
          <Carousel.Item className='carousel_home'>
              <img className='d-block w-100' src={ mount } alt="mount" />
              <Carousel.Caption>
                <h3>Mount Image</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis.</p>
              </Carousel.Caption>
          </Carousel.Item >
          <Carousel.Item className='carousel_home'>
              <img className='d-block w-100' src={ desert } alt="desert" />
              <Carousel.Caption>
                <h3>Desert Image</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel_home'>
              <img className='d-block w-100' src={ palm } alt="palm" />
              <Carousel.Caption>
                <h3>Palm Image</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel_home'>
              <img className='d-block w-100' src={ wheat } alt="wheat" />
              <Carousel.Caption>
                <h3>Wheat Image</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel_home'>
              <img className='d-block w-100' src={ house } alt="house" />
              <Carousel.Caption>
                <h3>House Image</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis.</p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    );
}