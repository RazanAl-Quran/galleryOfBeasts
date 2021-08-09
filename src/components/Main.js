import React from 'react';
import HornedBeast from './HornedBeast';
import hornsData from './hornsData.json'


class Main extends React.Component {
  render(){
    return(
      <>
        {hornsData.map((item,idx)=>{
            return (
                <HornedBeast
                
                    title={item.title}
                    imgUrl={item.image_url}
                    description= {item.description}
                />
            )
        })}
      </>
    )
  }
}

export default Main;


  {/* <HornedBeast
            title={'UniWhal'}
            imgUrl={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'}
            description='A unicorn and a narwhal nuzzling their horns'
        />
        <HornedBeast
            title={'aaaaaaaaaaa'}
            imgUrl={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'}
            description='A unssssssssssssssssssss'
        /> */}