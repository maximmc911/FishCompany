import { useState } from 'react'
import './style.css'
import DrawFigure from './components/DrawFigure'
import DrawCircle from './components/DrawCircle';

const CalcDraw = () => {
  const [first, setfirst] = useState<boolean>(false);
  const room_dimensions: Array<number> = [960, 820];
  const arrayRepeat: Array<Number> = [];
  let width: number = 150;
  let height: number = 150;
  let result: number;

  const handleDraw = (): void => {
    setfirst(!first)
  }

  if (((width > 0) && (height > 1)) || (width == height)) {

    console.log(`111`);

    result = Math.floor((room_dimensions[0] - 24) / (width + 16)) * Math.floor((room_dimensions[1] - 24) / (height + 16));
    for (let index = 0; index < result; index++) {
      arrayRepeat.push(1)
    }

  } else {
    result = Math.floor((room_dimensions[0] - 24) / (width + 16)) * Math.floor((room_dimensions[1] - 24) / (width + 16));
    for (let index = 0; index < result; index++) {
      arrayRepeat.push(1)
    }

  }








  return (
    <>
      <div className="flex" >
        <div className="flex items-center ">
          <p className='rotate-[270deg]'>Длина помещения: {room_dimensions[1]} m</p>
          <div className="">
            <button onClick={handleDraw} className='bg-red-400'>нарисовать</button>
            <p className='pb-10 text-center'>Ширина помещения: {room_dimensions[0]} m</p>
            <div className='border-4 border-black ' style={{ width: room_dimensions[0] + 'px', height: room_dimensions[1] + `px` }} >
              {first ?
                (<div className="flex flex-wrap p-3" style={{ gap: 16 + `px` }}>
                  {(height > 1) ?
                    (arrayRepeat.map(() => <DrawFigure width={width} height={height} />)) :
                    (arrayRepeat.map(() => <DrawCircle width={width} />))
                  }

                </div>)
                : null}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CalcDraw