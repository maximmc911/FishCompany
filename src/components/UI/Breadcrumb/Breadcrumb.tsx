
import { Breadcrumb } from 'antd';

const Breadcrumbmenu = () => {
  return (
    <>

<Breadcrumb
    separator=">"
    items={[
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'Application Center',
        href: '/',
      },
      {
        title: 'Application List',
        href: '/',
      },
      {
        title: 'An Application',
        href: '/',
      },
    ]}
  />
    </>
  )
}

export default Breadcrumbmenu