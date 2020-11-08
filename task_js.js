//-  Створити функцію конструктор для об'єкту який описує теги
//Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
 //Кожен атрибут описати як окремий який буде містити
 //-назву атрибуту
 //-опис дії атрибуту
 //інформацію брати з htmlbook.ru

 //Таким чином описати теги
 //-a
 //-div
 //-h1
 //-span
 //-input
 //-form
 //-option
 //-select
 //Приклад результату
 /*
   {
        titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
        attrs: [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
        {/*some props and values*/
        //},
        //{/*...*/},
        //{/*...*/},
        //]

   //}
/*
function TagFromFunc(titleOfTag, action, attrs){
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;
}
*/

/*
let titleA = '<a>';
let actionA = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
let atribA = [{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
            {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
            {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'} 
        ];


let a = new TagFromFunc(titleA, actionA, atribA);
console.log(a) ;
*/

/*
let titleDiv = '<div>';
let actionDiv = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора..';
let atribDiv = [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
            {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
            ];

 let div = new TagFromFunc(titleDiv, actionDiv, atribDiv)   ;
 console.log(div);         
*/


/*
 let titleH1 = '<h1>';
 let actionH1 = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.';
 let atribH1 = [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
             {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
             ];
 
  let h1 = new TagFromFunc(titleH1, actionH1, atribH1)   ;
  console.log(h1);  
*/

  /*
 let titleSpan = '<span>';
 let actionSpan = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
 let atribSpan = [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
             {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
             ];
 
  let span = new TagFromFunc(titleSpan, actionSpan, atribSpan)   ;
  console.log(span);  
*/


/*
  let titleInput = '<input>';
  let actionInput = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.';
  let atribInput = [{titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов..'},
              {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
              {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.'},
              {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.'},
              {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает или отключает автозаполнение'},
              {titleOfAttr: 'border', actionOfAttr: 'Толщина рамки вокруг изображения.'},
              {titleOfAttr: 'checked', actionOfAttr: 'Предварительно активированный переключатель или флажок.'},
              {titleOfAttr: 'disablad', actionOfAttr: 'Блокирует доступ и изменение элемента.'},
              {titleOfAttr: 'form', actionOfAttr: 'Связывает поле с формой по её идентификатору.'},
              {titleOfAttr: 'formaction', actionOfAttr: 'Определяет адрес обработчика формы.'},
              {titleOfAttr: 'formenctype', actionOfAttr: 'Устанавливает способ кодирования данных формы при их отправке на сервер'},
              ];
  
   let input = new TagFromFunc(titleInput, actionInput, atribInput)   ;
   console.log(input);
*/

/*
   let titleForm = '<form>';
   let actionForm = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению..';
   let atribForm = [{titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные..'},
               {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы'},
               {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы.'},
               {titleOfAttr: 'enctype', actionOfAttr: 'Способ кодирования данных формы..'},
               {titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP.'},
               {titleOfAttr: 'name', actionOfAttr: 'Имя формы.'},
               {titleOfAttr: 'novalidate', actionOfAttr: 'Отменяет встроенную проверку данных формы на корректность ввода.'},
               {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'},
               ];
   
    let form = new TagFromFunc(titleForm, actionForm, atribForm)   ;
    console.log(form);
*/

    
    /*
    let titleOption = '<option>';
    let actionOption = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты..';
    let atribOption = [{titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка..'},
                {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы'},
                {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
                {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
                ];
    
     let option = new TagFromFunc(titleOption, actionOption, atribOption)   ;
     console.log(option);
    */

     
     /*
     let titleSelect = '<select>';
     let actionSelect = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты..';
     let atribSelect = [{titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
                 {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
                 {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'},
                 {titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'},
                 {titleOfAttr: 'multiple', actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.'},
                 {titleOfAttr: 'name', actionOfAttr: 'Имя элемента для отправки на сервер или обращения через скрипты.'},
                 {titleOfAttr: 'required', actionOfAttr: 'Список обязателен для выбора перед отправкой формы.'},
                 {titleOfAttr: 'size', actionOfAttr: 'Количество отображаемых строк списка.'},
                 {titleOfAttr: 'tabindex', actionOfAttr: 'Определяет последовательность перехода между элементами при нажатии на клавишу Tab'},
                 ];
     
      let select = new TagFromFunc(titleSelect, actionSelect, atribSelect)   ;
      console.log(select);
*/
//==============================================

// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }


/*
class Tag{
    constructor(titleOfTag, action, atrrs ){
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.atrrs = atrrs;
    }
}
*/
/*
let titleA = '<a>';
let actionA = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
let atribA = [{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
            {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
            {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл'} 
        ];


let a = new Tag(titleA, actionA, atribA);
console.log(a) ;
*/

