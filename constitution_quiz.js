const quizQuestions = [
  {
    id: 1,
    question: "Which article of the Constitution deals with the Right to Education? [1]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 2,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [2]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 3,
    question: "How many Fundamental Duties are there in the Indian Constitution? [3]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 4,
    question: "Which body conducts elections in India? [4]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 5,
    question: "Which article guarantees the Right to Freedom of Religion? [5]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 6,
    question: "Which article of the Constitution deals with the Right to Education? [6]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 7,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [7]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 8,
    question: "How many Fundamental Duties are there in the Indian Constitution? [8]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 9,
    question: "Which body conducts elections in India? [9]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 10,
    question: "Which article guarantees the Right to Freedom of Religion? [10]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 11,
    question: "Which article of the Constitution deals with the Right to Education? [11]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 12,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [12]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 13,
    question: "How many Fundamental Duties are there in the Indian Constitution? [13]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 14,
    question: "Which body conducts elections in India? [14]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 15,
    question: "Which article guarantees the Right to Freedom of Religion? [15]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 16,
    question: "Which article of the Constitution deals with the Right to Education? [16]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 17,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [17]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 18,
    question: "How many Fundamental Duties are there in the Indian Constitution? [18]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 19,
    question: "Which body conducts elections in India? [19]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 20,
    question: "Which article guarantees the Right to Freedom of Religion? [20]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 21,
    question: "Which article of the Constitution deals with the Right to Education? [21]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 22,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [22]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 23,
    question: "How many Fundamental Duties are there in the Indian Constitution? [23]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 24,
    question: "Which body conducts elections in India? [24]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 25,
    question: "Which article guarantees the Right to Freedom of Religion? [25]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 26,
    question: "Which article of the Constitution deals with the Right to Education? [26]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 27,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [27]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 28,
    question: "How many Fundamental Duties are there in the Indian Constitution? [28]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 29,
    question: "Which body conducts elections in India? [29]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 30,
    question: "Which article guarantees the Right to Freedom of Religion? [30]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 31,
    question: "Which article of the Constitution deals with the Right to Education? [31]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 32,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [32]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 33,
    question: "How many Fundamental Duties are there in the Indian Constitution? [33]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 34,
    question: "Which body conducts elections in India? [34]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 35,
    question: "Which article guarantees the Right to Freedom of Religion? [35]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 36,
    question: "Which article of the Constitution deals with the Right to Education? [36]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 37,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [37]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 38,
    question: "How many Fundamental Duties are there in the Indian Constitution? [38]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 39,
    question: "Which body conducts elections in India? [39]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 40,
    question: "Which article guarantees the Right to Freedom of Religion? [40]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 41,
    question: "Which article of the Constitution deals with the Right to Education? [41]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 42,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [42]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 43,
    question: "How many Fundamental Duties are there in the Indian Constitution? [43]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 44,
    question: "Which body conducts elections in India? [44]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 45,
    question: "Which article guarantees the Right to Freedom of Religion? [45]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 46,
    question: "Which article of the Constitution deals with the Right to Education? [46]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 47,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [47]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 48,
    question: "How many Fundamental Duties are there in the Indian Constitution? [48]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 49,
    question: "Which body conducts elections in India? [49]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 50,
    question: "Which article guarantees the Right to Freedom of Religion? [50]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 51,
    question: "Which article of the Constitution deals with the Right to Education? [51]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 52,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [52]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 53,
    question: "How many Fundamental Duties are there in the Indian Constitution? [53]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 54,
    question: "Which body conducts elections in India? [54]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 55,
    question: "Which article guarantees the Right to Freedom of Religion? [55]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 56,
    question: "Which article of the Constitution deals with the Right to Education? [56]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 57,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [57]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 58,
    question: "How many Fundamental Duties are there in the Indian Constitution? [58]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 59,
    question: "Which body conducts elections in India? [59]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 60,
    question: "Which article guarantees the Right to Freedom of Religion? [60]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 61,
    question: "Which article of the Constitution deals with the Right to Education? [61]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 62,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [62]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 63,
    question: "How many Fundamental Duties are there in the Indian Constitution? [63]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 64,
    question: "Which body conducts elections in India? [64]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 65,
    question: "Which article guarantees the Right to Freedom of Religion? [65]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 66,
    question: "Which article of the Constitution deals with the Right to Education? [66]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 67,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [67]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 68,
    question: "How many Fundamental Duties are there in the Indian Constitution? [68]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 69,
    question: "Which body conducts elections in India? [69]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 70,
    question: "Which article guarantees the Right to Freedom of Religion? [70]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 71,
    question: "Which article of the Constitution deals with the Right to Education? [71]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 72,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [72]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 73,
    question: "How many Fundamental Duties are there in the Indian Constitution? [73]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 74,
    question: "Which body conducts elections in India? [74]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 75,
    question: "Which article guarantees the Right to Freedom of Religion? [75]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 76,
    question: "Which article of the Constitution deals with the Right to Education? [76]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 77,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [77]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 78,
    question: "How many Fundamental Duties are there in the Indian Constitution? [78]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 79,
    question: "Which body conducts elections in India? [79]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 80,
    question: "Which article guarantees the Right to Freedom of Religion? [80]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 81,
    question: "Which article of the Constitution deals with the Right to Education? [81]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 82,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [82]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 83,
    question: "How many Fundamental Duties are there in the Indian Constitution? [83]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 84,
    question: "Which body conducts elections in India? [84]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 85,
    question: "Which article guarantees the Right to Freedom of Religion? [85]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 86,
    question: "Which article of the Constitution deals with the Right to Education? [86]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 87,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [87]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 88,
    question: "How many Fundamental Duties are there in the Indian Constitution? [88]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 89,
    question: "Which body conducts elections in India? [89]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 90,
    question: "Which article guarantees the Right to Freedom of Religion? [90]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 91,
    question: "Which article of the Constitution deals with the Right to Education? [91]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 92,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [92]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 93,
    question: "How many Fundamental Duties are there in the Indian Constitution? [93]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 94,
    question: "Which body conducts elections in India? [94]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 95,
    question: "Which article guarantees the Right to Freedom of Religion? [95]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 96,
    question: "Which article of the Constitution deals with the Right to Education? [96]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 97,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [97]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 98,
    question: "How many Fundamental Duties are there in the Indian Constitution? [98]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 99,
    question: "Which body conducts elections in India? [99]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 100,
    question: "Which article guarantees the Right to Freedom of Religion? [100]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 101,
    question: "Which article of the Constitution deals with the Right to Education? [101]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 102,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [102]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 103,
    question: "How many Fundamental Duties are there in the Indian Constitution? [103]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 104,
    question: "Which body conducts elections in India? [104]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 105,
    question: "Which article guarantees the Right to Freedom of Religion? [105]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 106,
    question: "Which article of the Constitution deals with the Right to Education? [106]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 107,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [107]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 108,
    question: "How many Fundamental Duties are there in the Indian Constitution? [108]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 109,
    question: "Which body conducts elections in India? [109]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 110,
    question: "Which article guarantees the Right to Freedom of Religion? [110]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 111,
    question: "Which article of the Constitution deals with the Right to Education? [111]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 112,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [112]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 113,
    question: "How many Fundamental Duties are there in the Indian Constitution? [113]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 114,
    question: "Which body conducts elections in India? [114]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 115,
    question: "Which article guarantees the Right to Freedom of Religion? [115]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 116,
    question: "Which article of the Constitution deals with the Right to Education? [116]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 117,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [117]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 118,
    question: "How many Fundamental Duties are there in the Indian Constitution? [118]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 119,
    question: "Which body conducts elections in India? [119]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 120,
    question: "Which article guarantees the Right to Freedom of Religion? [120]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 121,
    question: "Which article of the Constitution deals with the Right to Education? [121]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 122,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [122]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 123,
    question: "How many Fundamental Duties are there in the Indian Constitution? [123]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 124,
    question: "Which body conducts elections in India? [124]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 125,
    question: "Which article guarantees the Right to Freedom of Religion? [125]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 126,
    question: "Which article of the Constitution deals with the Right to Education? [126]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 127,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [127]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 128,
    question: "How many Fundamental Duties are there in the Indian Constitution? [128]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 129,
    question: "Which body conducts elections in India? [129]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 130,
    question: "Which article guarantees the Right to Freedom of Religion? [130]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 131,
    question: "Which article of the Constitution deals with the Right to Education? [131]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 132,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [132]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 133,
    question: "How many Fundamental Duties are there in the Indian Constitution? [133]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 134,
    question: "Which body conducts elections in India? [134]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 135,
    question: "Which article guarantees the Right to Freedom of Religion? [135]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 136,
    question: "Which article of the Constitution deals with the Right to Education? [136]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 137,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [137]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 138,
    question: "How many Fundamental Duties are there in the Indian Constitution? [138]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 139,
    question: "Which body conducts elections in India? [139]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 140,
    question: "Which article guarantees the Right to Freedom of Religion? [140]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 141,
    question: "Which article of the Constitution deals with the Right to Education? [141]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 142,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [142]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 143,
    question: "How many Fundamental Duties are there in the Indian Constitution? [143]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 144,
    question: "Which body conducts elections in India? [144]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 145,
    question: "Which article guarantees the Right to Freedom of Religion? [145]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
  {
    id: 146,
    question: "Which article of the Constitution deals with the Right to Education? [146]",
    options: ['Article 19', 'Article 21', 'Article 21A', 'Article 45'],
    answer: "Article 21A",
    explanation: "Article 21A mandates free and compulsory education for children aged 6 to 14 years."
  },
  {
    id: 147,
    question: "Which schedule of the Constitution contains the Anti-Defection Law? [147]",
    options: ['Eighth', 'Ninth', 'Tenth', 'Eleventh'],
    answer: "Tenth",
    explanation: "The Tenth Schedule, added by the 52nd Amendment, addresses the Anti-Defection Law."
  },
  {
    id: 148,
    question: "How many Fundamental Duties are there in the Indian Constitution? [148]",
    options: ['10', '11', '12', '9'],
    answer: "11",
    explanation: "The 42nd and 86th Amendments brought the number of Fundamental Duties to 11."
  },
  {
    id: 149,
    question: "Which body conducts elections in India? [149]",
    options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President'],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India is an autonomous body responsible for conducting elections."
  },
  {
    id: 150,
    question: "Which article guarantees the Right to Freedom of Religion? [150]",
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 25'],
    answer: "Article 25",
    explanation: "Article 25 provides all persons the freedom of conscience and the right to freely profess, practice and propagate religion."
  },
];