import { Breadcrumb } from 'antd';

const Breadcrumbmenu = ({pages}: any) => {
  return (
    <>
<Breadcrumb

    separator="|"
    
   items={pages}
   className=''
  />
    </>
  )
}

export default Breadcrumbmenu