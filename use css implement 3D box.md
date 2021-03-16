``` scss
// 定义颜色变量
$bg-1: #C6C5E1;
$bg-2: #686688;

$white-1: #fbfbfb;
$white-2: #f2f2f2;
$white-3: #c4c2d6;
$white-4: #675D6E;

$water-1: #7095c9;
$water-2: #6187be;
$water-3: #4d6d98;
$water-4: #234062;

$light-1: #def5f1;
$light-2: #badfd9;

*,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
transform-style: preserve-3d; // 设定3D变换的效果可以保存起来, 不设定, 看不见位移的变化和旋转
}

body {
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
overflow: hidden;
background-color: $bg-1;
cursor: pointer;
font-size: 2em;

//房屋开始
.house {
	width: 36rem;
	height: 24rem;
	border: 1px solid red;
	color: maroon;
	transform: perspective(2000px) rotateX(20deg) rotateZ(10deg); // 3D 选择 deg: 度数
	position: relative;
	// 地板主区域开始
	.floorMain {
		width: 30rem;
		height: 24rem;
		border: 1px solid blue;
		.cube {
			position: absolute;
		}
		.face {
			background-color: wheat;
			position: absolute;
		}
		// &符号: 引用父元素的选择器
		&-front {
			width: 30rem;
			height: 0.4rem;
			transform: rotateX(90deg) translateZ(-24rem);
			transform-origin: top;
		}
		&-back {
			width: 30rem;
			height: 0.4rem;
			transform: rotateX(90deg);
			transform-origin: top;
		}
		&-left {
			width: 24rem;
			height: 0.4rem;
			transform: rotateY(-90deg) rotateZ(90deg) translateX(-0.4rem);
			transform-origin: left bottom;
		}
		&-right {
			width: 24rem;
			height: 0.4rem;
			transform: rotateY(90deg) rotateZ(-90deg) translateX(0.4rem) translateZ(6rem); // 30 - 24
			transform-origin: right bottom;
		}
		&-top {
			width: 30rem;
			height: 24rem;
			transform: translateZ(0.4rem);
			// background-color: transparent !important; // !important 提高权重
		}
		&-bottom {
			width: 30rem;
			height: 24rem;
		}
	}
	// 地板主区域结束
}
// 房屋结束
}
```

``` html 
<body>
    <div class="house">
        <div class="floorMain cube">
            <div class="floorMain-front face"></div>
            <div class="floorMain-back face"></div>
            <div class="floorMain-left face"></div>
            <div class="floorMain-right face"></div>
            <div class="floorMain-top face"></div>
            <div class="floorMain-bottom face"></div>
        </div>
    </div>
</body>
```