[назад](../developer_documentation.md)

# src/components/UI

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

<br>

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
На данный момент в компоненте представлены две версии модального окна 
1) версия:
```
  const [modal, contextHolder] = Modal.useModal();
 const OpenModal = () => {

    const instance = modal.info({
      title: 'Описание',
      content: `${props.description}`,
      okText:"Понятно",
  
    });
 }
 .......................
     <p className="pt-5 underline cursor-pointer" onClick={OpenModal} >Подробнее</p>

```
2) версия (закомментирована в конце компонента)
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
<br>

## 3. [Feedback](../../src/components/UI/feedback/)
В компоненте реализована обратная связь для незарегистрированных пользователей сайта и используется на общедоступных страницах сайта.

Для принятия корректной информации от пользователя используется
```react-hook-form``` и ```zod``` валидация
```
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

......................

const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(SubmitQuestion),
  });

```
После заполнения всех форм данные передаются в функцию ```onSubmit```, которая заполняет константу ```Questions``` 
```
  const [Questions, setQuestions] = useState<FormData>({
    nameUser: ``,
    tel: ``,
    email: ``,
    questions: ``,
  })
 const onSubmit = (data: FormData) => {
    Questions.nameUser = data.nameUser,
      Questions.tel = data.tel,
      Questions.email = data.email,
      Questions.questions = data.questions,
      setOpenChapcha(true);
  };
```
и запускает функцию  ```setOpenChapcha(true)```, которая 
контроллирует показ компонента ```RandomGenerator``` [документация компонента](./components.md)  
```
 <div className="flex justify-center m-5">

                <RandomGenerator>
                  <div className="" onClick={() => HandleCheckCapcha()}>
                    <Button nameBTN={`Отправить`} />
                  </div>
                </RandomGenerator>
              </div>
```
Формы для обратной связи представлены в виде функционального компонента. Подробная информация представлена в **пункте №4**
```
 <FormField
                    type="text"
                    placeholder="Ваше Ф.И.О"
                    name="nameUser"
                    register={register}
                    error={errors.nameUser}
                  />
```
Расположение компонента устанавливается ```position: fixed``` <br>
Более подробно со стилями можно ознакомиться в файле [index.module.css](../../src/components/UI/feedback/index.module.css)

## 4. [formField](../../src/components/UI/formField)
Функциональный компонент принимает в себя следующие пропсы:<br>
```type``` , ```placeholder``` , ```name``` , ```register``` ,```error``` , ```valueAsNumber``` . <br>
Типизация данных осуществляется при помощи ```interface FormFieldProps``` [см. interfaces/validationform](./src4doc.md)

Пропсы передаются в форму. Стиль формы задается в файле [style.css](../../src/components/UI/formField/style.css)
```
<input
    className='input'
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />
    {error && <span className="text-red-600">{error.message}</span>}
    
```

## 5. [icons](../../src/components/UI/icons)
В компонент добавлены все иконки, которые используются в проекте для удобства использования. <br>
Компонент принимает в себя следующие пропсы:
* ```props``` - название иконки
* ```color``` - цвет иконки
* ```size``` - размер иконки (на данный момент нигде не используется, планируется введение после code review)

Иконки берутся из приложения [```react-icons```](https://react-icons.github.io/react-icons/)


## 6. [Input](../../src/components/UI/Input)
Компонент, который используется исключительно в разделе калькулятор, для предоставления возможности ввода пользователем необходимых данных.
Компонент создан при помощи:
```
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
```
Принимает пропс ```idText```, который передается в функцию [```WriteForm(idText)```](../../src/components/UI/Input/InputText.ts) . После получения корректного значения в пропсе функция итерирует
массив объектов [``` textInput```](../../src/components/exampleData/textInput.ts), в котором содержатся все необходимые данные для заполнения формы input и возвращает массив, в котором содержится объект со следующими данными:
* id 
* nameInput - название инпута
* placeholder - подсказка в placeholder
* unit - единица измеремения, в котором принимаются значения от пользователя для корректного расчета

В случае, если некорректно будет передан пропс в компонент во время разработки, форма примет следующий вид c характерной надписью:
```
      <p className='w-48 p-3 bg-red-400 rounded-sm'>При разработке допущена ошибка</p>
```

## 7. [modal](../../src/components/UI/modal)
Универсальная функция модального окна, созданная при помощи 
```
import Modal from '@mui/material/Modal';
```
принимающая пропсы:
* ```open``` - открытие модального окна
* ```onClose``` - закрытие модального окна
* ```children``` - наполнение модального окна контентом
Стиль модального окна  создан классом```style``` , который описан в файле [```index.css```](../../src/components/UI/modal/index.css)

## 8. [Navigation](../../src/components/UI/Navigation)
1. ### [Breadcrumb](../../src/components/UI/Navigation/Breadcrumb)
Создан при помощи библиотеки:
```
import { Breadcrumb } from 'antd';
```
и выполняет роль меню на страницах с большим объемом информации. Универсальный компонент
Принимает пропс ``` pages ``` в который необходимо передать массив объектов следующего содержания:
* Ссылка на дочерний роутинг на странице
* Название ссылки

Пример:
```
[
    { title: <NavLink to='/shop'>Хиты продаж</NavLink> },
  ]
```

1. ### [Pagination](../../src/components/UI/Navigation/Pagination)
Универсальная функция пагинации, созданная при помощи библиотеки
```
import Pagination from '@mui/material/Pagination';
```

## 9. [Select](../../src/components/UI/Select)
Компонент созданный при помощи библиотеки компонентов ```@mui/material```

Используется только в разделе калькулятор. 

Пропс ```props``` может получить только одно из двух значений: ```fish``` или  ```quarters``` , после чего передает полученное значение в функцию [```HandleSelestCalc(props) ```](../../src/components/UI/Select/index.ts). После получения корректного значения в пропсе, функция итерирует
массив объектов в зависимости от значения,
```
import { riverFish, selectQuarters } from "../../exampleData/riverFish.ts";
```
в которых содержатся все необходимые данные для заполнения формы и возвращает массив, в котором содержатся следующие данные согласно индексу элемента в массиве
* 0 - название select'a
* 1 - label select'a
* 2 - массив объектов  со следующими даными:
    ```
  { 
      feed_ratio : number, 
      growing_time : number, 
      id : number, 
      name: string,
      sales_weight : number,
      stocking_density : number,
      temperature : number, 
  }
     ````
 Полученные в селекте данные передаются в константы ```ResultFish``` или
```ResultQuarters``` в зависимости от данных, которые были переданы пропсом