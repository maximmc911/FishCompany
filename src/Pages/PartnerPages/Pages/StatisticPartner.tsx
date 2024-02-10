
import { Bar, Line } from 'recharts'
import LinearGraphics from '../../../components/graphics/LinearGraphics'
import CircularDiagram from '../../../components/graphics/CircularDiagram'
import BarCharts from '../../../components/graphics/BarCharts'
import Tables from '../../../components/table/Table'

const StatisticPartner = () => {
  const example = [

    {
      "month": "Январь",
      category: {

        "uv": 4000,
        "pv": 2400,
        "amt": 2400
      }
    },
    {
      "month": "Февраль",
      category: {

        "uv": 3000,
        "pv": 1398,
        "amt": 2210
      }
    },
    {
      "month": "Март",
      category: {

        "uv": 2000,
        "pv": 9800,
        "amt": 2290
      }
    },
    {
      "month": "Апрель",
      category: {

        "uv": 2780,
        "pv": 3908,
        "amt": 2000
      }
    },
    {
      "month": "Май",
      category: {

        "uv": 1890,
        "pv": 4800,
        "amt": 2181
      }
    },
    {
      "month": "Июнь",
      category: {

        "uv": 2390,
        "pv": 3800,
        "amt": 2500
      }
    },
    {
      "month": "Июль",
      category: {

        "uv": 3490,
        "pv": 4300,
        "amt": 2100
      }
    },
    {
      "month": "Август",
      category: {

        "uv": 3490,
        "pv": 4300,
        "amt": 2100
      }
    },
    {
      "month": "Сентябрь",
      category: {

        "uv": 3490,
        "pv": 4300,
        "amt": 2100
      }
    },
    {
      "month": "Октябрь",
      category: {

        "uv": 3490,
        "pv": 4300,
        "amt": 2100
      }
    },
    {
      "month": "Ноябрь",
      category: {

        uv: 3490,
        pv: 4300,
        amt: 7100
      }
    },
    {
      "month": "Декабрь",
      category: {

        'uv': 13490,
        "pv": 14300,
        "amt": 2100
      }
    },

  ]


  const example2 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];
  for (let index = 0; index < example.length; index++) {
    let obj = {
      month: example[index].month,
      активные: example[index].category.uv,
      архивные: example[index].category.pv,
      выручка: example[index].category.amt,
    }
    example[index] = obj;

  }
  return (
    <>
      <h1 className='p-5 text-2xl'>Статистика заказов и продаж</h1>
      <div className="flex flex-wrap gap-7">
        <div className="">

          <h1 className='p-5 font-semibold'>Опубликованные и снятые с продажи товары и услуги</h1>
          <LinearGraphics data={example}>

            <Line dataKey="активные" className="p-2" stroke="#82ca9d" />
            <Line dataKey="архивные" className="p-2" stroke="#80ca9d" />
          </LinearGraphics>
        </div>
        <div className="">
          <h1 className='p-5 font-semibold'>Категории товаров и услуг в продаже</h1>
          <CircularDiagram data={example2} />
        </div>
      </div>
      <div className="">
        <h1 className='p-5 font-semibold'>Выручка</h1>

        <BarCharts data={example}>
          {/*     <Bar dataKey="category.pv" fill="#8884d8" background={{ fill: '#eee' }} /> */}
          <Bar dataKey="выручка" fill="#82ca9d" />
        </BarCharts>
      </div>
      <div className="">
      <h1 className='p-5 text-2xl'>Статистика заказов и продаж</h1>
      <Tables/>
      </div>
    </>
  )
}

export default StatisticPartner