/*
let titleDiv = '<div>';
let actionDiv = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора..';
let atribDiv = [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
            {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
            ];

 let div = new Tag(titleDiv, actionDiv, atribDiv)   ;
 console.log(div);         
*/


/*
 let titleH1 = '<h1>';
 let actionH1 = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.';
 let atribH1 = [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
             {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
             ];
 
  let h1 = new Tag(titleH1, actionH1, atribH1)   ;
  console.log(h1);  
*/

  /*
 let titleSpan = '<span>';
 let actionSpan = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
 let atribSpan = [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
             {titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
             ];
 
  let span = new Tag(titleSpan, actionSpan, atribSpan)   ;
  console.log(span);  
*/


/*
  let titleInput = '<input>';
  let actionInput = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.';
  let atribInput = [{titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов..'},
              {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
              {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.'},
              {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.'},
              {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает или отключает автозаполнение'},
              {titleOfAttr: 'border', actionOfAttr: 'Толщина рамки вокруг изображения.'},
              {titleOfAttr: 'checked', actionOfAttr: 'Предварительно активированный переключатель или флажок.'},
              {titleOfAttr: 'disablad', actionOfAttr: 'Блокирует доступ и изменение элемента.'},
              {titleOfAttr: 'form', actionOfAttr: 'Связывает поле с формой по её идентификатору.'},
              {titleOfAttr: 'formaction', actionOfAttr: 'Определяет адрес обработчика формы.'},
              {titleOfAttr: 'formenctype', actionOfAttr: 'Устанавливает способ кодирования данных формы при их отправке на сервер'},
              ];
  
   let input = new Tag(titleInput, actionInput, atribInput)   ;
   console.log(input);
*/

/*
   let titleForm = '<form>';
   let actionForm = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению..';
   let atribForm = [{titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные..'},
               {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы'},
               {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей формы.'},
               {titleOfAttr: 'enctype', actionOfAttr: 'Способ кодирования данных формы..'},
               {titleOfAttr: 'method', actionOfAttr: 'Метод протокола HTTP.'},
               {titleOfAttr: 'name', actionOfAttr: 'Имя формы.'},
               {titleOfAttr: 'novalidate', actionOfAttr: 'Отменяет встроенную проверку данных формы на корректность ввода.'},
               {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'},
               ];
   
    let form = new Tag(titleForm, actionForm, atribForm)   ;
    console.log(form);
*/

    
    /*
    let titleOption = '<option>';
    let actionOption = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты..';
    let atribOption = [{titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка..'},
                {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы'},
                {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
                {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
                ];
    
     let option = new Tag(titleOption, actionOption, atribOption)   ;
     console.log(option);
    */

     
     /*
     let titleSelect = '<select>';
     let actionSelect = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты..';
     let atribSelect = [{titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
                 {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
                 {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'},
                 {titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'},
                 {titleOfAttr: 'multiple', actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.'},
                 {titleOfAttr: 'name', actionOfAttr: 'Имя элемента для отправки на сервер или обращения через скрипты.'},
                 {titleOfAttr: 'required', actionOfAttr: 'Список обязателен для выбора перед отправкой формы.'},
                 {titleOfAttr: 'size', actionOfAttr: 'Количество отображаемых строк списка.'},
                 {titleOfAttr: 'tabindex', actionOfAttr: 'Определяет последовательность перехода между элементами при нажатии на клавишу Tab'},
                 ];
     
      let select = new Tag(titleSelect, actionSelect, atribSelect)   ;
      console.log(select);
*/
// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

/*
let car = {
    model: "lanos",
    producer: "ukr", 
    year: 2018, 
    maxPower: 160, 
    engineСapacity:2,
    info : function (){
        console.log("model : "  + this.model,
         "producer: " + this.producer,
         "year: " + this.year,
         "maxpower: " + this.maxPower,
        "enginecapacity :" + this.engineСapacity)
    },
    drive : function () {
        console.log("їдемо зі швидкістю  " + this.maxPower + " на годину");
    },

    increaseMaxSpeed : function (newSpeed){
        console.log(this.maxPower += newSpeed)
    },

    changeYear : function (newValue){
        this.year = newValue;
        console.log(this.year);
    },


    addDriver : function (driver){
        this.driver = driver;
    }

  }
car.drive();
car.info();
car.increaseMaxSpeed(4);
car.changeYear(2015);
car.addDriver({name : "Volodya", age: 25, exr: 5});
console.log(car)
*/
// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

