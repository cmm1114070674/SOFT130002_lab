# 设计文档

先考虑需求：
1. 需要使用 JS 创建元素（HTMLElement）;
2. 创建的元素需要能设置 class;
3. 创建的元素需要能添加子元素；
4. 创建的元素需要能添加 style;
5. 需要创建 `<img>` 元素;

为了使编程更快捷，并符合预期，JS 创建元素的代码应该能与 HTML 内创建元素的代码尽可能相同。

于是，我设计了 `MyElement` 类：

```js
function MyElement(tag, { className, styleText, src }, children) {
  const elt = document.createElement(tag);
  if (className != undefined) elt.className = className;
  if (styleText != undefined) elt.style.cssText = styleText;
  if (src !== undefined) elt.src = src;
  if (Array.isArray(children)) children.forEach(child => elt.append(child));
  return elt;
}
```

- 通过传入 `tag` 表示要生成元素的标签，确定生成何种元素（`<h3>`、`<p>` 等等）；
- 通过传入 `className` 表示生成元素需要的 class 属性；
- 通过传入 `styleText` 表示生成元素需要的 style 属性；
- 通过传入 `src` 表示生成 `<img>` 元素时需要的 src 属性；
- 通过传入 `children` 表示生成元素时需要生成的子元素；

设计好 `MyElement` 类后，以此为基础创建了 `Item` 类表示 `works` 常量对应的 `HTMLELement` 类；
同时考虑到 `Item` 类代码不宜过长，又创建了 `PhotoList` 类专门表示需要生成的图片列表；

以上设计，使编程更快捷的同时，还保证了代码的高内聚和低耦合等特点，便于其他开发人员的理解和复用。

上述解决方案也存在不足，比如说使用到的大部分是 ES6 语法特性，因此不支持较老的浏览器，比如：IE 等。