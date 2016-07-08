# responsiveMoneytreasure

这是一个响应式的网页

- 使用**webstorm**来开发

- 网站使用**html5+css3**对页面进行布局和样式的调整

- 使用**媒体查询**针对不同分辨率的屏幕设计了更符合用户体验的网站

- 本网站轮播图使用的是[OwlCarousel]


### 分享一下[OwlCarousel]的使用方法

- 首先引入插件所需的js和css文件
css引在头部
```html
    <link rel="stylesheet" href="js/vendor/owl.carousel.2.1.0/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="js/vendor/owl.carousel.2.1.0/assets/owl.theme.default.min.css">
```
js最好引在最后,另外要注意此插件是基于jquery类库的，所以要一并引入
```html
    <script src="js/vendor/jquery.min.js"></script>
    <script src="js/vendor/owl.carousel.2.1.0/owl.carousel.min.js"></script>
```

- 页面布局
```html
    <div class="owl-carousel owl-theme">
        <div class="item">
                <img src="img/ad001.png" alt="2015年度报告">
        </div>
        <div class="item">
                <img src="img/ad002.png" alt="新年红包">
        </div>
        <div class="item">
                <img src="img/ad003.png" alt="新手秘籍">
        </div>
    </div>
```

- 这里我使用[picturefill] 以便不同分辨率的设备获取适合尺寸的图片
```html
    <picture>
        <source srcset="img/ad001-l.png" media="(min-width:50em)">
        <source srcset="img/ad001-m.png" media="(min-width:30em)">
        <img src="img/ad001.png" alt="2015年度报告">
    </picture>
```

### 接下来分享一些本次学习的心得


- 使用这一段代码可以 **强制使用IE的最新选择模式**
```html
<meta http-equiv="x-ua-compatible" content="ie=edge">
```

- 也可以模仿ie7
```html
<meta http-equiv="x-ua-compatible" content="ie=EmulateIE7">
```

- 指定该属性 布局视口成为理想视口
```html
<meta name="viewport" content="width=device-width,initial-scale=1">
```

- IE浏览器检测 低于IE8提示升级浏览器
```html
<!--[if lte IE 8]>
<p class="browerupgrade">您的浏览器版本老的可笑，请到 <a href="http://browsehappy.com">这里</a> 更新，以获取最优质的体验!!!</p>
<![endif]-->
```


- 低于IE9的浏览器补充[html5shiv.js]
```html
<!--[if lt IE 9]>
<script src="js/vendor/html5shiv.js"></script>
<![endif]-->
```

- 在页面中引入[respond.css] 也会让老版本浏览器支持css3媒体查询
```html
<link rel="stylesheet" href="css/respond.css">
```

- 切记不要忘了由于不同浏览器默认样式的差异 要重新定义样式
```html
<link rel="stylesheet" href="css/normalize.css">
```

- 媒体查询的一般格式
```css
  @media only screen and (max-width: 50em){}
  @media only screen and (min-width: 30.0625em) and (max-width: 50em){}
  @media only screen and (max-width: 30em){}
```

- 这样的方式可以让我选中除了第一个之后的其他元素
```css
  header ul li + li {}
```



[OwlCarousel]: <http://owlcarousel2.github.io/OwlCarousel2/>
[html5shiv.js]: <https://github.com/aFarkas/html5shiv/>
[picturefill]: <http://scottjehl.github.io/picturefill/>
# responsiveMoneytreasure
