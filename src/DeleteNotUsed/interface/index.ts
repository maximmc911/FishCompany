export interface putForm {
    unit: string;
    nameInput: string;
    meaning: number;
  }

  //! М.б. пригодится
  const [infoUsers, setinfoUsers] = useState <any>([{
    ip: null,
    data: ``,
    time: ``,
    country: ``,
    town: ``,
  }])
/* const nowTime = new Date(); */


async function GetIPUsers() {
  let {data} = await axios.get('https://ipapi.co/json/');
  infoUsers.ip = data.ip;
  infoUsers.country = data.country_name;
  infoUsers.town = data.country_capital;

  
}
infoUsers.data = nowTime.toISOString().slice(0, 10);
infoUsers.time = nowTime.toTimeString().slice(0, 9);
/*   
  GetIPUsers(); */