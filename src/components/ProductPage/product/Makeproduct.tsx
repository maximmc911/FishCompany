import React, { useState } from 'react'
import PushImage from '../../pushImage/pushImage'
import { InputAdornment, MenuItem, Select, TextField } from '@mui/material'
import { Button } from '../../UI/Button/Button'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const Makeproduct = () => {
  const [NameProduct, setNameProduct] = useState()
  const [PriceProduct, setPriceProduct] = useState()
  const [QualutyProduct, setQualutyProduct] = useState()
  const [CategoryProduct, setCategoryProduct] = useState()
  const [AboutProduct, setAboutProduct] = useState()

  const CreatProduct = {
    nameProduct: '',
    priceProduct: null,
    qualutyProduct: null,
    categoryProduct: ``,
    aboutProduct: ``,
  }
  const HandleSentProduct = (): void => {
    CreatProduct.nameProduct = NameProduct;
    CreatProduct.priceProduct = PriceProduct;
    CreatProduct.qualutyProduct = QualutyProduct;
    CreatProduct.categoryProduct = CategoryProduct;
    CreatProduct.aboutProduct = AboutProduct;

    console.log(`-----------Отправка на сервер----------------`);
    console.log(CreatProduct);

  }


  return (
    <>
      <div className="flex justify-center">
        <div className=" flex flex-col  bg-slate-100 shadow-xl  w-3/4 p-2 ">
          <div className="flex justify-center flex-wrap gap-12 items-center ">
            <div className="flex-wrap flex gap-8">
              <div className="pr-10">
                <PushImage />
              </div>
              <div className="flex flex-col gap-4">
                <TextField
                  className='w-80'
                  label="Название"
                  variant="standard"
                  color="success"
                  focused
                  value={NameProduct}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNameProduct(event.target.value)}
                />
                <div className="">

                  <FormControl variant="standard" fullWidth>
                    <InputLabel id="demo-simple-select-standard-label" color="success">Категория</InputLabel>
                    <Select
                      color="success"

                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"

                      value={CategoryProduct}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCategoryProduct(event.target.value)}

                    >
                      <MenuItem value={`Не выбрано`}>Не выбрано</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <TextField
                label="Цена"
                variant="standard"
                color="success"
                focused
                value={PriceProduct}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPriceProduct(event.target.value)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">₽</InputAdornment>,
                }}
              />
              <TextField
                className=''
                label="Количество в наличии"
                variant="standard"
                color="success"
                InputProps={{
                  endAdornment: <InputAdornment position="end">шт.</InputAdornment>,
                }}
                focused
                value={QualutyProduct}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQualutyProduct(event.target.value)}
              />

              <TextField
                className='w-full '
                color="success"
                id="outlined-multiline-static"
                label="Описание товара"
                multiline
                rows={4}
                value={AboutProduct}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAboutProduct(event.target.value)}

              />
            </div>
          </div>
          <div className="flex justify-end p-5" onClick={HandleSentProduct}>

            <Button nameBTN={`Опубликовать товар`} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Makeproduct