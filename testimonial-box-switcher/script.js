const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Sylvia Plath',
    position: 'Marketing',
    photo:
      'https://randomuser.me/api/portraits/women/6.jpg',
    text:
      "I couldn't be happier with this product and/or service! It meets my various and particular needs, in indescribable ways!",
  },
  {
    name: 'Emily Dickenson',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/3.jpg',
    text:
      "I can't believe it's not butter!",
  },
  {
    name: 'Maya Angelou',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    text:
      "This review is extra long, to show how seamlessly the box adapts! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: 'Elizabeth Barrett Browning',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/1.jpg',
    text:
      "Five stars. This review system doesn't support stars, but I'm giving it five stars anyway - just try and stop me.",
  },
  {
    name: 'Robert Frost',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    text:
      "Reviewing products on the internet is a complicated profession.",
  },
  {
    name: 'John Keats',
    position: 'Accountant',
    photo:
      'https://randomuser.me/api/portraits/men/3.jpg',
    text:
      "Are you still reading these? I'm impressed. You've got the patience of a saint!",
  },
  {
    name: 'Walk Whitman',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/2.jpg',
    text:
      "And now for something completely different.",
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
