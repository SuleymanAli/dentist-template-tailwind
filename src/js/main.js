import PerfectScrollbar from 'perfect-scrollbar'

/* Perfect Scrollbar */
var container = document.querySelector('#container')
var ps = new PerfectScrollbar(container)

/* Mobile Menu */
const btn = document.querySelector('button.mobile')
const menu = document.querySelector('.menu')
btn.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})

/* Accordion */
// Listen for click on the document
if (document.getElementById('accordion')?.id === 'accordion') {
  document.addEventListener('click', function (event) {
    // Bail if our clicked element doesn't have the class
    if (!event.target.classList.contains('accordion-toggle')) return

    var span = event.target.querySelector('span')

    // Get the target content
    var content = document.querySelector(event.target.getAttribute('href'))
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
      span.classList.remove('rotate-180')
      return
    }
    var spans = document.querySelectorAll('span.rotate-180')
    for (var i = 0; i < spans.length; i++) {
      spans[i].classList.remove('rotate-180')
    }
    span.classList.toggle('rotate-180')
  })
}
