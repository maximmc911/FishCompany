import { useSelector } from 'react-redux'
import CardItem from '../../../../../components/UI/CardItem/CardItem'
import PaginationControlled from '../../../../../components/UI/Navigation/Pagination/Pagination'

const ShopPages = ({ props }: any) => {
  
  // constants
  // Временное использование данных для проверки работоспособности 
  const fishItem = [
    {
      id: 1,
      name: `барбус`,
      price: 150,
      img: `https://blog.tetra.net/ru/ru/wp-content/uploads/2019/11/sumatranskij-barbus.jpg`,
      description:`Барбусы – неприхотливые в содержании рыбки, они легко приспосабливаются к жизни в аквариумах с самой разной водой. В среднем, предпочитают слабокислую или нейтральную воду, с жесткостью не более 10 dGH.
      Оптимальные параметры для содержания:
      Температура: 20-25°С;
      Кислотность: 6.5-7.5;
      Жесткость: 4-10.
      Необходимый уход за аквариумом с барбусами 
      включает в себя обязательные еженедельные подмены воды (до 20% от объема), чтобы избежать накопления опасных продуктов жизнедеятельности.`,
    },
    {
      id: 2,
      name: `скалярия`,
      price: 350,
      img: `https://blog.tetra.net/ru/ru/wp-content/uploads/2019/09/skalyariya-koi.jpg`,
      description:`Скалярия кои (Pterophyllum scalare) это селекционная форма обыкновенной скалярии, отличительная особенность которой – трехцветная окраска тела (белая, черная и красно-оранжевая). Является одной из самых красивых и востребованных вариаций.

      Среди особенностей содержания породы следует выделить обязательную необходимость кормления рыб кормами с высоким содержанием натуральных каротиноидов, чтобы поддерживать яркость красно-оранжевых пятен, которые особенно ценятся.`,
    },
    {
      id: 3,
      name: `астронотус`,
      price: 1350,
      img: `https://sevaquarium.ru/wp-content/uploads/2015/07/astronotus_ocellatus.jpg`,
      description:`Астронотусы - одни из самых заботливых родителей, они охраняют кладку, вентилируют её, удаляют испорченные икринки. Стайку мальков долго водят за собой, размельчают для них корм, охраняют. Молодые астронотусы часто живут в стае пираний.
      Поведение взрослых рыб иногда даже кажется осознанным, они быстро привыкают к хозяину, узнают его и даже позволяют себя погладить и наоборот - к незнакомым людям часто относятся агрессивно. Рыбы охраняют свою территорию, а укусы их мощных зубов довольно чувствительны.`,
    },
    {
      id: 4,
      name: `акулий бала`,
      price: 8350,
      img: `https://aquascapeclub.com/ru/wp-content/uploads/2023/09/5-17-e1695493199939.jpg`,
      description:`кулий балу довольно крупная рыба. В природе ее тело может достигать размеров 35 см. В аквариуме она, как правило, вырастает до 30 см. Тело продолговатое, торпедообразное, имеет серебристый оттенок. Спина немного темнее, а живот, наоборот, высветлен.
      Спинной плавник высокий, приподнятый. Он, также, как и другие плавники, имеет черные и желтые полосы, которые заканчиваются темной окантовкой. Именно из-за спинного плавника рыбу часто сравнивают с акулой. Глаза большие и полностью адаптированы под постоянный поиск пищи.`,
    },
    {
      id: 5,
      name: `Птегоплихт`,
      price: 850,
      img: `https://sevaquarium.ru/wp-content/uploads/2016/06/Pterygoplichthys-gibbiceps.jpg`,
      description:`Краткое описание: Характерными особенностями являются выступающие ноздри, гребень перед спинным плавником, крупный спинной плавник с 12—13 лучами. Длина первого луча равна длине головы. Взрослые особи вырастают до 55 см в длину и могут жить более 20 лет. Окрас: большие коричневые пятна, разделенные желтоватыми прожилками. Цвет тела и характер узора меняются с возрастом, а у более старых особей исчезают вовсе.

      Особенности: С помощью кровеносной системы своего кишечника может усваивать атмосферный воздух. При нехватке растворённого в воде кислорода они поднимаются к поверхности и заглатывают пузырёк воздуха. Замечательно переживает периоды засухи, закапываясь в речной ил.`,
    },
    {
      id: 6,
      name: `Черноперая акула`,
      price: 158350,
      img: `https://rybkivbanke.ru/wp-content/uploads/2019/08/Shark-Press.jpg`,
      description:`Экзотические хищные рыбы могут заселять не только прибрежные морские воды, но и глубины океанов. Только представьте: в длину тело аквариумной акулы может быть не более 20 сантиметров, а может достигать и более 1,5 м. Особо крупные экземпляры содержатся аквариумистами с богатым опытом, в специализированных прочных аквариумах.
      
      Удивительным фактом является продолжительность жизни этих рыб. Известны случаи, когда акула жила 20 лет в искусственной среде и великолепно себя чувствовала.`,
    },
    {
      id: 7,
      name: `Золотая рыбка`,
      price: 350,
      img: `https://blog.ferplast.com/wp-content/uploads/2020/10/acquario-per-pesce-rosso.jpg`,
      description:`лотые рыбки содержатся людьми в качестве домашних питомцев уже не одно тысячелетие. Но даже за столь длительный срок они совершенно не потеряли своей популярности.

      Все современные золотые рыбки — это селекционные формы, не встречающиеся в природе. Некоторые из пород ближе к природной форме (серебряному карасю) и поэтому более выносливы, другие были настолько видоизменены человеком, что требуют более тщательного ухода.
      
      Все золотые рыбки отличаются крупными размерами тела. Отдельные представители длиннотелых пород могут достигать длины 20-30 см. Поэтому, желая завести золотых рыбок, необходимо обязательно уточнить максимальный размер взрослых особей, чтобы правильно подобрать объем аквариума. Также стоит помнить о том, что золотые рыбки предпочитают держаться небольшими стайками, хотя и одиночное существование их не пугает.`,
    },
    {
      id: 8,
      name: `Карп кои`,
      price: 15350,
      img: `https://pondset.ru/wa-data/public/shop/products/08/01/108/images/2458/2458.970.jpg`,
      description:`Карп Кои- это декоративная разновидность обычного карпа, но Кои может называться та рыба, которая прошла шесть селекционных отборов. Эти рыбки первоначально разводились в Японии. Карпы Кои- наиболее популярный обитатель в современных садовых прудах и частных водоемов. Карп Кои в садовом пруду является очень красивой и привлекательной рыбой. Карп Кои живет практически со всеми обитателями водного мира. Заказать карпа Кои стоит обязательно, многие со временем влюбляются в этих рыбок, придумывают имена и кормят с руки. Карпы Кои не прихотливы к корму и быстро приучаются к человеческим рукам. Среди отличительных особенностей стоит отметить наличие яркого окраса.

      -Наша рыба может зимовать под льдом.
      
      -Желаемая глубина зимовальной ямы от 1,2- 2,5 м.
      
      -Обязательная работа аэратора.
      
      -Дополнительно можно установить теплую лунку для пруда.`,
    },
    {
      id: 9,
      name: `Амфитрион (Рыба-клоун)`,
      price: 1350,
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_n_LdjOecG8ypz-MIg2AFI5BEc5_3xUPWw&usqp=CAU`,
      description:`Отличительная черта окраса – наличие широких поперечных белых полос. Нормальное количество их – 3: на голове, поперёк туловища и у основания хвоста.

      Самцы всегда меньше самок
      Туловище рыбки овальное, приплюснутое по бокам. Голова выпуклая. Радужка глаз оранжевого цвета. Плавники закруглённые и обведены чёрным цветом. Спинной плавник сужается к середине, разграничивая жёсткую и мягкую части.
      
      Существуют и другие цветовые вариации амфиприона, выведенные искусственным путём. Например, допускается слияние белых полос у клоунов «премиум снежинка» и «чёрный лёд». «Голый» оцеллярис вообще не имеет полос, а полуночный практически полностью чёрный.`,
    },
    {
      id: 10,
      name: `Зебрасома Джардини`,
      price: 7350,
      img: `https://moryak.ua/2161-home_default/zebrasoma-veliferum.jpg`,
      description:`Беспозвоночные — многочисленная группа животных, не имеющих позвоночник. Группа настолько многочисленна и до сих пор до конца не изведана — что при заселении морского аквариума просто необходимо знать, кто в нем будет жить, чтоб аквариум со временем не стал полем боя этих животных. В домашнем «море» может обитать более 20 основных отрядов беспозвоночных.

      Беспозвоночные значительно более чувствительны к качеству воды, чем рыбы, а значит, для их содержания понадобится более сложное оборудование.
      
      Доставка и оплата:
      
      доставка по Нижнему Новгороду на индивидуальных условиях
      по регионам - только при заказе на сумму от 10 000 руб (до терминала бесплатно)
      оплата наличным и безналичным расчетом.`,
    },
  ]

  
  return (
    <>

      <div className="p-5 text-2xl text-center">

        {props}
      </div>
      <div className="flex flex-wrap gap-4">
{
  fishItem.map((e)=>(
    <div className="" key={e.id}>      
      <CardItem props={e}/>
    </div>
  ))
}

      </div>
      <PaginationControlled />
    </>
  )
}

export default ShopPages