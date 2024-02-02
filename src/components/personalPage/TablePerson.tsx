import { Table } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
const columns = [
  {
    title: 'Дата',
    dataIndex: 'data',
    key: 'data',
  },
  {
    title: 'Время',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'IP',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: 'Местонахождение',
    dataIndex: 'address',
    key: 'address',
  },
];

const dataSource = [];
const TablePerson = () => {
  const [Open, setOpen] = useState(false)
  const nowTime = new Date();

  const infoUsers = {};
infoUsers.key = '1';
infoUsers.data = nowTime.toISOString().slice(0, 10);
infoUsers.time = nowTime.toTimeString().slice(0, 9);
if (!Open) {
  GetIPUsers();
}
async function GetIPUsers() {
  try {
    let {data} = await axios.get('https://ipapi.co/json/');
    infoUsers.ip = data.ip;
    
    infoUsers.address = data.city;
    dataSource.push(infoUsers) 
    setOpen(true)
  } catch (error) {
    console.log(error);
    
  }


  
}

  return (
    <div className='w-96'>
      <h1 className='p-2'>История посещения личного кабинета</h1>
      {Open ? 
<Table dataSource={dataSource} columns={columns} />
:null

      }

    </div>
  )
}

export default TablePerson