export function conrolBtn(params:string) : string  {
    let style : string;
    switch (params) {
      case `Удалить`:
          style = `danger`
          break;
      case `Зарегистрироваться`:
          style = `registr`
          break;
      case `Войти`:
          style = `login`
          break;
      case `Купить`:
          style = `buy`
          break;
      case `Отправить`:
          style = `sent`
          break;
    
      default:
          style = `other`
          break;
    }
    return style
}