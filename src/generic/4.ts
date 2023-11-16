/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface someInterface {
  name: string;
  
}

class Component<T extends someInterface> {
  constructor(public props: T) {}
}

class Page extends Component<someInterface> {
  pageInfo() {
    console.log(this.props.name);
  }
}
