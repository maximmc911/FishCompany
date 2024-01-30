import FeedCalculation from './CalcDraw/components/FeedCalculation'

const CalculatorForm = ({ props }: any) => {
  return (
    <>
      {props == `Расчет кормов` ?
        <FeedCalculation />
        : null
      }

    </>
  )
}

export default CalculatorForm