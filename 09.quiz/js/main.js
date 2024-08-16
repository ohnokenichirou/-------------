'use strict';

let question = [//問題文、選択肢、正解が格納されている。
  [
    "山形県の県庁所在地はどこ",//quisCnt=0
    "1.天童市",
    "2.東根市",
    "3.山形市",
    "3"
  ],
  [
    "山形県のお米といえば",//quisCnt=1
    "1.ひとめぼれ",
    "2.はえぬき",
    "3.こしひかり",
    "2"
  ],
  [
    "山形県の果物といえば",//quisCnt=2
    "1.さくらんぼ",
    "2.マンゴー",
    "3.みかん",
    "1"
  ]
];

// console.log(question[0][0]);

let quiz = document.getElementById('question');//here display question
let ans1 = document.getElementById('ans1');//here choices1
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');

let correct = 0;//正解数　　　　　　カウント変数
let quizCnt = 0;//quiz count

function quizSet() {
  quiz.textContent = question[quizCnt][0];//question変数の配列を該当箇所に代入
  ans1.textContent = question[quizCnt][1];
  ans2.textContent = question[quizCnt][2];
  ans3.textContent = question[quizCnt][3];

};

quizSet();

function answerCheck(ans) {//answerCheck関数はhtml内に記述した、onclick属性のonClick="answerCheck(1)の1を引数として渡す
  if (ans == question[quizCnt][4]) {//上記の[quizCnt][4]とクリックイベントが一致したら
    alert("正解");//
    correct++;//正解数をカウントするカウント変数
  } else {
    alert("不正解");
  };
  quizCnt++;//次のquizへ移動
  if (quizCnt == question.length) {//条件、quizCntがquestionの配列の長さと一致したら(つまり問題がすべて完了したら下記の処理へ)
    quiz.textContent = `正解数は${correct}でした`;
    ans1.textContent = "";
    ans2.textContent = "";
    ans3.textContent = "";
  } else {
    quizSet();//lengthの長さに達していない場合quizSet関数を呼び出す。なくても動作する。
    
  };
};

