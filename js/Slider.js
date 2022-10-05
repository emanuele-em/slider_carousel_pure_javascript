
class Slider {
    constructor({container="sliderContainer", textColor="white", ctaBackground="white", ctaColor="black", autoplay=true, autoplaySpeed=3000, navArrows = true, dots = true, marginTop= 0}) {
      this.currentSlideIndex = 0;
      this.slides = [];
      this.container = document.getElementById(container);
      this.navArrows = navArrows;
      this.dots = dots;
      this.textColor = textColor;
      this.ctaBackground = ctaBackground;
      this.ctaColor = ctaColor;
      this.autoplay = autoplay;
      this.autoplaySpeed = autoplaySpeed;
      this.marginTop = marginTop;
    }
  
    prevSlide = () => {
      this.nextSlideIndex = (this.currentSlideIndex === 0) ? this.slides.length - 1 : this.currentSlideIndex - 1;
  
      // Add a class to change slide with specific animation
      document
        .getElementById("slide" + this.nextSlideIndex)
        .setAttribute("class", "singleSlide slideIn");
      document
        .getElementById("slide" + this.currentSlideIndex)
        .setAttribute("class", "singleSlide slideOut");
      document
        .getElementById("dot" + this.nextSlideIndex)
        .classList.add("active");
      document
        .getElementById("dot" + this.currentSlideIndex)
        .classList.remove("active");
  
      this.currentSlideIndex = this.nextSlideIndex;
    }
  
    nextSlide = () => {
      this.nextSlideIndex = (this.currentSlideIndex === this.slides.length - 1) ? 0 : this.currentSlideIndex + 1;
  
      document
        .getElementById("slide" + this.nextSlideIndex)
        .setAttribute("class", "singleSlide slideIn");
      document
        .getElementById("slide" + this.currentSlideIndex)
        .setAttribute("class", "singleSlide slideOut");
      document
        .getElementById("dot" + this.nextSlideIndex)
        .classList.add("active");
      document
        .getElementById("dot" + this.currentSlideIndex)
        .classList.remove("active");
  
      this.currentSlideIndex = this.nextSlideIndex;
    }
  
    goTo = (index) => {
      var diff = (this.currentSlideIndex - index) * 100;
      //console.log(diff);
      this.nextSlideIndex = index;
      if (!diff) return; 
  
  
      var [inTransition, outTransition] =  ["singleSlide slideIn", "singleSlide slideOut"];
  
      document
        .getElementById("slide" + this.nextSlideIndex)
        .setAttribute("class", inTransition);
      document
        .getElementById("slide" + this.currentSlideIndex)
        .setAttribute("class", outTransition);
      document
        .getElementById("dot" + this.nextSlideIndex)
        .classList.add("active");
      document
        .getElementById("dot" + this.currentSlideIndex)
        .classList.remove("active");
  
      this.currentSlideIndex = this.nextSlideIndex;
    }
  
    init = () => {
  
      var newHTML = `<div id='slider'>`;
  
      // Loop through the array and create step by step list of slides
      this.slides.forEach(slide => {
        newHTML +=
          "<div id='" +
          slide.id +
          "' class='singleSlide' style='background-image:url(" +
          slide.background +
          ");'>" +
          "<div class='slideOverlay'>" +
          "<div style='margin-top:"+this.marginTop+"px'></div>" +
          "<h2 class='title'>" +
          slide.title +
          "</h2>" +
          "<h4 class='subtitle'>" +
          slide.subtitle +
          "</h4>" +
          "<a class='sliderCta' href='" +
          slide.link +
          "' target='_blank'>"+slide.cta+"</a>" +
          "</div>" +
          "</div>";
      });
  
      
      newHTML += `</div>`;
  
      this.container.innerHTML = newHTML;
  
      if (this.navArrows) {
  
  
        var sliderNext = document.createElement('div');
        sliderNext.id = 'sliderNext';
        sliderNext.className = "sliderNav";
        sliderNext.style.borderColor = this.ctaBackground;
        sliderNext.onclick = this.nextSlide;
        this.container.append(sliderNext);
  
        var sliderPrev = document.createElement('div');
        sliderPrev.id = 'sliderPrev';
        sliderPrev.className = "sliderNav";
        sliderPrev.style.borderColor = this.ctaBackground;
        sliderPrev.onclick = this.prevSlide;
        this.container.prepend(sliderPrev);
      }
  
      if (this.dots) {
        var dots = document.createElement('div');
        dots.id="dots";
        this.slides.forEach((slide, index) => {
          var dot = document.createElement('div');
          dot.className= "dot"
          dot.id = "dot"+index;
          dot.onclick = e => this.goTo(index);
          dots.append(dot);
        })
        this.container.append(dots);
        document
        .getElementById("dot" + this.currentSlideIndex)
        .classList.add("active");
  
      }
  
      var style = document.createElement('style');
          style.innerHTML = '.dot.active{ background-color: '+this.ctaBackground+'; }';
          style.innerHTML += '.sliderCta { padding: 10px 25px; color:'+this.ctaColor+';  background-color: '+this.ctaBackground+'; text-decoration: none; }';
          style.innerHTML += '.title, .subtitle { color:'+this.textColor+' !important }';
      document.getElementsByTagName('head')[0].appendChild(style);
  
      // show first slide
        document.getElementById("slide" + this.currentSlideIndex).style.opacity = 1;
      if(this.autoplay) setInterval(() => {
        this.nextSlide()
      }, this.autoplaySpeed);
    }
  
    newSlide = (title, subtitle, background, link, cta) => {
      var slide = new Slide(title, subtitle, background, link, cta, this.slides.length);
      this.slides.push(slide);
    }
  }
  
  // This function build a single slide
  class Slide {
    constructor(title, subtitle, background, link,cta, slideIndex) {
      this.title = title;
      this.subtitle = subtitle;
      this.background = background;
      this.link = link;
      this.cta = cta;
      this.id = "slide" + slideIndex;
    }
  }
  
  
  
  