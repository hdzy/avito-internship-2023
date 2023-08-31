# Интерфейс, разработанный по техническому заданию [avito.tech](https://github.com/avito-tech/frontend-trainee-assignment-2023)

## Используйте команду `npm start`, чтобы запустить приложение

###### Эта команда запустит сервер на Node.js и express для инкапсуляции запросов к серверу и обхода CORS _(порт 3000)_ 
###### А также React-приложение (порт 3001)

## Функционал приложения

* ### Получение данных об играх со стороннего [API](https://www.freetogame.com/api-doc) через Node.js сервер
* ### Реализация медленной загрузки, при достижении пользователем последнего загруженного элемента подгружаются следующие игры
_К сожалению, на изначальном API нет возможности запросить определённые слайсы данных, поэтому на Node.js происходит загрузка всех данных и на Фронт отправляется лишь часть для реализации частичной подгрузки данных, хотя по скорости загрузки такое решение не даст сильного прироста_

### Общее
* #### UI
  * LoadingElement <br>
  Компонент с анимацией загрузки, как пропсы принимает высоту, ширину, скругление и внешний отступ сверху
  <br>
  * Menu<br>
  Компонент меню, как пропсы принимает элементы меню, action, который вызовется при выборе пункта меню и стандартное значение 
  <br>
  * Slider<br>
  Компонент слайдера, как пропсы принимает массив ссылок на картинки
### Главная страница
* #### Фильтрации по
  * Платформе
  * Популярности, Актуальности, Дате релиза, Алфавиту
  * По тегам
  #### А также кастомная (не предусмотренная API) фильтрация порядка (по убыванию/возрастанию)

* #### Карточки содержат
  * Название
  * Дату релиза (преобразованную в российский формат)
  * издателя
  * жанр
  * картинку
#### При клике на карточку происходит переход на страницу игры
### Страница игры
* #### При переходе на страницу игры, данные об игре сохраняются в sessionStorage, при этом добавляется поле timer равное текущему времени в миллисекундах (от 1970) плюс 5 минут
_Каждую минуту происходит проверка sessionStorage на наличие «устаревших» игр, такие игры удаляются_<br><br>
_Выбрал именно sessionStorage поскольку, сохранять данные после закрытия вкладки не имеет смысла (как в localStorage), поскольку объект будет храниться до последующего открытия этой вкладки (после прошествия 5 минут) или до очистки кеша_<br><br>
_Использование Cookie будет нагружать запросы на сервер, поскольку они автоматически будут отправляться в заголовке_

#### Если данные об игре уже в хранилище, при заходе на страницу этой игры таймер обновится

# Стек технологий, используемых в проекте
* ## Frontend
  * ### React 18.2.0
  * ### Redux 4.2.1
  * ### Typescript 4.9.5
  * ### React Icons 4.10.1
  * ### Axios 1.4.0
  * ### Ant Design 5.8.5
  * ### React Router 6.15.0
  
* ## Сервер
  * ### Node.js
  * ### Express
  
* ## Дополнительно
  * ### concurrently 8.2.1
  _Для запуска сервера и React-приложения одной командой_
