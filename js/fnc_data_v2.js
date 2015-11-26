// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 35;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
  "Current Members",
  "Graduated Members",
  "BABYMETAL"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "Yamaide Aiko",       [1,0,0,0,0,0], "current/aiko.jpg"],
  [1, "Fujihira Kano",      [1,0,0,0,0,0], "current/kano.jpg"],
  [1, "Asou Maaya",         [1,0,0,0,0,0], "current/maaya.jpg"],
  [1, "Hidaka Marin",       [1,0,0,0,0,0], "current/marin.jpg"],
  [1, "Okada Megumi",       [1,0,0,0,0,0], "current/megumi.jpg"],
  [1, "Kurosawa Mirena",    [1,0,0,0,0,0], "current/mirena.jpg"],
  [1, "Okazaki Momoko",     [1,0,0,0,0,0], "current/momoko.jpg"],
  [1, "Isono Rinon",        [1,0,0,0,0,0], "current/rinon.jpg"],
  [1, "Ooga Saki",          [1,0,0,0,0,0], "current/saki.jpg"],
  [1, "Shirai Saki",        [1,0,0,0,0,0], "current/saki_s.jpg"],
  [1, "Kurashima Sara",     [1,0,0,0,0,0], "current/sara.jpg"],
  [1, "Yoshida Soyoka",     [1,0,0,0,0,0], "current/soyoka.jpg"],
  [1, "Taguchi Hana",       [0,1,0,0,0,0], "graduated/hana.jpg"],
  [1, "Mizuno Yui",         [0,1,0,0,0,0], "graduated/yui.jpg"],
  [1, "Kikuchi Moa",        [0,1,0,0,0,0], "graduated/moa.jpg"],
  [1, "Notsu Yunano",       [0,1,0,0,0,0], "graduated/alien.jpg"],
  [1, "Sugisaki Nene",      [0,1,0,0,0,0], "graduated/nene.jpg"],
  [1, "Sato Hinata",        [0,1,0,0,0,0], "graduated/hinata.jpg"],
  [1, "Iida Raura",         [0,1,0,0,0,0], "graduated/rau.jpg"],
  [1, "Horiuchi Marina",    [0,1,0,0,0,0], "graduated/marina.jpg"],
  [1, "Sugimoto Mariri"],   [0,1,0,0,0,0], "graduated/mariri.jpg"],
  [1, "Nakamoto Suzuka",    [0,1,0,0,0,0], "graduated/su.jpg"],
  [1, "Muto Ayami",         [0,1,0,0,0,0], "graduated/ayami.jpg"],
  [1, "Matsui Airi",        [0,1,0,0,0,0], "graduated/airi.jpg"],
  [1, "Miyoshi Ayaka",      [0,1,0,0,0,0], "graduated/ayaka.jpg"],
  [1, "SU-METAL",           [0,0,1,0,0,0], "bm/su.jpg"],
  [1, "YUIMETAL",           [0,0,1,0,0,0], "bm/yui.jpg"],
  [1, "MOAMETAL",           [0,0,1,0,0,0], "bm/moa.jpg"],
  [1, "Aoyama Hideki",      [0,0,1,0,0,0], "bm/aoyama.jpg"],
  [1, "BOH",                [0,0,1,0,0,0], "bm/boh.jpg"],
  [1, "Fujioka Mikio",      [0,0,1,0,0,0], "bm/fujioka.jpg"],
  [1, "Ohmura Takayoshi",   [0,0,1,0,0,0], "bm/ohmura.jpg"]
];
