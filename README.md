
# Pure Javascript Slider Carousel

A brief description of what this project does and who it's for


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
		"https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://codepen.io/emanuelemicheletti/pen/abYarrv" ,
		"Shop NOW"
		);

		miaslider.newSlide(
		"Second Slide",
		"Lorem ipsum Dolor si amet",
		"https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1600",
		"https://codepen.io/emanuelemicheletti/pen/abYarrv",
		"Open This Product"
		);

		miaslider.newSlide(
		"Third Slide",
		"Lorem ipsum dolor sit amet",
		"https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1600",
		"https://codepen.io/emanuelemicheletti/pen/abYarrv",
		"Shop This Product"
		);

		miaslider.init();
</script>
```

