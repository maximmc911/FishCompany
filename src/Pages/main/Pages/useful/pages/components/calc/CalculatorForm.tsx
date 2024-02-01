import CalcDraw from './CalcDraw/CalcDraw'
import FeedCalculation from './CalcDraw/components/FeedCalculation'

const CalculatorForm = ({ props }: any) => {
  return (
    <>
      {props == `Расчет кормов` ?
        <FeedCalculation />
        : null
      }
      {props == `Создание схемы помещения` ?
        <CalcDraw/>
        : null
      }

    </>
  )
}

export default CalculatorForm