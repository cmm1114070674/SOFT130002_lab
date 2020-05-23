
/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/

/*Global Variable Area */

/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
const bd = document.querySelector('#bd');
bd.style.cssText = `
  max-width: 600px;
  margin: 0px auto;
  background-color: rgb(224, 224, 238);
  padding: 60px;
  padding-top: 0;
  overflow: auto;
`;
const table = document.querySelector('table');
table.style.cssText = `
  margin-top: 30px;
  width: 600px;
`;
const h3 = document.querySelector('h3');
h3.style.cssText = `
  max-width: 600px;
  margin: 0px auto;
  background-color: rgb(224, 224, 238);
  padding: 10px 60px;
`;

const wrap = document.querySelector('div.wrap');
const prev = document.querySelector('.arrow.arrow_left');
const next = document.querySelector('.arrow.arrow_right');
const btns = document.querySelector('.buttons').children;
const len = btns.length;
const aniTime = 0.7;

function clearAllBtn() {
  for (let i=0; i<len; i++) {
    btns[i].className = '';
  }
}
let setted = false; // 锁
const proxy = new Proxy({ count: 0 }, {
  set: function(target, prop, val) {
    if (setted) return true;
    setted = true;
    clearAllBtn(); // 隐藏选中 btn
    target[prop] = val;
    if (target[prop] > len - 1) {
      setTimeout(() => {
        target[prop] = 0;
        wrap.style.transition = "none";
        wrap.style.transform = "translate(" + -600 * target[prop] + "px)";
        setted = false;
      }, aniTime * 1000);
    }
    if (target[prop] < 0) {
      setTimeout(() => {
        target[prop] = len - 1;
        wrap.style.transition = "none";
        wrap.style.transform = "translate(" + -600 * target[prop] + "px)";
        setted = false;
      }, aniTime * 1000);
    }
    wrap.style.transition = `transform ${aniTime}s`;
    wrap.style.transform = "translate(" + -600 * target[prop] + "px)";
    btns[(target[prop] + len) % len].className = 'on'; // 显示选中 btn
    if (target[prop] >= 0 && target[prop] < len) setted = false;
    return true;
  }
});

prev.onclick = () => setArrow.call(this, false);
next.onclick = () => setArrow.call(this, true);

const setArrow = function (right) {
  if (right) {
    proxy.count++; 
  } else {
    proxy.count--;
  }
}

/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
let carouselTimer;
const carousel = function() {
  carouselTimer = setInterval(() => {
    proxy.count++;
  }, 2000);
}
carousel();
const container = document.querySelector('.container');
container.onmouseover = function() { clearInterval(carouselTimer) }
container.onmouseout = function() { carousel() }

/*********************************************end*************************************/



/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
for (let i=0; i<btns.length; i++) {
  btns[i].onclick = function() {
    proxy.count = i % len;
  }
}

/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
const trs = document.querySelectorAll('tr');
for (let i=1; i<trs.length; i++) {
  const children = trs[i].children;
  for (let j=0; j<children.length; j++) {
    children[j].setAttribute('contenteditable', 'true');
    children[j].onclick = function() {
      // window.getSelection().setPosition(this, 0);
      setCartPosition.call(this);
    };
  }
}
const setCartPosition = function() {
  let sel, range;
  if (window.getSelection && document.createRange) {
      range = document.createRange();
      range.selectNodeContents(this);
      range.collapse(true); // 折叠到首位
      sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
  } else if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(this);
      range.collapse(true); // 折叠到首位
      range.select();
  }
}

/*********************************************end*************************************/