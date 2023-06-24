import React, { useEffect, useMemo } from 'react'
import Slider, { SlideI } from '../components/Slider'
import imgae from './../road220058.jpeg'
import Row from '../components/Row';
import Column from '../components/Column';
import { Link } from 'react-router-dom';
export default function Home() {



    const mockdata:SlideI[]=[
        {
            titleS:"Lorem Ipsum ",
            img:imgae,
            descrione:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
            height:"550px"
        },
        {
            titleS:"Lorem Ipsum ",
            img:imgae,
            descrione:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
            height:"550px"
        },
        {
            titleS:"Lorem Ipsum ",
            img:imgae,
            descrione:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
            height:"550px"
        },
        {
            titleS:"Lorem Ipsum ",
            img:imgae,
            descrione:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
            height:"550px"
        },
        {
            titleS:"Lorem Ipsum ",
            img:imgae,
            descrione:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
            height:"550px"
        }

    ]
        
    


    const [width, setWidth] = React.useState(window.innerWidth);

    const widhtWindow=useMemo(() => {
        /* Inside of a "useEffect" hook add an event listener that updates
           the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return width
        /* passing an empty array as the dependencies of the effect will cause this
           effect to only run when the component mounts, and not each time it updates.
           We only want the listener to be added once */
      }, [width]);






  return (<>
            <Slider
            title={""}
            descrione={''}
            slides={mockdata}
            windowWidth={widhtWindow}
            />


        <Row >
          <Column height={"400px"} width={null}>
          
          <h2>Hai bisogno dell’APE?</h2>
          <div className='button'>
          <Link to="/">Richiedi L'APE</Link>
          </div>
          </Column>


        </Row>


        <Row >
          <Column height={"400px"} width={null}>
          
          <h2>Hai bisogno di Assistennza</h2>
          <div className='button'>
            chiama il 
          <Link to="/">3516190403</Link>
          </div>
          </Column>


        </Row>


            
    </>
  )
}
