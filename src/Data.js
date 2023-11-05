const questions = [
    {
      text: "A line which cuts a pair of parallel lines is called",
      options: [
        { id: 0, opt: "a", text: "Tangent", isCorrect: true },
        { id: 1, opt: "b", text: "Chord", isCorrect: false },
        { id: 2, opt: "c", text: "Traversal", isCorrect: false },
        { id: 3, opt: "d", text: "Intersector", isCorrect: false }
      ]
    },
    {
      text: " Which was the 1st non Test playing country to beat India in an international match?",
      options: [
        { id: 0, opt: "a", text: "Canada", isCorrect: false },
        { id: 1, opt: "b", text: "Sri Lanka", isCorrect: true },
        { id: 2, opt: "c", text: "Zimbabwe", isCorrect: false },
        { id: 3, opt: "d", text: "East Africa", isCorrect: false }
      ]
    },
    {
      text: "Grand Central Terminal, Park Avenue, New York is the world's",
      options: [
        { id: 0, opt: "a", text: "largest railway station", isCorrect: true },
        { id: 1, opt: "b", text: "highest railway station", isCorrect: false },
        { id: 2, opt: "c", text: "longest railway station", isCorrect: false },
        { id: 3, opt: "d", text: "None of the above", isCorrect: false }
      ]
    },
    {
        text: " Look at this series: 36, 34, 30, 28, 24, ... What number should come next?",
        options: [
          { id: 0, opt: "a", text: "20", isCorrect: false },
          { id: 1, opt: "b", text: "23", isCorrect: false },
          { id: 2, opt: "c", text: "22", isCorrect: true },
          { id: 3, opt: "d", text: "26", isCorrect: false }
        ]
      },
      {
        text: "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
        options: [
          { id: 0, opt: "a", text: "7", isCorrect: false },
          { id: 1, opt: "b", text: "10", isCorrect: true },
          { id: 2, opt: "c", text: "12", isCorrect: false },
          { id: 3, opt: "d", text: "13", isCorrect: false }
        ]
      },
      {
        text: "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?",
        options: [
          { id: 0, opt: "a", text: " (1/3)", isCorrect: false },
          { id: 1, opt: "b", text: "(1/8)", isCorrect: true },
          { id: 2, opt: "c", text: "(2/8)", isCorrect: false },
          { id: 3, opt: "d", text: "(1/16)", isCorrect: false }
        ]
      },
      {
        text: "First China War was fought between",
        options: [
          { id: 0, opt: "a", text: "China and Britain", isCorrect: true },
          { id: 1, opt: "b", text: "China and France", isCorrect: false },
          { id: 2, opt: "c", text: "China and Egypt", isCorrect: false },
          { id: 3, opt: "d", text: "China and Greek", isCorrect: false }
        ]
      },
      {
        text: "First Afghan War took place in",
        options: [
          { id: 0, opt: "a", text: " 1839", isCorrect: true },
          { id: 1, opt: "b", text: "1843", isCorrect: false },
          { id: 2, opt: "c", text: "1833", isCorrect: false },
          { id: 3, opt: "d", text: "1848", isCorrect: false }
        ]
      },
      {
        text: "Golf player Vijay Singh belongs to which country?",
        options: [
          { id: 0, opt: "a", text: "USA", isCorrect: false },
          { id: 1, opt: "b", text: "Fiji", isCorrect: true },
          { id: 2, opt: "c", text: "India", isCorrect: false },
          { id: 3, opt: "d", text: "UK", isCorrect: false }
        ]
      },
      {
        text: "Exposure to sunlight helps a person improve his health because",
        options: [
          { id: 0, opt: "a", text: "the infrared light kills bacteria in the body", isCorrect: false },
          { id: 1, opt: "b", text: " resistance power increases", isCorrect: false },
          { id: 2, opt: "c", text: "the pigment cells in the skin get stimulated and produce a healthy tan", isCorrect: false },
          { id: 3, opt: "d", text: "the ultraviolet rays convert skin oil into Vitamin D", isCorrect: true }
        ]
      },
      {
        text: "Galileo was an Italian astronomer who",
        options: [
          { id: 0, opt: "a", text: "developed the telescope", isCorrect: false },
          { id: 1, opt: "b", text: "discovered four satellites of Jupiter", isCorrect: false },
          { id: 2, opt: "c", text: "discovered that the movement of pendulum produces a regular time measurement", isCorrect: false },
          { id: 3, opt: "d", text: "All of the above", isCorrect: true }
        ]
      },
      {
        text: " Fastest shorthand writer was",
        options: [
          { id: 0, opt: "a", text: "Dr. G. D. Bist", isCorrect: true },
          { id: 1, opt: "b", text: "J.R.D. Tata", isCorrect: false },
          { id: 2, opt: "c", text: "J.M. Tagore", isCorrect: false },
          { id: 3, opt: "d", text: "Khudada Khan", isCorrect: false }
        ]
      },
      {
        text: " Hitler party which came into power in 1933 is known as",
        options: [
          { id: 0, opt: "a", text: "Labour Party", isCorrect: false },
          { id: 1, opt: "b", text: "Nazi Party", isCorrect: true },
          { id: 2, opt: "c", text: "Ku-Klux-Klan", isCorrect: false },
          { id: 3, opt: "d", text: "Democratic Party", isCorrect: false }
        ]
      },
      {
        text: "For which of the following disciplines is Nobel Prize awarded?",
        options: [
          { id: 0, opt: "a", text: "Physics and Chemistry", isCorrect: false },
          { id: 1, opt: "b", text: "Physiology or Medicine", isCorrect: false },
          { id: 2, opt: "c", text: "Literature, Peace and Economics", isCorrect: false },
          { id: 3, opt: "d", text: "All of the above", isCorrect: true }
        ]
      },
      {
        text: "Entomology is the science that studies",
        options: [
          { id: 0, opt: "a", text: "Behavior of human beings", isCorrect: false },
          { id: 1, opt: "b", text: "Insects", isCorrect: true },
          { id: 2, opt: "c", text: "The origin and history of technical and scientific terms", isCorrect: false },
          { id: 3, opt: "d", text: "The formation of rocks", isCorrect: false }
        ]
      }

  ];

export default questions;  