[назад](../developer_documentation.md)

# UI components

## 1. [Button](../../src/components/UI/Button)
Пропсом ```NameBTN``` передаем слово, которое должно фигурировать в кнопке
```javascript
export const Button = ({ nameBTN }: any) => {

  return (
    <>
      <button className={conrolBtn(nameBTN)}> {nameBTN}</button>
    </>
  )
}
```
Присвоение названий классов стилей кнопке происходит при помощи ```function conrolBtn```
```
export function conrolBtn(params: string): string {
    
  let style: string;
  switch (params) {
    case `Удалить`:
      style = `danger`;
      break;
    case `Зарегистрироваться`:
      style = `registr`;
      break;


        .......

    default:
      style = `other`;
      break;
  }
  return style;
}
```
Классы стилей описываются в файле [style.css](../../src/components/UI/Button/style.css)


## 2. [CardItem](../../src/components/UI/CardItem/)

Создание карточек товаров. <br> 

Пропсом ```props``` передаем объект, которым заполняем поля карточек

```
const CardItem = ({props}: any) => {
    ...........
    return (
    <>
    ..........
    </>
  )
}
export default CardItem
```
```props``` должен содержать следующие входные параметры:
```
{
    name: string,
    id: number,
    price: number,
    quantity: number,
    description: string,
}
```
В компонент карточка интегрирована модальное окно, которое используется в связке только с этим компонентом

```
  <Modal
        title="Описание"
        open={modal}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Понятно"
        okType='default'
      >
        <p>{props.description}</p>
      </Modal>
```

