
# Pure Javascript Slider Carousel

🖼️ 🎠 Lite and Simple Full Slider Carousel pure Javascript and CSS, Custom images, text and colors, easy to implement

## Contributing

Contributions are always welcome!

See [`contributing.md`](contributing.md) for ways to get started.
Please adhere to this project's [`code of conduct`](code_of_conduct.md).

## Demo

[CodePen](https://codepen.io/emanuelemicheletti/pen/abYarrv)

## Authors

- [@emanuele-em](https://www.github.com/emanuele-em)


## Usage/Examples

```html
<div id="mySlider"></div>

<script>
const settings = {
			container: "mySlider", //container name
			textColor: "white", //text color also # or rgba
			ctaBackground: "#81C784", //button color, dots color and nav arrow color
			autoplay: true, //true/false
			autoplaySpeed: 10000, //time slide active before change
			ctaColor: "white", //cta TEXT color
			navArrows: true, //false to hide navigations arrows
			dots: true, //false to hide navigation buttons
			marginTop: 0, //space above first Slide, usefull when you set this slider in the first page behind header nav, this option allow you to center text manually and move the text down
		}

var miaslider = new Slider(settings);

		miaslider.newSlide(
		"First Slide",
		"Lorem ipsum Dolor si amet",
		"/img/1.png",
		"www.google.com" ,
		"Shop NOW"
		);

		miaslider.newSlide(
		"Second Slide",
		"Lorem ipsum Dolor si amet",
		"/img/2.png",
		"www.google.com" ,
		"Open This Product"
		);

		miaslider.newSlide(
		"Third Slide",
		"Lorem ipsum dolor sit amet",
		"/img/3.png",
		"www.google.com" ,
		"Shop This Product"
		);

		miaslider.init();
</script>
```

