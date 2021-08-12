const fileInput = document.getElementById('input');
const image = document.getElementById('upload');
const canvas = document.getElementById('canvas');
const status = document.getElementById('status');
const imgs = document.getElementById('image-container');
const progressContainer = document.getElementsByClassName('progress')[0];
const progress = document.getElementById('progress-bar');

status.textContent = "Waiting for file...";

function hideProgressBar() {
  progressContainer.style.opacity = 0;
}

function showProgressBar() {
  progressContainer.style.opacity = 1;
}

function progressBarDisplay(percentStr) {
  progress.style.width = percentStr;
}


function download(content, name) {
  let el = document.createElement("a");
  el.setAttribute("href", "data:application," + content);
  el.setAttribute("download", name);
  if (document.createEvent) {
    let event = document.createEvent('MouseEvents');
    event.initEvent('click', true, true);
    el.dispatchEvent(event);
  } else {
    el.click();
  }
}



function scan(fileName, pdf) {
  showProgressBar();
  progressBarDisplay("0%");
  const createPercentFromDec = dec => Math.round(dec * 1000) / 10;
  const formatPercent = percent => " ".repeat(' 100.0%'.length - (percent + '%').length) + percent + "%";
  status.textContent = "Scanning PDF and creating sprite... "; // + formatPercent(createPercentFromDec(0));

  const pageCount = pdf.numPages;

  pdf.getPage(1).then(function(page) {
    let scale = 1;
    let viewport = page.getViewport({
      scale: scale,
    });

    scale = 2550 / viewport.width;
    pdf.getPage(1).then(function(page) {
      let viewport = page.getViewport({
        scale: scale,
      });


      let size = 33;
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      console.log(canvas.width, canvas.height)
      let jsonData = {
        isStage: false,
        name: fileName,
        variables: {
          "aDfhX.aasQ}toddK|FHl": [
            "scroll v",
            0
          ]
        },
        lists: {},
        broadcasts: {},
        blocks: {"PUFYDk[:E8l-9{d[c6#F":{"opcode":"event_whenflagclicked","next":"Vy0LI%yA9O)m57v;4x#U","parent":null,"inputs":{},"fields":{},"shadow":false,"topLevel":true,"x":138,"y":180},"Vy0LI%yA9O)m57v;4x#U":{"opcode":"data_setvariableto","next":"JcDp]FYl?Gy#rvw{guMU","parent":"PUFYDk[:E8l-9{d[c6#F","inputs":{"VALUE":[1,[10,"0"]]},"fields":{"VARIABLE":["scroll v","aDfhX.aasQ}toddK|FHl"]},"shadow":false,"topLevel":false},"JcDp]FYl?Gy#rvw{guMU":{"opcode":"data_setvariableto","next":"{^/9-$Y0rV06ev=dgSY+","parent":"Vy0LI%yA9O)m57v;4x#U","inputs":{"VALUE":[1,[10,"-100"]]},"fields":{"VARIABLE":["scroll y","6vv2a}c@$M(l5k5Y%??3"]},"shadow":false,"topLevel":false},"{^/9-$Y0rV06ev=dgSY+":{"opcode":"looks_switchcostumeto","next":"PqDP1djpQZ`]%UjX71tc","parent":"JcDp]FYl?Gy#rvw{guMU","inputs":{"COSTUME":[1,"ASOfY9`hjFhbD}BHu-hR"]},"fields":{},"shadow":false,"topLevel":false},"ASOfY9`hjFhbD}BHu-hR":{"opcode":"looks_costume","next":null,"parent":"{^/9-$Y0rV06ev=dgSY+","inputs":{},"fields":{"COSTUME":["frame-0",null]},"shadow":true,"topLevel":false},"PqDP1djpQZ`]%UjX71tc":{"opcode":"looks_setsizeto","next":"*PdD$dJj{)=bZz-eyZZ%","parent":"{^/9-$Y0rV06ev=dgSY+","inputs":{"SIZE":[1,[4,"33"]]},"fields":{},"shadow":false,"topLevel":false},"*PdD$dJj{)=bZz-eyZZ%":{"opcode":"data_setvariableto","next":"x3XocIKLuRrEo6__Mn=1","parent":"PqDP1djpQZ`]%UjX71tc","inputs":{"VALUE":[3,"X6?fQL1;d-*$WO-[a~ly",[10,"0"]]},"fields":{"VARIABLE":["DISTANCE","`i%kbp*F[(|YAJ!]dwa-"]},"shadow":false,"topLevel":false},"X6?fQL1;d-*$WO-[a~ly":{"opcode":"operator_add","next":null,"parent":"*PdD$dJj{)=bZz-eyZZ%","inputs":{"NUM1":[3,"4iijZ6J[F]J0B*RP/U9u",[4,""]],"NUM2":[1,[4,"20"]]},"fields":{},"shadow":false,"topLevel":false},"4iijZ6J[F]J0B*RP/U9u":{"opcode":"operator_divide","next":null,"parent":"X6?fQL1;d-*$WO-[a~ly","inputs":{"NUM1":[1,[4,"1650"]],"NUM2":[1,[4,"3"]]},"fields":{},"shadow":false,"topLevel":false},"x3XocIKLuRrEo6__Mn=1":{"opcode":"data_setvariableto","next":"?eV#lLyDw%Pvg+Yn2MEz","parent":"*PdD$dJj{)=bZz-eyZZ%","inputs":{"VALUE":[1,[10,"1"]]},"fields":{"VARIABLE":["scroll top","*H[%os,O3c,|LyTlT$8h"]},"shadow":false,"topLevel":false},"?eV#lLyDw%Pvg+Yn2MEz":{"opcode":"control_create_clone_of","next":"4!B@C2b1aO_3IxlDCFEl","parent":"x3XocIKLuRrEo6__Mn=1","inputs":{"CLONE_OPTION":[1,"QHpXd}~p_4Z6BIRFF)x)"]},"fields":{},"shadow":false,"topLevel":false},"QHpXd}~p_4Z6BIRFF)x)":{"opcode":"control_create_clone_of_menu","next":null,"parent":"?eV#lLyDw%Pvg+Yn2MEz","inputs":{},"fields":{"CLONE_OPTION":["_myself_",null]},"shadow":true,"topLevel":false},"4!B@C2b1aO_3IxlDCFEl":{"opcode":"control_forever","next":null,"parent":"?eV#lLyDw%Pvg+Yn2MEz","inputs":{"SUBSTACK":[2,"/L3+E5=Zp~bRD~5P(mxl"]},"fields":{},"shadow":false,"topLevel":false},"/L3+E5=Zp~bRD~5P(mxl":{"opcode":"procedures_call","next":null,"parent":"4!B@C2b1aO_3IxlDCFEl","inputs":{},"fields":{},"shadow":false,"topLevel":false,"mutation":{"tagName":"mutation","children":[],"proccode":"Iter","argumentids":"[]","warp":"true"}},"n4sOv?Pe;M:+,QRsw~G6":{"opcode":"control_start_as_clone","next":"7jM|Kh}=qs.0:8TzwETF","parent":null,"inputs":{},"fields":{},"shadow":false,"topLevel":true,"x":543,"y":202},"7jM|Kh}=qs.0:8TzwETF":{"opcode":"control_forever","next":null,"parent":"n4sOv?Pe;M:+,QRsw~G6","inputs":{"SUBSTACK":[2,"*PJ^|PeqiOkG0=56)+pG"]},"fields":{},"shadow":false,"topLevel":false},"*PJ^|PeqiOkG0=56)+pG":{"opcode":"procedures_call","next":null,"parent":"7jM|Kh}=qs.0:8TzwETF","inputs":{},"fields":{},"shadow":false,"topLevel":false,"mutation":{"tagName":"mutation","children":[],"proccode":"IterClone","argumentids":"[]","warp":"true"}},"qm;n+;r@=LT^NfR;7Ujd":{"opcode":"procedures_definition","next":"fWr~WbEP5m.-qT@S6Q%.","parent":null,"inputs":{"custom_block":[1,"YpZ8pHKNJYgb%)N~0l-i"]},"fields":{},"shadow":false,"topLevel":true,"x":481,"y":638},"YpZ8pHKNJYgb%)N~0l-i":{"opcode":"procedures_prototype","next":null,"parent":"qm;n+;r@=LT^NfR;7Ujd","inputs":{},"fields":{},"shadow":true,"topLevel":false,"mutation":{"tagName":"mutation","children":[],"proccode":"Iter","argumentids":"[]","argumentnames":"[]","argumentdefaults":"[]","warp":"true"}},"fWr~WbEP5m.-qT@S6Q%.":{"opcode":"data_setvariableto","next":"0HJb9?tj:dQ.yA:)lZ5c","parent":"qm;n+;r@=LT^NfR;7Ujd","inputs":{"VALUE":[3,"Zl2^v=b8wKi/,[KC%Kj-",[10,"0"]]},"fields":{"VARIABLE":["scroll v","aDfhX.aasQ}toddK|FHl"]},"shadow":false,"topLevel":false},"Zl2^v=b8wKi/,[KC%Kj-":{"opcode":"operator_multiply","next":null,"parent":"fWr~WbEP5m.-qT@S6Q%.","inputs":{"NUM1":[1,[4,"0.9"]],"NUM2":[3,[12,"scroll v","aDfhX.aasQ}toddK|FHl"],[4,""]]},"fields":{},"shadow":false,"topLevel":false},"0HJb9?tj:dQ.yA:)lZ5c":{"opcode":"data_changevariableby","next":"d/(6j=*#A6*P0)nQRzDe","parent":"fWr~WbEP5m.-qT@S6Q%.","inputs":{"VALUE":[3,[12,"scroll v","aDfhX.aasQ}toddK|FHl"],[4,"1"]]},"fields":{"VARIABLE":["scroll y","6vv2a}c@$M(l5k5Y%??3"]},"shadow":false,"topLevel":false},"d/(6j=*#A6*P0)nQRzDe":{"opcode":"data_changevariableby","next":"gwv2VC.%dKR-lV?Bq=)D","parent":"0HJb9?tj:dQ.yA:)lZ5c","inputs":{"VALUE":[3,"97Z|:WPFQn?wt^4mC7(`",[4,"1"]]},"fields":{"VARIABLE":["scroll y","6vv2a}c@$M(l5k5Y%??3"]},"shadow":false,"topLevel":false},"97Z|:WPFQn?wt^4mC7(`":{"opcode":"operator_multiply","next":null,"parent":"d/(6j=*#A6*P0)nQRzDe","inputs":{"NUM1":[3,"2lJ*QHQVDftfT+IkP[Id",[4,""]],"NUM2":[1,[4,"5"]]},"fields":{},"shadow":false,"topLevel":false},"2lJ*QHQVDftfT+IkP[Id":{"opcode":"operator_add","next":null,"parent":"97Z|:WPFQn?wt^4mC7(`","inputs":{"NUM1":[3,"~`uaPq6#]#_cg)8.53$u",[4,""]],"NUM2":[3,"P.g^fkm=~V!am=FP-8JX",[4,""]]},"fields":{},"shadow":false,"topLevel":false},"~`uaPq6#]#_cg)8.53$u":{"opcode":"operator_subtract","next":null,"parent":"2lJ*QHQVDftfT+IkP[Id","inputs":{"NUM1":[3,"~^=EI9l`qr:R-e-0~duj",[4,""]],"NUM2":[3,"xempUIThH4?(CwY0AAYt",[4,""]]},"fields":{},"shadow":false,"topLevel":false},"~^=EI9l`qr:R-e-0~duj":{"opcode":"sensing_keypressed","next":null,"parent":"~`uaPq6#]#_cg)8.53$u","inputs":{"KEY_OPTION":[1,"G^5i5P(e8%S@o46H)XE1"]},"fields":{},"shadow":false,"topLevel":false},"G^5i5P(e8%S@o46H)XE1":{"opcode":"sensing_keyoptions","next":null,"parent":"~^=EI9l`qr:R-e-0~duj","inputs":{},"fields":{"KEY_OPTION":["down arrow",null]},"shadow":true,"topLevel":false},"xempUIThH4?(CwY0AAYt":{"opcode":"sensing_keypressed","next":null,"parent":"~`uaPq6#]#_cg)8.53$u","inputs":{"KEY_OPTION":[1,"k*TmWDRwKW35;If6=yQo"]},"fields":{},"shadow":false,"topLevel":false},"k*TmWDRwKW35;If6=yQo":{"opcode":"sensing_keyoptions","next":null,"parent":"xempUIThH4?(CwY0AAYt","inputs":{},"fields":{"KEY_OPTION":["up arrow",null]},"shadow":true,"topLevel":false},"P.g^fkm=~V!am=FP-8JX":{"opcode":"operator_multiply","next":null,"parent":"2lJ*QHQVDftfT+IkP[Id","inputs":{"NUM1":[3,"L5I+R,~S7ROY,qh;o(g)",[4,""]],"NUM2":[3,"er?]ejG6{%ak;#AVRGQt",[4,""]]},"fields":{},"shadow":false,"topLevel":false},"L5I+R,~S7ROY,qh;o(g)":{"opcode":"sensing_mousedown","next":null,"parent":"P.g^fkm=~V!am=FP-8JX","inputs":{},"fields":{},"shadow":false,"topLevel":false},"er?]ejG6{%ak;#AVRGQt":{"opcode":"operator_subtract","next":null,"parent":"P.g^fkm=~V!am=FP-8JX","inputs":{"NUM1":[3,"Eo2eL~g]#5?0@Z0PA)S@",[4,""]],"NUM2":[3,"+?,qZP0E:{RDzX^pIj82",[4,""]]},"fields":{},"shadow":false,"topLevel":false},"Eo2eL~g]#5?0@Z0PA)S@":{"opcode":"operator_lt","next":null,"parent":"er?]ejG6{%ak;#AVRGQt","inputs":{"OPERAND1":[3,"@4a{k*2T*1jKg=|%p93x",[10,""]],"OPERAND2":[1,[10,"-100"]]},"fields":{},"shadow":false,"topLevel":false},"@4a{k*2T*1jKg=|%p93x":{"opcode":"sensing_mousey","next":null,"parent":"Eo2eL~g]#5?0@Z0PA)S@","inputs":{},"fields":{},"shadow":false,"topLevel":false},"+?,qZP0E:{RDzX^pIj82":{"opcode":"operator_lt","next":null,"parent":"er?]ejG6{%ak;#AVRGQt","inputs":{"OPERAND1":[1,[10,"100"]],"OPERAND2":[3,"/J{y:a3r,njUgbvFjvH3",[10,"-100"]]},"fields":{},"shadow":false,"topLevel":false},"/J{y:a3r,njUgbvFjvH3":{"opcode":"sensing_mousey","next":null,"parent":"+?,qZP0E:{RDzX^pIj82","inputs":{},"fields":{},"shadow":false,"topLevel":false},"gwv2VC.%dKR-lV?Bq=)D":{"opcode":"looks_switchcostumeto","next":"oFI=-5DC=TWvmFb`dp,H","parent":"d/(6j=*#A6*P0)nQRzDe","inputs":{"COSTUME":[1,"0KAF7t|XCj@6k{N2]2W["]},"fields":{},"shadow":false,"topLevel":false},"0KAF7t|XCj@6k{N2]2W[":{"opcode":"looks_costume","next":null,"parent":"gwv2VC.%dKR-lV?Bq=)D","inputs":{},"fields":{"COSTUME":["BIG",null]},"shadow":true,"topLevel":false},"oFI=-5DC=TWvmFb`dp,H":{"opcode":"motion_gotoxy","next":"iTOTWo$,lGl:[K@NJsLm","parent":"gwv2VC.%dKR-lV?Bq=)D","inputs":{"X":[1,[4,"0"]],"Y":[3,[12,"scroll y","6vv2a}c@$M(l5k5Y%??3"],[4,"-100"]]},"fields":{},"shadow":false,"topLevel":false},"iTOTWo$,lGl:[K@NJsLm":{"opcode":"looks_switchcostumeto","next":"K+y2zdu_^MQ:ka6BT7s3","parent":"oFI=-5DC=TWvmFb`dp,H","inputs":{"COSTUME":[3,[12,"scroll top","*H[%os,O3c,|LyTlT$8h"],"UO3x(W.MIrkD~rFS-d)3"]},"fields":{},"shadow":false,"topLevel":false},"UO3x(W.MIrkD~rFS-d)3":{"opcode":"looks_costume","next":null,"parent":"iTOTWo$,lGl:[K@NJsLm","inputs":{},"fields":{"COSTUME":["frame-0",null]},"shadow":true,"topLevel":false},"K+y2zdu_^MQ:ka6BT7s3":{"opcode":"control_if","next":"Mt/qiLc9;dBc`S,9VmE|","parent":"iTOTWo$,lGl:[K@NJsLm","inputs":{"CONDITION":[2,"XD/[wphD2Iuwqy])E~^v"],"SUBSTACK":[2,"W93xa4J=jC^=1cw8-vo["]},"fields":{},"shadow":false,"topLevel":false},"XD/[wphD2Iuwqy])E~^v":{"opcode":"operator_gt","next":null,"parent":"K+y2zdu_^MQ:ka6BT7s3","inputs":{"OPERAND1":[3,[12,"scroll y","6vv2a}c@$M(l5k5Y%??3"],[10,""]],"OPERAND2":[1,[10,"450"]]},"fields":{},"shadow":false,"topLevel":false},"W93xa4J=jC^=1cw8-vo[":{"opcode":"control_if_else","next":null,"parent":"K+y2zdu_^MQ:ka6BT7s3","inputs":{"CONDITION":[2,"C[pfZzv,RFrq#pPw@cfb"],"SUBSTACK":[2,"YsJZsSB_%W;UltZPux:Q"],"SUBSTACK2":[2,"Nf6/3T@o(D~x(amAN%#A"]},"fields":{},"shadow":false,"topLevel":false},"C[pfZzv,RFrq#pPw@cfb":{"opcode":"operator_lt","next":null,"parent":"W93xa4J=jC^=1cw8-vo[","inputs":{"OPERAND1":[3,[12,"scroll top","*H[%os,O3c,|LyTlT$8h"],[10,""]],"OPERAND2":[1,[10,(''+(pageCount - 1))]]},"fields":{},"shadow":false,"topLevel":false},"YsJZsSB_%W;UltZPux:Q":{"opcode":"data_setvariableto","next":"rYuGq]:/yzhO`tg8x:]t","parent":"W93xa4J=jC^=1cw8-vo[","inputs":{"VALUE":[3,".@-iKb/H|ElmY7Ok{J*8",[10,"1"]]},"fields":{"VARIABLE":["scroll y","6vv2a}c@$M(l5k5Y%??3"]},"shadow":false,"topLevel":false},".@-iKb/H|ElmY7Ok{J*8":{"opcode":"operator_subtract","next":null,"parent":"YsJZsSB_%W;UltZPux:Q","inputs":{"NUM1":[3,[12,"scroll y","6vv2a}c@$M(l5k5Y%??3"],[4,""]],"NUM2":[3,[12,"DISTANCE","`i%kbp*F[(|YAJ!]dwa-"],[4,""]]},"fields":{},"shadow":false,"topLevel":false},"rYuGq]:/yzhO`tg8x:]t":{"opcode":"data_changevariableby","next":null,"parent":"YsJZsSB_%W;UltZPux:Q","inputs":{"VALUE":[1,[4,"1"]]},"fields":{"VARIABLE":["scroll top","*H[%os,O3c,|LyTlT$8h"]},"shadow":false,"topLevel":false},"Nf6/3T@o(D~x(amAN%#A":{"opcode":"control_if","next":null,"parent":"W93xa4J=jC^=1cw8-vo[","inputs":{"CONDITION":[2,"|-t]9=y2pPm4PAEKPiCE"],"SUBSTACK":[2,"neuH.GJFB^iC8jl84Rq."]},"fields":{},"shadow":false,"topLevel":false},"|-t]9=y2pPm4PAEKPiCE":{"opcode":"operator_gt","next":null,"parent":"Nf6/3T@o(D~x(amAN%#A","inputs":{"OPERAND1":[3,[12,"scroll y","6vv2a}c@$M(l5k5Y%??3"],[10,""]],"OPERAND2":[1,[10,"700"]]},"fields":{},"shadow":false,"topLevel":false},"neuH.GJFB^iC8jl84Rq.":{"opcode":"data_setvariableto","next":null,"parent":"Nf6/3T@o(D~x(amAN%#A","inputs":{"VALUE":[1,[10,"700"]]},"fields":{"VARIABLE":["scroll y","6vv2a}c@$M(l5k5Y%??3"]},"shadow":false,"topLevel":false},"Mt/qiLc9;dBc`S,9VmE|":{"opcode":"control_if","next":null,"parent":"K+y2zdu_^MQ:ka6BT7s3","inputs":{"CONDITION":[2,"tCCTQe+yL[bO.+R)eF3P"],"SUBSTACK":[2,"NI/L,m(B8]s*aGqCulNa"]},"fields":{},"shadow":false,"topLevel":false},"tCCTQe+yL[bO.+R)eF3P":{"opcode":"operator_lt","next":null,"parent":"Mt/qiLc9;dBc`S,9VmE|","inputs":{"OPERAND1":[3,[12,"scroll y","6vv2a}c@$M(l5k5Y%??3"],[10,""]],"OPERAND2":[1,[10,"-100"]]},"fields":{},"shadow":false,"topLevel":false},"NI/L,m(B8]s*aGqCulNa":{"opcode":"control_if_else","next":null,"parent":"Mt/qiLc9;dBc`S,9VmE|","inputs":{"CONDITION":[2,"*-(^q(L+#OsSy6niQD*j"],"SUBSTACK":[2,"Q:{Nk]0N~!|X#s|MC3k%"],"SUBSTACK2":[2,"VxwXakZHCvR~M?N,gx.j"]},"fields":{},"shadow":false,"topLevel":false},"*-(^q(L+#OsSy6niQD*j":{"opcode":"operator_gt","next":null,"parent":"NI/L,m(B8]s*aGqCulNa","inputs":{"OPERAND1":[3,[12,"scroll top","*H[%os,O3c,|LyTlT$8h"],[10,""]],"OPERAND2":[1,[10,"1"]]},"fields":{},"shadow":false,"topLevel":false},"Q:{Nk]0N~!|X#s|MC3k%":{"opcode":"data_changevariableby","next":"ibI_9M6uWN7HA%p4X*K)","parent":"NI/L,m(B8]s*aGqCulNa","inputs":{"VALUE":[1,[4,"-1"]]},"fields":{"VARIABLE":["scroll top","*H[%os,O3c,|LyTlT$8h"]},"shadow":false,"topLevel":false},"ibI_9M6uWN7HA%p4X*K)":{"opcode":"data_setvariableto","next":null,"parent":"Q:{Nk]0N~!|X#s|MC3k%","inputs":{"VALUE":[3,"Zh8Z^-`:)]Dc%W_GqJw(",[10,"1"]]},"fields":{"VARIABLE":["scroll y","6vv2a}c@$M(l5k5Y%??3"]},"shadow":false,"topLevel":false},"Zh8Z^-`:)]Dc%W_GqJw(":{"opcode":"operator_add","next":null,"parent":"ibI_9M6uWN7HA%p4X*K)","inputs":{"NUM1":[3,[12,"scroll y","6vv2a}c@$M(l5k5Y%??3"],[4,""]],"NUM2":[3,[12,"DISTANCE","`i%kbp*F[(|YAJ!]dwa-"],[4,""]]},"fields":{},"shadow":false,"topLevel":false},"VxwXakZHCvR~M?N,gx.j":{"opcode":"data_setvariableto","next":null,"parent":"NI/L,m(B8]s*aGqCulNa","inputs":{"VALUE":[1,[10,"-100"]]},"fields":{"VARIABLE":["scroll y","6vv2a}c@$M(l5k5Y%??3"]},"shadow":false,"topLevel":false},"[z3g:Sk$U%rvv5xlN3qp":{"opcode":"event_whenkeypressed","next":"5,FSF_=55lIckRWYk.~,","parent":null,"inputs":{},"fields":{"KEY_OPTION":["up arrow",null]},"shadow":false,"topLevel":true,"x":3,"y":710},"5,FSF_=55lIckRWYk.~,":{"opcode":"control_if","next":null,"parent":"[z3g:Sk$U%rvv5xlN3qp","inputs":{"CONDITION":[2,"V1H]3yj+4,mT@cEVia%]"],"SUBSTACK":[2,"JUra?{uppCpG^JmM(1[A"]},"fields":{},"shadow":false,"topLevel":false},"V1H]3yj+4,mT@cEVia%]":{"opcode":"operator_not","next":null,"parent":"5,FSF_=55lIckRWYk.~,","inputs":{"OPERAND":[2,"JV7(y(e)O6Fq1M5x@DOB"]},"fields":{},"shadow":false,"topLevel":false},"JV7(y(e)O6Fq1M5x@DOB":{"opcode":"sensing_keypressed","next":null,"parent":"V1H]3yj+4,mT@cEVia%]","inputs":{"KEY_OPTION":[1,"4?5bqpbP[zFZAkbq,,@g"]},"fields":{},"shadow":false,"topLevel":false},"4?5bqpbP[zFZAkbq,,@g":{"opcode":"sensing_keyoptions","next":null,"parent":"JV7(y(e)O6Fq1M5x@DOB","inputs":{},"fields":{"KEY_OPTION":["up arrow",null]},"shadow":true,"topLevel":false},"JUra?{uppCpG^JmM(1[A":{"opcode":"data_setvariableto","next":null,"parent":"5,FSF_=55lIckRWYk.~,","inputs":{"VALUE":[1,[10,"-10"]]},"fields":{"VARIABLE":["scroll v","aDfhX.aasQ}toddK|FHl"]},"shadow":false,"topLevel":false},"aKxm-?4pFz2Iqh+*JbCQ":{"opcode":"procedures_definition","next":"5?~nDVd=jZB7*Mi3Z#kN","parent":null,"inputs":{"custom_block":[1,",fX9`va7(ld:[j2RQQf+"]},"fields":{},"shadow":false,"topLevel":true,"x":816,"y":203},",fX9`va7(ld:[j2RQQf+":{"opcode":"procedures_prototype","next":null,"parent":"aKxm-?4pFz2Iqh+*JbCQ","inputs":{},"fields":{},"shadow":true,"topLevel":false,"mutation":{"tagName":"mutation","children":[],"proccode":"IterClone","argumentids":"[]","argumentnames":"[]","argumentdefaults":"[]","warp":"true"}},"5?~nDVd=jZB7*Mi3Z#kN":{"opcode":"looks_switchcostumeto","next":"cR@M[W+Jv|ZgZG7F97TS","parent":"aKxm-?4pFz2Iqh+*JbCQ","inputs":{"COSTUME":[3,"]_[G)l]OTJ`M8IRD7~oj","-%q^$Bf[Z`]Iv:t]U@#C"]},"fields":{},"shadow":false,"topLevel":false},"]_[G)l]OTJ`M8IRD7~oj":{"opcode":"operator_add","next":null,"parent":"5?~nDVd=jZB7*Mi3Z#kN","inputs":{"NUM1":[3,[12,"scroll top","*H[%os,O3c,|LyTlT$8h"],[4,""]],"NUM2":[1,[4,"1"]]},"fields":{},"shadow":false,"topLevel":false},"-%q^$Bf[Z`]Iv:t]U@#C":{"opcode":"looks_costume","next":null,"parent":"5?~nDVd=jZB7*Mi3Z#kN","inputs":{},"fields":{"COSTUME":["costume1",null]},"shadow":true,"topLevel":false},"cR@M[W+Jv|ZgZG7F97TS":{"opcode":"motion_gotoxy","next":null,"parent":"5?~nDVd=jZB7*Mi3Z#kN","inputs":{"X":[1,[4,"0"]],"Y":[3,"Fb#H_J:;1^.:~i9Bl;|%",[4,"-100"]]},"fields":{},"shadow":false,"topLevel":false},"Fb#H_J:;1^.:~i9Bl;|%":{"opcode":"operator_subtract","next":null,"parent":"cR@M[W+Jv|ZgZG7F97TS","inputs":{"NUM1":[3,[12,"scroll y","6vv2a}c@$M(l5k5Y%??3"],[4,""]],"NUM2":[3,[12,"DISTANCE","`i%kbp*F[(|YAJ!]dwa-"],[4,""]]},"fields":{},"shadow":false,"topLevel":false},"aC/R3/kz*lW.SeFSZH`C":{"opcode":"event_whenkeypressed","next":"/FpC145CcEYX0?xhV~@P","parent":null,"inputs":{},"fields":{"KEY_OPTION":["down arrow",null]},"shadow":false,"topLevel":true,"x":1,"y":959},"/FpC145CcEYX0?xhV~@P":{"opcode":"control_if","next":null,"parent":"aC/R3/kz*lW.SeFSZH`C","inputs":{"CONDITION":[2,"a=HEv-j3$W/~Zm)Qi`Jz"],"SUBSTACK":[2,"bQQtM{0=InJ!q{LWF|%-"]},"fields":{},"shadow":false,"topLevel":false},"a=HEv-j3$W/~Zm)Qi`Jz":{"opcode":"operator_not","next":null,"parent":"/FpC145CcEYX0?xhV~@P","inputs":{"OPERAND":[2,"y!+7?|,+gQ4KQp8)j6;b"]},"fields":{},"shadow":false,"topLevel":false},"y!+7?|,+gQ4KQp8)j6;b":{"opcode":"sensing_keypressed","next":null,"parent":"a=HEv-j3$W/~Zm)Qi`Jz","inputs":{"KEY_OPTION":[1,"J)i-G//WBbQ2]-4bhMIJ"]},"fields":{},"shadow":false,"topLevel":false},"J)i-G//WBbQ2]-4bhMIJ":{"opcode":"sensing_keyoptions","next":null,"parent":"y!+7?|,+gQ4KQp8)j6;b","inputs":{},"fields":{"KEY_OPTION":["down arrow",null]},"shadow":true,"topLevel":false},"bQQtM{0=InJ!q{LWF|%-":{"opcode":"data_setvariableto","next":null,"parent":"/FpC145CcEYX0?xhV~@P","inputs":{"VALUE":[1,[10,"10"]]},"fields":{"VARIABLE":["scroll v","aDfhX.aasQ}toddK|FHl"]},"shadow":false,"topLevel":false}},
        comments: {},
        currentCostume: 0,
        costumes: [],
        sounds: [],
        volume: 100,
        visible: true,
        x: 0,
        y: 0,
        size: size,
        direction: 90,
        draggable: false,
        rotationStyle: "all around"
      }

      const ctx = canvas.getContext('2d');
      let zip = new JSZip();
      let length = pageCount;
      let i = 0;
      let delay = 0;

      function next() {
        pdf.getPage(i + 1).then(function(page) {
          let viewport = page.getViewport({
            scale: scale,
          });

          //
          // Prepare canvas using PDF page dimensions
          //
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          //
          // Render PDF page into canvas context
          //
          let renderContext = {
            canvasContext: ctx,
            viewport: viewport,
          };
          const task = page.render(renderContext);

          console.log(i, pageCount)

          task.promise.then(n => {
            let url = canvas.toDataURL('image/png');
            //console.log(frame, tempCanvas.toDataURL('image/png'));

            i++;
            let img = new Image();
            img.src = url;
            imgs.appendChild(img);
            img.onload = () => {
              ctx.drawImage(img, 0, 0);
              imgs.innerHTML = '';
              url = canvas.toDataURL('image/png');
              fetch(url).then(n => n.arrayBuffer()).then(n => {
                let spark = new SparkMD5.ArrayBuffer()
                spark.append(n);
                let md5 = spark.end();
                let thisCostume = {
                  assetId: md5,
                  name: "frame-" + i,
                  "bitmapResolution": 2,
                  md5ext: md5 + ".png",
                  dataFormat: "png",
                  rotationCenterX: img.naturalWidth / 2,
                  rotationCenterY: img.naturalHeight / 2
                };
                jsonData.costumes.push(thisCostume);
                zip.file(md5 + ".png", url.replace('data:image/png;base64,', ''), {
                  base64: true
                });
                progressBarDisplay(i / length * 100 + "%");
                if (i >= length) {
                  jsonData.costumes.push({
                    "assetId": "b2acbebd5d3fa3c824a9da5bace99d7c",
                    "name": "BIG",
                    "bitmapResolution": 1,
                    "md5ext": "b2acbebd5d3fa3c824a9da5bace99d7c.svg",
                    "dataFormat": "svg",
                    "rotationCenterX": 1034.6333333333325,
                    "rotationCenterY": 1001.2903225806449
                  });
                  fetch("./assets/b2acbebd5d3fa3c824a9da5bace99d7c.svg").then(n=>n.text()).then(n=>{
                    zip.file("b2acbebd5d3fa3c824a9da5bace99d7c.svg", n);
                    console.log(i, length);
                    zip.file("sprite.json", JSON.stringify(jsonData).replace("<FRAME_DURATION>", '' + (delay / 100)));
                    zip.generateAsync({
                      type: "blob"
                    }).then(function(content) {
                      // see FileSaver.js

                      status.textContent = "Downloading file... Upload another if you wish!";
                      saveAs(content, fileName + ".sprite3");
                      hideProgressBar();
                    });
                  });
                } else {
                  next();
                }
              });
            };
          });
        });
      }
      next();
    });
  });
}

hideProgressBar();

fileInput.addEventListener('change', () => {
  hideProgressBar();
  status.textContent = "Uploading file...";
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    status.textContent = "Waiting for scan to begin...";

    const url = e.target.result;

    pdfjsLib.GlobalWorkerOptions.workerSrc =
    './dependencies/pdf.worker.js';


    let loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function(pdf) {
      setTimeout(() => {
        scan(file.name.split('.').join('_'), pdf);
      }, 1000);

    });
  }
  reader.readAsDataURL(file);
}, false);
