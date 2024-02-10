[назад](../developer_documentation.md)

# src/components/

## 1. [exampleData](../../src/components/exampleData)

1. ### riverFish

 * Располагается массив объектов ```riverFish``` с техническими характеристиками условий содержания и выращивания рыбы в УЗВ.
 * Располагается массив объектов ```selectQuarters``` для заполнения select в разделе калькулятор.

2. ### textInput
 * Располагается массив объектов ```textInput``` для заполнения input в разделе калькулятор

## 2. [footer](../../src/components/footer)
Cоздан общий footer, который использован в корневом [```App.tsx```](../../src/App.tsx) и отображается абсолютно на всех страницах


## 3. [graphics](../../src/components/graphics)

При создании графиков использована библиотека компонентов [Recharts](https://recharts.org/en-US) 

Компоненты возможно переиспользовать по принципу DRY

1. ### LinearGraphics
Построение линейного графика для визуализации информации. Универскальный компонент, для передачи необходимых данных в компонент используется пропс ```data``` и ```children``` .


```
Объекты в массиве должны иметь следующую структуру (Пример):

  
    {
        "month": "Январь",
        category:{
          
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        }
    },



```
Пример заполнения ```children``` :
```
    <LinearGraphics data={example}>


    <Line dataKey="category.pv" className="p-2" stroke="#8884d8" />
      <Line dataKey="category.uv" className="p-2" stroke="#82ca9d" />
      <Line dataKey="category.amt" className="p-2" stroke="#80ca9d" />


    </LinearGraphics>
```  
Создано две версии графика:
* горизонтальная для desktop экранов ``` {/* desktop */} ```
*  вертикальная для мобильной версии ```     {/* mobile */} ```

**Для корректного отображения у русскоговорящего пользователя необходимо проитерировать массив объектов с добавлением ключ-значение в объекты, где ключ будет написан на кириллице**
```
for (let index = 0; index < example.length; index++) {
  let obj ={
    month : example[index].month,
    активные: example[index].category.uv,
    архивные: example[index].category.pv,
  }
  example[index] = obj;
  
}
```

2. ### CircularDiagram
Построение круговой диаграммы  для визуализации информации. Универскальный компонент, для передачи необходимых данных в компонент используется пропс ```data```

```
Объекты в массиве должны иметь следующую структуру (Пример):
    { 
        name: "Group A", 
        value: 400 
    }

```

3. ### BarChart
 Логика использования данного вида графика аналогична с **LinearGraphics** , см. инструкцию в разделе **graphics** п.1





## 4. [navbar](../../src/components/navbar)
## 5. [pushImage](../../src/components/pushImage)
## 6. [randomGenerator](../../src/components/randomGenerator)
## 7. [table](../../src/components/table)
Компонент был интегрирован из библиотеки ```Ant design```

Включает в себя: 
* Корректировку данных
* Пагинация
* Модальное окно подтверждение отмены
* Валидация 
в случае некорректного введения данных и блокировка отправки данных
```
 const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields()) as Item;
            console.log(row);

            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };
```

Пример заполнения названий колонок:
```
 const columns = [
    {
        title: '№', (Название колонки)
        dataIndex: 'address', (ключ к значению данных)
        width: '40%', (ширина колонки)
        editable: false, (возможность редактирования информации)
      },
      ............
 ]
```
Типизация данных, которыми заполняется таблица 
```
interface Item {
    key: string;
    name: string;
    age: number;
    address: string;
}
```
Типизация данных для формирования колонок
```
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
}
```
В качестве примера создан массив объектов
```
const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
    originData.push({
        key: i.toString(),
        name: `Edward ${i}`,
        age: 2 * i,
        address: `Наименование  ${i + 1}`,
    });
}
``` 