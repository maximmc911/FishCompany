import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
const LinearGraphics = ({ data, children }: any) => {



  return (
    <>
      {/* desktop */}
      <div className="flex max-sm:hidden">
        <LineChart width={980} height={250} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          {children}


        </LineChart>
      </div>
      {/* mobile */}
      <div className="hidden max-sm:flex">
        <LineChart
          layout="vertical"
          width={300}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="month" type="category" />
          <Tooltip />
          <Legend />
          {children}

        </LineChart>
      </div>
    </>
  )
}

export default LinearGraphics