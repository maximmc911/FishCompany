import { Breadcrumb } from 'antd';

// Использую как навигационное меню в разделе магазин

const Breadcrumbmenu = ({ pages }: any) => {
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