import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CalculatorForm from './components/calc/CalculatorForm';
import { useState } from 'react';
const Calculation = () => {
  // constants
  const [value, setValue] = useState<string>(`Расчет кормов`)

  // Временное использование данных для проверки работоспособности 
  const menuRadioBtn: Array<string> = [`Полный расчет УЗВ`, `Расчет кормов`, `Расчет Биозагрузки`, `Расчет Рентабельности предприятия`,
    `Создание схемы помещения`]

  console.log(value);
  // functions
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <>
      <div className="m-2">
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Расчеты</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            {
              menuRadioBtn.map((value: string, index: number) => (
                <FormControlLabel value={value} control={<Radio />} label={value} key={index} />

              ))
            }

          </RadioGroup>
        </FormControl>

        <div className="">
          <CalculatorForm props={value} />
        </div>
      </div>
    </>
  )
}

export default Calculation