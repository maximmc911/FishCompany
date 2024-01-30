

const DrawFigure = ({ height, width }: any) => {

  return (
    <>
      <p className='border border-black border-1' style={{ height: height + `px`, width: width + `px` }}></p>
    </>
  )
}

export default DrawFigure