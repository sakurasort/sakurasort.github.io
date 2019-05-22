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
  [1, "Aritomo Tsugumi",    [1,0,0,0,0,0], "current/members_idx_aritomo.jpg"],
  [1, "Mori Momoe",         [1,0,0,0,0,0], "current/members_idx_mori.jpg"],
  [1, "Fujihira Kano",      [1,0,0,0,0,0], "current/members_idx_fujihira.jpg"],
  [1, "Yoshida Soyoka",     [1,0,0,0,0,0], "current/members_idx_yoshida.jpg"],
  [1, "Yagi Miki",          [1,0,0,0,0,0], "current/members_idx_yagi.jpg"],
  [1, "Tanaka Miku",        [1,0,0,0,0,0], "current/members_idx_tanaka.jpg"], 
  [1, "Nozaki Yume",        [1,0,0,0,0,0], "current/members_idx_nozaki.jpg"],   
  [1, "Nonaka Kokona",      [1,0,0,0,0,0], "current/members_idx_nonaka.jpg"],   
  [1, "Shiratori Sana",     [1,0,0,0,0,0], "current/members_idx_shiratori.jpg"],
  [1, "Satou Neo",          [1,0,0,0,0,0], "current/members_idx_sato.jpg"],
  [1, "Todaka Miko",        [1,0,0,0,0,0], "current/members_idx_todaka.jpg"],
  [1, "Kimura Sakia",       [1,0,0,0,0,0], "current/members_idx_kimura.jpg"],    
  [1, "Asou Maaya",         [0,1,0,0,0,0], "graduated/members_idx_asou.jpg"],  
  [1, "Hidaka Marin",       [0,1,0,0,0,0], "graduated/members_idx_hidaka.jpg"],  
  [1, "Shintani Yuzumi",    [0,1,0,0,0,0], "graduated/members_idx_shintani.jpg"],  
  [1, "Yamaide Aiko",       [0,1,0,0,0,0], "graduated/members_idx_yamaide.jpg"],
  [1, "Okada Megumi",       [0,1,0,0,0,0], "graduated/members_idx_okada.jpg"],
  [1, "Okazaki Momoko",     [0,1,0,0,0,0], "graduated/members_idx_okazaki.jpg"], 
  [1, "Kurosawa Mirena",    [0,1,0,0,0,0], "graduated/members_idx_kurosawa.jpg"],
  [1, "Kurashima Sara",     [0,1,0,0,0,0], "graduated/members_idx_kurashima.jpg"],
  [1, "Isono Rinon",        [0,1,0,0,0,0], "graduated/graduates_idx_isono.jpg"],
  [1, "Ooga Saki",          [0,1,0,0,0,0], "graduated/graduates_idx_ooga.jpg"],
  [1, "Shirai Saki",        [0,1,0,0,0,0], "graduated/graduates_idx_shirai.jpg"],
  [1, "Taguchi Hana",       [0,1,0,0,0,0], "graduated/graduates_idx_taguchi.jpg"],
  [1, "Mizuno Yui",         [0,1,0,0,0,0], "graduated/graduates_idx_mizuno.jpg"],
  [1, "Kikuchi Moa",        [0,1,0,0,0,0], "graduated/graduates_idx_kikuchi.jpg"],
  [1, "Honjo Yunano",       [0,1,0,0,0,0], "graduated/graduates_idx_honjo.jpg"],
  [1, "Sugisaki Nene",      [0,1,0,0,0,0], "graduated/graduates_idx_sugisaki.jpg"],
  [1, "Sato Hinata",        [0,1,0,0,0,0], "graduated/graduates_idx_sato.jpg"],
  [1, "Iida Raura",         [0,1,0,0,0,0], "graduated/graduates_idx_iida.jpg"],
  [1, "Horiuchi Marina",    [0,1,0,0,0,0], "graduated/graduates_idx_horiuchi.jpg"],
  [1, "Sugimoto Mariri",    [0,1,0,0,0,0], "graduated/graduates_idx_sugimoto.jpg"],
  [1, "Nakamoto Suzuka",    [0,1,0,0,0,0], "graduated/graduates_idx_nakamoto.jpg"],
  [1, "Muto Ayami",         [0,1,0,0,0,0], "graduated/graduates_idx_mutou.jpg"],
  [1, "Matsui Airi",        [0,1,0,0,0,0], "graduated/graduates_idx_matsui.jpg"],
  [1, "Miyoshi Ayaka",      [0,1,0,0,0,0], "graduated/graduates_idx_miyoshi.jpg"],
  [1, "SU-METAL",           [0,0,1,0,0,0], "bm/su.jpg"],
  [1, "YUIMETAL",           [0,0,1,0,0,0], "bm/yui.jpg"],
  [1, "MOAMETAL",           [0,0,1,0,0,0], "bm/moa.jpg"],
  [1, "Aoyama Hideki",      [0,0,1,0,0,0], "bm/aoyama.jpg"],
  [1, "BOH",                [0,0,1,0,0,0], "bm/boh.jpg"],
  [1, "Fujioka Mikio",      [0,0,1,0,0,0], "bm/fujioka.jpg"],
  [1, "Ohmura Takayoshi",   [0,0,1,0,0,0], "bm/ohmura.jpg"],
  [1, "Leda",               [0,0,1,0,0,0], "bm/leda.jpg"],
  [1, "Maeta Yuuya",        [0,0,1,0,0,0], "bm/maeta.jpg"],
  [1, "ISAO",               [0,0,1,0,0,0], "bm/isao.jpg"],
  [1, "Koba",               [0,0,1,0,0,0], "bm/koba.jpg"]
];
