import { Component } from "../core/component"

export class NavigationComponent extends Component {
  constructor(id) {
    super(id)

    this.tabs = [] //создание массива для табов вкладок
  }

  init() {
    this.$el.addEventListener('click', tabClickHandler.bind(this)) // создание обработчика клика по табу в навигации
  }

  registerTabs(tabs) {
    this.tabs = tabs // регистрация табов
  }
}

function tabClickHandler(event) {
  event.preventDefault() // Отмена хэша в строке браузера
  if (event.target.classList.contains('tab')) {
    Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
      tab.classList.remove('active')
    }) // забираем все А (табы) в массив со всеми табами и удаляем из них класс эктив
    event.target.classList.add('active')

    const activeTab = this.tabs.find(t => t.name === event.target.dataset.name) // сравнения совпадения названия вкладки с дата неймом ссылки 
    this.tabs.forEach(t => t.component.hide()) //скрываем дивы вкладок
    activeTab.component.show() // показываем див активной вкладки
  }
}