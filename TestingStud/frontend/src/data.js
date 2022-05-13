const data = [
    {
      question: "CSS - это ...",
      incorrectAnswers: [
        "Компьютерная система стилей",
        "Таблица серверных стилей",
        "Красочные Таблицы Стилей",
      ],
      correctAnswer: "Каскадная таблица стилей",
    },
  
    {
      question:
        "Где в HTML-документе находится правильное место для ссылки на внешний CSS?",
      incorrectAnswers: [
        "В теге <body>",
        "В конце документа",
        "Такого места нету в HTML",
      ],
      correctAnswer: "В теге <head>",
    },
    {
      question: "Какой HTML тег используется для определения CSS?",
      incorrectAnswers: ["<script>", "<headStyle>", "<css>"],
      correctAnswer: "<style>",
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      incorrectAnswers: ["class", "font", "styles"],
      correctAnswer: "style",
    },
    {
      question: "Выберите корректный CSS синтаксис.",
      incorrectAnswers: [
        "{body:color=black;}",
        "{body;color:black;}",
        "body:color=black;",
      ],
      correctAnswer: "body {color: black;}",
    },
    {
      question: "Форма для комментариев в CSS?",
      incorrectAnswers: [
        "' this is a comment",
        "// this is a comment",
        "// this is a comment //",
      ],
      correctAnswer: "/* this is a comment */",
    },
    {
      question: "Какое свойство используется для изменения цвета фона?",
      incorrectAnswers: ["color", "bgcolor", "bgColor"],
      correctAnswer: "background-color",
    },
    {
      question: "Как задать цвет фона для всех элементов с тегом <h1>?",
      incorrectAnswers: [
        "all.h1 {background-color:#FFFFFF;}",
        "h1.setAll {background-color:#FFFFFF;}",
        "h1.all {background-color:#FFFFFF;}",
      ],
      correctAnswer: "h1 {background-color:#FFFFFF;}",
    },
  ];
  
  export default data;
  