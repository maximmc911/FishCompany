
const ReadingLib = ({ text }: any) => {
  console.log(text);

  return (
    <>
      <div className='text-center'>
        <h1 className='p-4 text-xl font-medium'>{text.name}</h1>
        <p>{text.text}</p>

      </div>
    </>
  )
}

export default ReadingLib