/*
class Car{
    constructor(model, producer, year, maxPower, engineСapacity){
            this.model = model;
            this.producer = producer;
            this.year = year;
            this.maxPower = maxPower;
            this.engineСapacity = engineСapacity;
        }
        drive(){
            console.log("їдемо зі швидкістю  " + this.maxPower + " на годину");
        }

        info (){
            console.log("model: " + this.model, "producer: " + this.producer, "year: " + this.year, "maxpower: " + this.maxPower, "enginecapacity :" + this.engineСapacity);
        }


        increaseMaxSpeed (newSpeed){
            console.log(this.maxPower += newSpeed)
        }

        changeYear (newValue){
            this.year = newValue;
            console.log(this.year);
        }
    
        addDriver (driver){
            this.diver = driver;
        }

    }

let lanos = new Car("Lanos",'Ukr', 2015, 150, 1.2);

lanos.drive();
console.log(lanos);
lanos.info();
lanos.increaseMaxSpeed(5);
lanos.changeYear(2017)
lanos.addDriver({name : "Volodya", age: 25, exr: 5})
console.log(lanos);
*/

//==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
 /*
function  Car(model, producer, year, maxPower, engineСapacity) {
            this.model = model;
            this.producer = producer;
            this.year = year;
            this.maxPower = maxPower;
            this.engineСapacity = engineСapacity;
        


        this.drive = function(){
            console.log("їдемо зі швидкістю  " + this.maxPower + " на годину");
        }

        this.info = function (){
            console.log("model: " + this.model, "producer: " + this.producer, "year: " + this.year, "maxpower: " + this.maxPower, "enginecapacity :" + this.engineСapacity);
        }


        this.increaseMaxSpeed = function (newSpeed){
            console.log(this.maxPower += newSpeed)
        }

        this.changeYear = function (newValue){
            this.year = newValue;
            console.log(this.year);
        }
    
        this.addDriver = function (driver){
            this.diver = driver;
        }

    }

let lanos = new Car("Lanos",'Ukr', 2015, 150, 1.2);

lanos.drive();
console.log(lanos);
lanos.info();
lanos.increaseMaxSpeed(5);
lanos.changeYear(2017)
lanos.addDriver({name : "Volodya", age: 25, exr: 5})
console.log(lanos);
*/

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

/*
class Human{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Cinderella extends Human{
    constructor(name,age,footSize){
        super(name,age)
        this.footSize = footSize;
    }
}

class Prince extends Human{
    constructor(name,age,shoestepSize){
    super(name,age);
        this.shoestepSize = shoestepSize;
    }

find(array){
    let find = null;
    for(let item of array){
        if(item.footSize === this.shoestepSize){
            find = item ;
        }
    }    
        if(find){
            console.log("My cinderella  is  " + find.name);
      } else {console.log("I donn`t find my cinderella");
         }
    }
}



let one = new Cinderella("Tanta",25, 35);
let two = new Cinderella("Anna", 39, 36);
let three = new Cinderella("Alina", 17, 37);
let four = new Cinderella("Olya", 24, 38);
let five = new Cinderella("Ira", 22, 38.5);
let six = new Cinderella("Oksana", 16, 39);
let seven = new Cinderella("Katya", 24,36.5);
let eight = new Cinderella("Lilya",19, 37.5);
let nine = new Cinderella("Vika", 28, 39.5);
let ten = new Cinderella("Daryna", 31, 40);


 let ciderellas = [one,two,three,four,five,six,seven,eight,nine,ten]

let princ = new Prince("Oleh",25,36.5);
princ.find(ciderellas)

*/
// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
/*
function Cinderella(name,age,footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }



    function Prince (name,age,shoestepSize){
        this.name = name;
        this.age = age;
        this.shoestepSize = shoestepSize;
    
    
        this.find = function(array){
            let find = null;
            for(let item of array){
                if(item.footSize === this.shoestepSize){
                    find = item ;
                }
            }    
                if(find){
                    console.log("My cinderella  is  " + find.name);
              } else {console.log("I donn`t find my cinderella");
                 }
            }
    }
        
    let one = new Cinderella("Tanta",25, 35);
    let two = new Cinderella("Anna", 39, 36);
    let three = new Cinderella("Alina", 17, 37);
    let four = new Cinderella("Olya", 24, 38);
    let five = new Cinderella("Ira", 22, 38.5);
    let six = new Cinderella("Oksana", 16, 39);
    let seven = new Cinderella("Katya", 24,36.5);
    let eight = new Cinderella("Lilya",19, 37.5);
    let nine = new Cinderella("Vika", 28, 39.5);
    let ten = new Cinderella("Daryna", 31, 40);
    
    
     let ciderellas = [one,two,three,four,five,six,seven,eight,nine,ten]
    
    let princ = new Prince("Oleh",25,36);
    princ.find(ciderellas)   
    
  */  
