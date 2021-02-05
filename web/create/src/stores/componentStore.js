import { observable } from "mobx";
class ComponentStore {
  //当前组件
  @observable currentComponent = "";

  setCurrentComponent(currentComponent) {
    this.currentComponent = currentComponent;
  }
}
const componentStore = new ComponentStore();
export default componentStore;
