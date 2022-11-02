import gsap from 'gsap'

// grab everything we need
const btn = document.querySelector('button.mobile')
const menu = document.querySelector('.menu')

// add event listeners
btn.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})

// console.log(gsap)
console.clear()
const items = document.querySelectorAll('.boxes__item')

items.forEach((item) => {
  console.log(item.querySelector('.paragraph'))
  const tl = gsap
    .timeline({ paused: true })
    .to(item.querySelector('.paragraph'), { color: 'purple' })

  item.addEventListener('mouseenter', () => tl.play())
})

gsap.from('.boxes__item', {
  duration: 2,
  // x: () => 'random(-200, 200)',
  y: -100,
  // stagger: function (index, target, list) {
  //   // your custom logic here. Return the delay from the start (not between each)
  //   return index * 0.2
  // },
  backgroundColor: '#560563',
  // ease: 'back.out',
  // ease: 'elastic',
  // ease: 'bounce',
  // ease: 'expo.inOut',
  // ease: 'sine.inOut',
  // ease: 'back(6)',
  // ease: 'linear.out',
})

/* Accordion */
// Listen for click on the document
if (document.getElementById('accordion')?.id === 'accordion') {
  document.addEventListener('click', function (event) {
    //Bail if our clicked element doesn't have the class
    if (!event.target.classList.contains('accordion-toggle')) return

    var span = event.target.querySelector('span')

    // Get the target content
    var content = document.querySelector(event.target.hash)
    if (!content) return

    // Prevent default link behavior
    event.preventDefault()

    // If the content is already expanded, collapse it and quit
    if (content.classList.contains('max-h-64')) {
      content.classList.remove('max-h-64')
      return
    }

    // Get all open accordion content, loop through it, and close it
    var accordions = document.querySelectorAll('.accordion-content.max-h-64')
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove('max-h-64')
    }

    // Toggle our content
    content.classList.toggle('max-h-64')

    // Span Stuff
    if (span.classList.contains('rotate-180')) {
      content.classList.remove('rotate-180')
      return
    }
    var spans = document.querySelectorAll('span.rotate-180')
    for (var i = 0; i < spans.length; i++) {
      spans[i].classList.remove('rotate-180')
    }
    span.classList.toggle('rotate-180')
  })
}
